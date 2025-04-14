type aluno = {
    nome: string,
    cursos?: string[],
    idade: number,
}

const alunos: aluno[] = [
    {
        nome: 'Carlos',
        cursos: ['Front-end', 'Python'],
        idade: 35,
    },
    {
        nome: 'Ana',
        cursos: ['Front-end', 'JAVA'],
        idade: 28,
    },
]

alunos.push({
    nome: 'Julia',
    cursos: ['Arquitetuta'],
    idade: 30,
});

const novoAluno: aluno = {
    nome: 'Lucas',
    idade: 32,
}

function exibeAlunos(aluno: aluno){
    console.log(aluno.nome)
}