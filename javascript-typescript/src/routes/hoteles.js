const express = require('express')
const router = express.Router()
// Router es como un mini servidor que agrupa rutas relacionadas

const { buscarHoteles } = require('../controllers/hoteles')
// Importamos el controlador

router.get('/buscar', buscarHoteles)
// Cuando llegue GET /buscar llama a buscarHoteles
// Antes teníamos toda la lógica aquí, ahora solo apuntamos al controlador

module.exports = router