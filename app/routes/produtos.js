var connectionFactory = require('../../infra/connectionFactory');

module.exports = function (app) {
    // Expõe as rotas e a view que responderá.
    app.get('/produtos', function (request, response) {

        // Conexão com o banco de dados.
        //var connection = connectionFactory();

        // connection.query('SELECT * FROM table', function(error, results) {
        //     response.render('produtos/lista', {
        //         lista: results
        //     });
        //});

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