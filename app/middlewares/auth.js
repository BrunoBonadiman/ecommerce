module.exports = (req, res, next) => {
    if (req.session && req.session.user) {
        return next();
    }

    req.flash('error', 'A T E N Ç Ã O!", "Usuário não autorizado!');
    return res.redirect('/');
};