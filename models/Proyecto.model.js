const Sequelize = require('sequelize');
const slug = require('slug');
const shordid = require('shortid');

const db = require('../config/db');

const Proyectos = db.define('proyectos', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: Sequelize.STRING
  },
  url: {
    type: Sequelize.STRING
  }
}, {
  hooks: {
    beforeCreate(proyecto) {
      const newUrl = slug(proyecto.nombre).toLowerCase();
      proyecto.url = `${newUrl}-${shordid.generate()}`;
    }
  }
});

module.exports = Proyectos;
