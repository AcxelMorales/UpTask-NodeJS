const { Router } = require('express');

const proyectosController = require('../controllers/proyectos.controller');

const router = Router();

router.get('/', proyectosController.proyectosIndex);

router.get('/nuevo-proyecto', proyectosController.formularioProyecto);

router.post('/nuevo-proyecto', proyectosController.nuevoProyecto);

module.exports = router;
