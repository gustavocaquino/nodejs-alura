module.exports = function (app) {

    var listaProdutos = function (request, response) {

        // Conexão com o banco de dados com o auxílio
        // da biblioteca Load.
        var connection = app.infra.connectionFactory();

        // O uso da palavra-chave new é usada para definir um novo escopo de classe
        // dessa forma, as chamadas com this dentro do objeto referido será de escopo local
        // ao contexto do objeto.
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        // Implementação da busca de produtos encapsulada.
        produtosDAO.lista(function (erros, resultados) {
            res.render('produtos/lista', {lista: resultados});
        });

        connection.query('SELECT * FROM table', function(error, results) {
           response.render('produtos/lista', {
               lista: results
           });
        });

        //Finaliza a conexão com o banco de dados.
        connection.end();
    }

    // Expõe as rotas e a view que responderá.
    app.get('/produtos', function (request, response) { // function (request, listaProdutos);
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

    // Nova rota GET para o formulário.
    app.get('/produtos/form', function (request, response) {
        // Renderiza a página .ejs
        response.render('produtos/form');
    });

    // Nova rota POST para o script de salvar.
    app.post('/produtos', function (request, response) {

        // Recupera os dados do post com o auxílio da biblioteca Body-Parser.
        var produto = request.body;
        // console.log(produto);

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        //produtosDAO.salva(produto, function (erros, response) {
            // Padrão PRG.
            response.redirect('/produtos');
        //});
    });
}