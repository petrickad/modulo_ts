namespace casting {
    let idade: any = 25;
    (idade as number).toFixed();  
    (idade as string).length; // length é uma propriedade de string, não de number
    (idade as string[]).forEach(x => {
        console.log(x); 
    }) 
    let nome: string = 35 as unknown as string; // unknown é um tipo seguro, não podemos usar diretamente, precisamos fazer o casting para string
} // casting permite usar a mesma