import express from 'express'
import hotelesRoutes from './src/routes/hoteles'

const app = express()

app.use(express.json())
app.use('/', hotelesRoutes)

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000")
})