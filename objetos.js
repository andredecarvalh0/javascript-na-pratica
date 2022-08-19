const pessoa = {
    nome: 'Andre',
    idade: 35,
    cidade: 'Itatiaia'
}

//Notação de ponto
console.log(pessoa.nome)

// Notação de colchetes
console.log(pessoa['idade'])

// como desestruturar objetos
const {nome, idade, cidade} = pessoa
console.log(nome)
console.log(idade)
console.log(cidade)