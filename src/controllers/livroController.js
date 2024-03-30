const livros = [
    {
        id: 1,
        titulo: "Livro 1",
        paginas: 300,
        isbn: "123",
        editora: "Editora 1",
    },
    {
        id: 2,
        titulo: "Livro 2",
        paginas: 400,
        isbn: "321",
        editora: "Editora 2",
    },
    {
        id: 3,
        titulo: "Livro 3",
        paginas: 500,
        isbn: "456",
        editora: "Editora 3",
    },
];

getLivros = (req, res) => {
    res.status(200).send(livros);
}

getOneLivros = (req, res) => {
    let id = req.params.id;
    const livro = livros.find((livro) => livro.id === Number(id));
    if (livro) {
        res.status(200).send(livro);	
    } else {
        res.status(404).send({ message: "Livro não encontrado" });
    }
}

createLivros = (req, res) => {
    const livro = req.body
    if(Object.keys(livro).length > 0) {
        livros.push(livro);
        res.status(201).send(livro);
    } else {
        res.status(406).send({ message: "Livro inválido" });
    }
}

findLivroIndex = (id) => {
    const indice = livros.findIndex((livro) => livro.id === Number(id));
    return indice;
}

updateLivro = (req, res) => {
    let id = req.params.id;
    let indice = findLivroIndex(id);
    livros[indice] = req.body;
    res.status(201).send("Livros atualizado com sucesso");
}

removeLivro = (req, res) => {
    let id = req.params.id;
    let indice = findLivroIndex(id);
    livros.splice(indice, 1);
    res.status(200).send("Livro removido com sucesso");
}

module.exports = { getLivros, getOneLivros, createLivros, updateLivro, removeLivro } 