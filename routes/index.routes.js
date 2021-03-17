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

router.get('/proyectos/:url', proyectosController.proyectoPorUrl);

router.get('/proyecto/editar/:id', proyectosController.formularioEditar);

router.post(
  '/nuevo-proyecto/:id',
  body('nombre').not().isEmpty().trim().escape(),
  proyectosController.nuevoProyecto
);

router.delete('/proyectos/:url', proyectosController.eliminarProyecto);

module.exports = router;
