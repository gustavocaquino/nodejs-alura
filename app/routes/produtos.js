module.exports = function (app) {
    // Expõe as rotas e a view que responderá.
    app.get('/produtos', function (request, response) {

        // Invoca a biblioteca para Mysql.
        // var mysql = require('mysql');

        // Configura a conexão.
        // var connection = mysql.createConnection({
        //    host: 'localhost',
        //    user: 'root',
        //    password: '',
        //    database: ''
        // });

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