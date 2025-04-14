"use strict";
const alunos = [
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
];
alunos.push({
    nome: 'Julia',
    cursos: ['Arquitetuta'],
    idade: 30,
});
const novoAluno = {
    nome: 'Lucas',
    idade: 32,
};
function exibeAlunos(aluno) {
    console.log(aluno.nome);
}
