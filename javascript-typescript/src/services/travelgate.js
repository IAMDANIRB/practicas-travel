const APIKEY = "test0000-0000-0000-0000-000000000000"
const ENDPOINT = "https://api.travelgate.com"

async function searchHoteles(checkIn, checkOut, hotelCode) {
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

module.exports = { searchHoteles }