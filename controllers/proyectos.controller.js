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

exports.nuevoProyecto = (req, res) => {
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
  }
};
