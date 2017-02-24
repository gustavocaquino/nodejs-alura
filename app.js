// Define a configuração para o Express.
var app = require('./config/express')();

// Define as configurações de rotas.
var rotasProdutos = require('./app/routes/produtos')(app);

// Inicia propriamente o WebServer.
app.listen(3000, function () {
    console.log('webserver rodando.');
});