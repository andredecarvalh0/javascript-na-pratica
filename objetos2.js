const filmes = [
    {
        id: 1,
        titulo: 'Dilema das Redes',
        descricao: 'Um filme sobre tecnologia',
        duracao: 120,
    },
    {
        id: 2,
        titulo: 'Dilema das Redes',
        descricao: 'Um filme sobre tecnologia',
        duracao: 120,
    },
    {
        id: 3,
        titulo: 'Dilema das Redes',
        descricao: 'Um filme sobre tecnologia',
        duracao: 120,
    }
]

const [{id, titulo, descricao, duracao}] = filmes

filmes.map(filme => console.log(filme.descricao))