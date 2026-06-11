const express = require('express')
const app = express()

app.get('/hoteles', (req, res) => {
    const hoteles = [
        {nombre: "Hotel Mallorca", estrellas: 4, precio: 120},
        {nombre: "Hotel Barcelona", estrellas: 5, precio: 200},
        {nombre: "Hotel Madrid", estrellas: 3, precio: 80}
    ]
    res.json(hoteles)
})
    
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000')
})
