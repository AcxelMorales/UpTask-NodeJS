const path = require('path');
const bodyParser = require('body-parser');

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.static('public'));

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./routes/index.routes'));

app.listen(app.get('port'), () => console.log(`Server on port ${app.get('port')}`));
