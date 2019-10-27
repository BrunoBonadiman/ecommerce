const express = require('express');

const routes = express.Router();

const authMiddleware = require('./middlewares/auth');
const guestMiddleware = require('./middlewares/guest');

const authController = require('./controllers/authController');

routes.use((req, res, next) => {
    res.locals.flashSuccess = req.flash('success');
    res.locals.flashError = req.flash('error');
    res.locals.flashWarning = req.flash('warning');
    res.locals.flahInfo = req.flash('info');
    next();
});

/**
 * Rotas de Autenticação
 */
routes.get('/', guestMiddleware, authController.signin);
routes.get('/signup', guestMiddleware, authController.signup);
routes.get('/signout', authController.signout);

routes.post('/register', authController.register);
routes.post('/authenticate', authController.authenticate);

/**
 * Rotas do Dashboard
 */

routes.use('/app', authMiddleware);

routes.use((req, res) => res.render('errors/404'));

routes.use((err, req, res, next) => {
    res.status(err.status || 500);

    return res.render('errors/index', {
        message: err.message,
        error: process.env.NODE_ENV == 'production' ? {} : err,
    });
});

module.exports = routes;