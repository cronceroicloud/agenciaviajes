import express from 'express';
import {paginaInicio, guardarCompra, paginaComprar, paginaNosotros, paginaTestimonios, paginaViajes, paginaDetallesViajes, guardarTestimonios} from "../controllers/paginaController.js";

const router = express.Router();

//req lo que enviamos / res lo que nos responde
router.get('/', paginaInicio);

router.get('/nosotros',paginaNosotros);

router.get('/testimonios', paginaTestimonios);

router.get('/viajes',paginaViajes);

//Los dos puntos es como un comodín y no repetir las páginas
router.get('/viajes/:slug',paginaDetallesViajes);

//Los dos puntos es como un comodín y no repetir las páginas
router.get('/comprar/:slug',paginaComprar);

router.post('/testimonios', guardarTestimonios);

router.post('/comprar', guardarCompra);

export default router;

