module.exports = app.use(function (req, res, next) {
        res.locals.toasts = req.toastr.render()
        next()
    });