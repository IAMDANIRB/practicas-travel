const { searchHoteles } = require('../services/travelgate')
// Importamos desde services, no desde la raíz

async function buscarHoteles(req, res) {
    // Esta función recibe la petición y devuelve la respuesta
    // Antes esto estaba dentro del app.get, ahora está separado
    try {
        const { checkIn, checkOut, hotel } = req.query

        if (!checkIn || !checkOut || !hotel) {
            return res.status(400).json({
                error: "Faltan parámetros: checkIn, checkOut y hotel son obligatorios"
            })
        }

        console.log(`Buscando hotel ${hotel} del ${checkIn} al ${checkOut}...`)

        const opciones = await searchHoteles(checkIn, checkOut, hotel)

        const opcionesLimpias = opciones
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
        console.error("Error al buscar:", error.message)
        res.status(500).json({ error: "Error al conectar con Travelgate" })
    }
}

module.exports = { buscarHoteles }