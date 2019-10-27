const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');
const routes = require('./app/routes');
const methodOverride = require('method-override');
const toastr = require('express-toastr');
const cookieParser = require('cookie-parser');

const sessionConfig = require('./config/session');
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

app.use(cookieParser('secret'));
app.use(session(sessionConfig));
app.use(flash());
app.use(toastr({
    closeButton: true
}));
app.use(methodOverride('_method'));

app.use('/', routes);

app.listen(3001);