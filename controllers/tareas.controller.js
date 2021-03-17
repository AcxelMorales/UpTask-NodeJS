const Proyecto = require('../models/Proyecto.model');
const Tarea = require('../models/Tarea.model');

exports.agregarTarea = async (req, res, next) => {
  const proyecto = await Proyecto.findOne({
    where: {
      url: req.params.url
    }
  });

  const { tarea } = req.body;

  const estado = 0;
  const proyectoId = proyecto.id;

  const result = await Tarea.create({
    tarea,
    estado,
    proyectoId
  });

  if (!result) return next();

  res.redirect(`/proyectos/${req.params.url}`);
};
