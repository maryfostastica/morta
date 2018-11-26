// declara um conjunto fake de dados para os livros
var dbfake = {
    "data": [
        {
            "id": 1,
            "nome": "primeiro alguma coisa",
            "autor": "maria",
            "editora": "teste1",
            "genero": "romance",
            "avaliacao": "3",
            "edicao": "2",
            "imagem": "#"
        },
        {
            "id": 2,
            "nome": "Meu pé de laranja lima",
            "autor": "Eu já não lembro",
            "editora": "teste2",
            "genero": "ficção",
            "avaliacao": "9",
            "edicao": "3",
            "imagem": "#"
        }
    ]
}

// Caso exista no Local Storage, recupera os dados salvos
var db = JSON.parse(localStorage.getItem('db'));
if (!db) {
    db = dbfake;
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(livro) {
    // Calcula novo Id a partir do último código existente no array
    let novoId = db.data[db.data.length - 1].id + 1;
    let novoLivro = {
        "id": novoId,
        "nome": livro.nome,
        "autor": livro.autor,
        "editora": livro.editora,
        "genero": livro.genero,
        "avaliacao": livro.avaliacao,
        "edicao": livro.edicao,
        "imagem": livro.imagem
    };
   

    // Insere o novo objeto no array
    db.data.push(novoLivro);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db', JSON.stringify(db));
}

function updateContato(id, livro) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = livro.nome,
    db.data[index].autor = livro.autor,
    db.data[index].editora = livro.editora,
    db.data[index].genero = livro.genero,
    db.data[index].avaliacao = livro.avaliacao,
    db.data[index].edicao = livro.edicao,
    db.data[index].imagem = livro.imagem
    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db', JSON.stringify(db));
}

function deleteContato(id) {
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db', JSON.stringify(db));
}