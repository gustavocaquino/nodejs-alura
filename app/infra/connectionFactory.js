// Invoca a biblioteca para Mysql.
var mysql = require('mysql');

var createDbConnection = function () {
    // Configura a conexão.
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: ''
    });
}

// Wrapper (embrulho) para a Conexão de Banco.
// Assim evita que o Express-Load carregue o banco de dados
// antes que ele seja chamado, dessa forma guardando apenas a referência
// para o "delegate" da função anônima.
module.exports = function () {
    return createDbConnection;
};