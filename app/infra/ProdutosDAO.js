// Para classes, é convencionado usar escrita Pascal Case.
function ProdutosDAO(connection) {
    // É convencionado usar underline e Camel Case para se referir a atributos "privados"
    // de uma classe.
    this._connection = connection;
}

// Utiliza-se o prototype para o uso de definições padrões para esta 'classe'
// dessa forma, evita-se a refinição de objetos dinâmicamente.
ProdutosDAO.prototype.lista = function (callback) {
    this._connection.query('select * from produtos', callback);
}

// Grava os dados no MySQL com a sintaxe 'set'.
ProdutosDAO.prototype.salva = function (produto, callback) {
    this._connection.query('insert into produtos set ?', produto, callback);
}

module.exports = function () {
    // Encapsula a função para que evite o autocarregamento do Express.
    return ProdutosDAO;
}