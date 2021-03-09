const Proyecto = require('../models/Proyecto.model');

exports.proyectosIndex = async (req, res, next) => {
  try {
    const proyectos = await Proyecto.findAll();

    return res.render('index', {
      nombrePagina: 'Proyectos',
      proyectos
    });
  } catch (error) {
    console.log('Error', error);
    next(error);
  }
};

exports.formularioProyecto = async (req, res) => {
  const proyectos = await Proyecto.findAll();

  return res.render('nuevoProyecto', {
    nombrePagina: 'Nuevo Proyecto',
    proyectos
  });
};

exports.nuevoProyecto = async (req, res, next) => {
  const { nombre } = req.body;
  let errores = [];

  if (!nombre) {
    errores.push({
      texto: 'Agrega un nombre al proyecto'
    });
  }

  if (errores.length > 0) {
    const proyectos = await Proyecto.findAll();

    return res.render('nuevoProyecto', {
      nombrePagina: 'Nuevo proyecto',
      errores,
      proyectos
    });
  } else {
    try {
      await Proyecto.create({
        nombre
      });

      return res.redirect('/');
    } catch (error) {
      console.log('Error', error);
      next(error);
    }
  }
};

exports.proyectoPorUrl = async (req, res, next) => {
  try {
    const proyectos = await Proyecto.findAll();

    const proyecto = await Proyecto.findOne({
      where: {
        url: req.params.url
      }
    });

    if (!proyecto) return next();

    return res.render('tareas', {
      nombrePagina: 'Tareas del proyecto',
      proyecto,
      proyectos
    });
  } catch (error) {
    console.log('Error', error);
    next(error);
  }
};
