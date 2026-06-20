import { Request, Response } from 'express'
// En TypeScript se usa import en vez de require
// Request y Response son los tipos que define Express para req y res

import { searchHoteles, SearchOption } from '../services/travelgate'

// Definimos cómo será cada opción limpia que devolvemos al cliente
interface OpcionLimpia {
    habitacion: string
    precio: number
    moneda: string
    proveedor: string
    id: string
}

async function buscarHoteles(req: Request, res: Response): Promise<void> {
    // req y res ahora están tipados — si escribes req.qeury en vez de req.query,
    // TypeScript te avisa al momento, no cuando ya esté fallando en producción

    try {
        const { checkIn, checkOut, hotel } = req.query as {
            checkIn: string
            checkOut: string
            hotel: string
        }
        // req.query viene sin tipo definido por defecto, así que le decimos
        // explícitamente qué forma esperamos que tenga

        if (!checkIn || !checkOut || !hotel) {
            res.status(400).json({
                error: "Faltan parámetros: checkIn, checkOut y hotel son obligatorios"
            })
            return
        }

        console.log(`Buscando hotel ${hotel} del ${checkIn} al ${checkOut}...`)

        const opciones: SearchOption[] = await searchHoteles(checkIn, checkOut, hotel)

        const opcionesLimpias: OpcionLimpia[] = opciones
            .filter(op => op.price.currency === "EUR")
            .map(op => ({
                habitacion: op.rooms[0].description,
                precio: op.price.net,
                moneda: op.price.currency,
                proveedor: op.supplierCode,
                id: op.id
            }))
            .sort((a, b) => a.precio - b.precio)
            .slice(0, 5)

        res.json({
            total: opcionesLimpias.length,
            opciones: opcionesLimpias
        })

    } catch (error) {
        console.error("Error al buscar:", error)
        res.status(500).json({ error: "Error al conectar con Travelgate" })
    }
}

export { buscarHoteles }