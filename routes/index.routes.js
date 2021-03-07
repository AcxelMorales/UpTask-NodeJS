const { Router } = require('express');

const proyectosController = require('../controllers/proyectos.controller');

const router = Router();

router.get('/', proyectosController.proyectosIndex);

module.exports = router;
