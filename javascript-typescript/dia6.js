const { ApolloServer } = require('@apollo/server'); // Importa ApolloServer y gql de apollo-server

const { startStandaloneServer } = require('@apollo/server/standalone'); // Importa startStandaloneServer para iniciar el servidor

const { gql } = require('graphql-tag')


const typeDefs = gql`
    type Hotel {
        id: Int
        nombre: String
        estrellas: Int
        precio: Float
    }

    type Query {
        hoteles: [Hotel]
        hotel(id: Int): Hotel
    }

    type Mutation {
        crearHotel(nombre: String, estrellas: Int, precio: Float): Hotel
        
        borrarHotel(id: Int): String
    }
`

let hoteles = [
    { id: 1, nombre: "Hotel Mallorca", estrellas: 4, precio: 120 },
    { id: 2, nombre: "Hotel Ibiza",    estrellas: 3, precio: 80  },
    { id: 3, nombre: "Hotel Menorca",  estrellas: 5, precio: 200 }
]
// let en vez de const porque lo vamos a modificar

const resolvers = {
    Query: {
        hoteles: () => hoteles,
        hotel: (_, { id }) => hoteles.find(h => h.id === id)
    },

    Mutation: {
        crearHotel: (_, { nombre, estrellas, precio }) => {
            // Los parámetros llegan desestructurados igual que en las queries
            const nuevoHotel = {
                id: hoteles.length + 1,
                nombre,
                // nombre: nombre se puede escribir solo nombre en JS moderno
                estrellas,
                precio
            }
            hoteles.push(nuevoHotel)
            return nuevoHotel
            // Devuelve el hotel creado
        },

        borrarHotel: (_, { id }) => {
            hoteles = hoteles.filter(h => h.id !== id)
            // filter igual que en el servidor REST de ayer
            return "El hotel: " + id + " ha sido borrado"
        }
    }
}

    async function main() {
        const server = new ApolloServer({ typeDefs, resolvers }); 

        const { url } = await startStandaloneServer(server, {
            listen: { port: 4000 }
        })
        
        console.log("Servidor GraphQL corriendo en " + url);
    }

main();