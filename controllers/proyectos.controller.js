const Proyecto = require('../models/Proyecto.model');

exports.proyectosIndex = (req, res) => {
  return res.render('index', {
    nombrePagina: 'Proyectos'
  });
};

exports.formularioProyecto = (req, res) => {
  return res.render('nuevoProyecto', {
    nombrePagina: 'Nuevo Proyecto'
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
    return res.render('nuevoProyecto', {
      nombrePagina: 'Nuevo proyecto',
      errores
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
