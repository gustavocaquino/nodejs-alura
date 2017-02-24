module.exports = function () {
    var express = require('express');
    var app = express();

    // Define o motor de views a ser usado.
    app.set('view engine', 'ejs');

    // Define a pasta padrão para as views do projeto.
    app.set('views', './app/views');

    return app;
}