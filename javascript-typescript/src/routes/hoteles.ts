import { Router } from 'express'
import { buscarHoteles } from '../controllers/hoteles'

const router = Router()

router.get('/buscar', buscarHoteles)

export default router
// export default cuando exportas una sola cosa principal del archivo