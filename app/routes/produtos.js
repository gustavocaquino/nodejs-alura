module.exports = function(app) {
    // Expõe as rotas e a view que responderá.
    app.get('/produtos', function (request, response) {
        response.render('produtos/lista');
    });
}