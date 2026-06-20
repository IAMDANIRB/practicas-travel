"use strict";
const hotel1 = {
    nombre: "Hotel Mallorca",
    estrellas: 4,
    precio: 120,
    ciudad: "Palma"
};
const hotel2 = {
    nombre: "Hotel Ibiza",
    estrellas: 3,
    precio: 80
    // sin ciudad, y no da error porque es opcional
};
console.log(hotel1);
console.log(hotel2);
// Union types — una variable puede ser de varios tipos posibles
let precio;
precio = 120; // válido
precio = "120 EUR"; // también válido
function buscarPorId(id) {
    console.log("Buscando id: " + id);
}
buscarPorId(5);
buscarPorId("abc123");
// any — evita usarlo, pero debes saber que existe
// any significa "cualquier tipo", básicamente desactiva TypeScript
let datoSinTipo = "puede ser cualquier cosa";
datoSinTipo = 5;
datoSinTipo = true;
// Esto compila pero pierdes toda la ventaja de TypeScript
