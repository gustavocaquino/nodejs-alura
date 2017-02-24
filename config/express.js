// Carrega o WebServer Express.
var express = require('express');

// Carrega a biblioteca Express-Load.
var load = require('express-load');

module.exports = function () {
    // Inicializa o WebServer.
    var app = express();

    // Define o motor de views a ser usado.
    app.set('view engine', 'ejs');

    // Define a pasta padrão para as views do projeto.
    app.set('views', './app/views');

    // Inicializa o Load dentro do Express carregando,
    // o conteúdo da pasta Infra.
    load('routes', {
        cwd: 'app'
    }).then('infra').into(app);

    return app;
}