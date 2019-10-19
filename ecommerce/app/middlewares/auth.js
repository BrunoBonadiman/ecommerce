module.exports = (req, res, next) => {
    if (req.session && req.session.user) {
        return next();
    }

    req.swal("A T E N Ç Ã O!", "Usuário não autorizado!", "danger");
    return res.redirect('/');
};