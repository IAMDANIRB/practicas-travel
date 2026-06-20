const express = require('express')
const app = express()

app.use(express.json())

// Importamos las rutas
const hotelesRoutes = require('./src/routes/hoteles')

// Le decimos a Express que use esas rutas
app.use('/', hotelesRoutes)
// Cualquier ruta que llegue la pasa a hotelesRoutes

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000")
})