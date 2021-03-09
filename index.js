const path = require('path');
const bodyParser = require('body-parser');

const express = require('express');
const morgan = require('morgan');

const helpers = require('./helpers');
const db = require('./config/db');
require('./models/Proyecto.model');

db.sync()
  .then(() => console.log('Conectado a la base de datos'))
  .catch(error => console.log('Error en la conexión a la base de datos', error))

const app = express();

app.use(express.static('public'));

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));

app.use((req, res, next) => {
  res.locals.vardump = helpers.vardum;
  next();
});

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./routes/index.routes'));

app.listen(app.get('port'), () => console.log(`Server on port ${app.get('port')}`));
