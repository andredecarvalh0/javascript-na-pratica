const alunasGama = ['Paula', 'Maria', 'Estela', 'Clara']

//Acessar informações em um array

console.log(alunasGama[3])

//Operador spread (...)
const alunasXp = [...alunasGama, 'Simara']

console.log(alunasXp)

//Métodos de iteração

for (let i = 0; i < alunasXp.length; i++){
    console.log(alunasXp[i])
}

//Map - retorna um novo array sem alterar o array original criando uma cópia com as alterações que desejamos.
const alunas = ['Paula', 'Maria', 'Estela', 'Clara']

alunas.map(aluna => console.log(aluna))


//Filter - retorna um novo array com os elementos filtrados
const numeros = [34, 35, 67, 90, 55, 76]

const numerosImpares = numeros.filter(numero => numero%2 != 0)
console.log(numerosImpares)

const numerosPares = numeros.filter(numero => numero%2 == 0)
console.log(numerosPares)

//find - encontra e retorna o primeiro elenmento que achar igual ao elemento passado por parâmetro
const produtos = ['geladeira', 'fogao', 'cama','mesa']

const encontraCama = produtos.find(produto => produto === 'cama')
console.log(encontraCama)

const encontraFogao = produtos.find(produto => produto === 'fogao')
console.log(encontraFogao)

//sort - ordena o array



//reduce - reduz nosso array a um resultado de uma operação matemática


