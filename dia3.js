const reservas = [
    {cliente: "Juan", hotel: "Hotel A", noches: 3, precioPorNoche: 100},
    {cliente: "María", hotel: "Hotel B", noches: 2, precioPorNoche: 150},
    {cliente: "Pedro", hotel: "Hotel C", noches: 5, precioPorNoche: 80}
]

function calcularTotal(reserva) {
    return reserva.noches * reserva.precioPorNoche
}

//Mostrar por pantalla el resultado de manera simple

reservas.forEach(reserva => { // Iteramos sobre cada reserva
    const total = calcularTotal(reserva) // Calculamos el total para cada reserva
    console.log(`${reserva.cliente} — ${reserva.hotel} — Total: ${total}€`) // Mostramos el resultado en formato legible
})






