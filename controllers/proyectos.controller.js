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
      if (!req.params.id) {
        await Proyecto.create({
          nombre
        });
      } else {
        await Proyecto.update({ nombre }, {
          where: {
            id: req.params.id
          }
        });
      }

      return res.redirect('/');
    } catch (error) {
      console.log('Error', error);
      next(error);
    }
  }
};

exports.proyectoPorUrl = async (req, res, next) => {
  try {
    const proyectosPromise = Proyecto.findAll();

    const proyectoPromise = Proyecto.findOne({
      where: {
        url: req.params.url
      }
    });

    const [proyectos, proyecto] = await Promise.all([proyectosPromise, proyectoPromise]);

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

exports.formularioEditar = async (req, res, next) => {
  try {
    const proyectosPromise = Proyecto.findAll();

    const proyectoPromise = Proyecto.findOne({
      where: {
        id: req.params.id
      }
    });

    const [proyectos, proyecto] = await Promise.all([proyectosPromise, proyectoPromise]);

    return res.render('nuevoProyecto', {
      nombrePagina: 'Editar proyecto',
      proyectos,
      proyecto
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
