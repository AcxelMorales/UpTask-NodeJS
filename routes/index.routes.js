const { Router } = require('express');

const { body } = require('express-validator');

const proyectosController = require('../controllers/proyectos.controller');

const router = Router();

router.get('/', proyectosController.proyectosIndex);

router.get('/nuevo-proyecto', proyectosController.formularioProyecto);

router.post(
  '/nuevo-proyecto',
  body('nombre').not().isEmpty().trim().escape(),
  proyectosController.nuevoProyecto
);

module.exports = router;
