// Invoca a biblioteca para Mysql.
var mysql = require('mysql');

module.exports = function () {
    // Configura a conexão.
    return mysql.createConnection({
       host: 'localhost',
       user: 'root',
       password: '',
       database: ''
    });
};