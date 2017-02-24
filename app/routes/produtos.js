module.exports = function (app) {
    // Expõe as rotas e a view que responderá.
    app.get('/produtos', function (request, response) {

        // Conexão com o banco de dados com o auxílio
        // da biblioteca Load.
        //var connection = app.infra.connectionFactory();

        //connection.query('SELECT * FROM table', function(error, results) {
        //    response.render('produtos/lista', {
        //        lista: results
        //    });
        //});

        // Finaliza a conexão com o banco de dados.
        //connection.end();

        response.render('produtos/lista', {
            lista:
            [{
                id: 1,
                titulo: "Senhor do Anéis"
            }, {
                id: 2,
                titulo: "Game of Thrones"
            }, {
                id: 3,
                titulo: "Homem-Aranha 2099"
            }]
        });
    });
}