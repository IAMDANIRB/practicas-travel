// Propiedad opcional — con el ? indicas que puede no existir
interface Hotel {
    nombre: string
    estrellas: number
    precio: number
    ciudad?: string
    // ciudad es opcional, puede venir o no
}

const hotel1: Hotel = {
    nombre: "Hotel Mallorca",
    estrellas: 4,
    precio: 120,
    ciudad: "Palma"
}

const hotel2: Hotel = {
    nombre: "Hotel Ibiza",
    estrellas: 3,
    precio: 80
    // sin ciudad, y no da error porque es opcional
}

console.log(hotel1)
console.log(hotel2)

// Union types — una variable puede ser de varios tipos posibles
let precio: number | string

precio = 120          // válido
precio = "120 EUR"    // también válido

// Muy típico en la API de Travelgate: el id puede ser string o number según el caso
type Id = string | number

function buscarPorId(id: Id) {
    console.log("Buscando id: " + id)
}

buscarPorId(5)
buscarPorId("abc123")

// any — evita usarlo, pero debes saber que existe
// any significa "cualquier tipo", básicamente desactiva TypeScript
let datoSinTipo: any = "puede ser cualquier cosa"
datoSinTipo = 5
datoSinTipo = true
// Esto compila pero pierdes toda la ventaja de TypeScript