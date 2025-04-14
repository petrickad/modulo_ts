"use strict";
let estaChovendo = false;
estaChovendo = true;
let idade = 27;
let altura = 1.75;
const nacionalidade = 'brasileiro';
const colegas = ['petrick', 'andre', 'luan'];
const tecnologias = ['typescript', 'javascript', 'python']; //podemos adicionar e remover elementos com push e pop
const notas = [10, 9, 8, 7, 6]; // não adicionamos ou removemos elementos com push e pop, apenas lemos os elementos
const lista = ['petrick', true, 27]; //tupla, podemos adicionar e remover elementos
let idadeDaAna = 25;
idadeDaAna = 'vinte e cinco'; // podemos modificar em string e number
let dadosDaApi; // qualquer tipo de dado, não é recomendado usar o any, pois não conseguimos fazer validações
dadosDaApi = 25; // number
dadosDaApi = 'vinte e cinco'; // string
dadosDaApi = true; // boolean
dadosDaApi = [1, 2, 3]; // array
dadosDaApi = { nome: 'petrick', idade: 27 }; // objeto
dadosDaApi = null; // null
dadosDaApi = undefined; // undefined
dadosDaApi = () => { return 'oi'; }; // função
dadosDaApi = new Date(); // data
dadosDaApi = Symbol('oi'); // simbolo
dadosDaApi = new Map(); // map
dadosDaApi = new Set(); // set
dadosDaApi = new WeakMap(); // weakmap
dadosDaApi = new WeakSet(); // weakset
dadosDaApi = new ArrayBuffer(10); // arraybuffer
let curso = 'front-end'; //tipagem explícita, não podemos mudar o tipo de dado da variável, pois já foi definido como string
