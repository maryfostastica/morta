// declara um conjunto fake de dados para os livros
var dbfake = {
    "data": [
        {
            "Id": 1,
            "Nome": "Leanne Graham",
            "Autor": "Sincere@april.biz",
            "Genero": "1-770-736-8031",
            "Avaliaçao": "hildegard.org",
            "Edicao": "hildegard.org",
            "Imagem": "#"
        },
        {
            "id": 2,
            "nome": "Ervin Howell",
            "email": "Shanna@melissa.tv",
            "telefone": "010-692-6593",
            "website": "anastasia.net"
        },
        {
            "id": 3,
            "nome": "Clementine Bauch",
            "email": "Nathan@yesenia.net",
            "telefone": "1-463-123-4447",
            "website": "ramiro.info"
        },
        {
            "id": 4,
            "nome": "Patricia Lebsack",
            "email": "Julianne.OConner@kory.org",
            "telefone": "493-170-9623 x156",
            "website": "kale.biz"
        },
        {
            "id": 5,
            "nome": "Chelsey Dietrich",
            "email": "Lucio_Hettinger@annie.ca",
            "telefone": "(254)954-1289",
            "website": "demarco.info"
        },
        {
            "id": 6,
            "nome": "Mrs. Dennis Schulist",
            "email": "Karley_Dach@jasper.info",
            "telefone": "1-477-935-8478",
            "website": "ola.org"
        },
        {
            "id": 7,
            "nome": "Kurtis Weissnat",
            "email": "Telly.Hoeger@billy.biz",
            "telefone": "210.067.6132",
            "website": "elvis.io"
        },
        {
            "id": 8,
            "nome": "Nicholas Runolfsdottir V",
            "email": "Sherwood@rosamond.me",
            "telefone": "586.493.6943",
            "website": "jacynthe.com"
        },
        {
            "id": 9,
            "nome": "Glenna Reichert",
            "email": "Chaim_McDermott@dana.io",
            "telefone": "(775)976-6794",
            "website": "conrad.com"
        },
        {
            "id": 10,
            "nome": "Clementina DuBuque",
            "email": "Rey.Padberg@karina.biz",
            "telefone": "024-648-3804",
            "website": "ambrose.net"
        }
    ]
}

// Caso exista no Local Storage, recupera os dados salvos
var db = JSON.parse(localStorage.getItem('db'));
if (!db) {
    db = dbfake
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