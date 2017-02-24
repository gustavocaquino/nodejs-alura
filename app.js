// Define a configuração para o Express.
var app = require('./config/express')();

// Inicia propriamente o WebServer.
app.listen(3000, function () {
    console.log('webserver rodando.');
});