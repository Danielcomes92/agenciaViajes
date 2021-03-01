//importamos express
import express from 'express'

//importamos las paginas del controller
import { paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajes, paginaDetalleViaje } from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimonialController.js';


//generamos una instancia del router de express
const router = express.Router();

//renombramos de app a router las rutas
router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);

router.post('/testimoniales', guardarTestimonial);

//exportamos las rutas
export default router;


