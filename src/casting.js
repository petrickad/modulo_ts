"use strict";
var casting;
(function (casting) {
    let idade = 25;
    idade.toFixed();
    idade.length; // length é uma propriedade de string, não de number
    idade.forEach(x => {
        console.log(x);
    });
    let nome = 35; // unknown é um tipo seguro, não podemos usar diretamente, precisamos fazer o casting para string
})(casting || (casting = {})); // casting permite usar a mesma
