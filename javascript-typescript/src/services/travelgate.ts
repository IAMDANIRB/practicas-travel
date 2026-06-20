const APIKEY = "test0000-0000-0000-0000-000000000000"
const ENDPOINT = "https://api.travelgate.com"

// Definimos la forma de una opción de búsqueda
interface SearchOption {
    id: string
    supplierCode: string
    price: {
        currency: string
        net: number
    }
    rooms: {
        code: string
        description: string
    }[]
}

// Especificamos los tipos de los parámetros y lo que devuelve la función
async function searchHoteles(
    checkIn: string,
    checkOut: string,
    hotelCode: string
): Promise<SearchOption[]> {
    // Promise<SearchOption[]> significa que la función es async
    // y cuando termine devolverá un array de SearchOption

    const query = `
        query {
            hotelX {
                search(
                    criteria: {
                        checkIn: "${checkIn}"
                        checkOut: "${checkOut}"
                        hotels: ["${hotelCode}"]
                        occupancies: [{ paxes: [{ age: 30 }, { age: 30 }] }]
                        currency: "EUR"
                        markets: ["ES"]
                        nationality: "ES"
                        language: "es"
                    }
                    settings: {
                        client: "client_demo"
                        context: "HOTELTEST"
                        testMode: true
                        auditTransactions: false
                        timeout: 18000
                    }
                ) {
                    options {
                        id
                        supplierCode
                        price { currency net }
                        rooms { code description }
                    }
                }
            }
        }
    `

    const respuesta = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Apikey ${APIKEY}`,
            "Accept-Encoding": "gzip",
            "Connection": "keep-alive"
        },
        body: JSON.stringify({ query })
    })

    const datos = await respuesta.json()
    return datos.data.hotelX.search.options
}

export { searchHoteles, SearchOption }
// En TypeScript se usa export en vez de module.exports