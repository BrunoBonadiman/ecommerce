const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const bodyParser = require('body-parser');
const swal = require('sweetalert');
const session = require('express-session');
const routes = require('./app/routes');
const methodOverride = require('method-override');

const app = express();

app.use(express.static(path.resolve('app', 'public')));

nunjucks.configure(path.resolve('app', 'views'), {
    autoescape: true,
    express: app
});

app.set('view engine', 'njk');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(session(sessionConfig));
app.use(swal());
app.use(methodOverride('_method'));

app.use('/', routes);

app.listen(3001);