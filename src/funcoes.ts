function calculaArea(base: number, altura: number): number {
    return base * altura;
}

const calculaArea2 = (base: number, altura: number): number => base * altura; 

function somar(...numeros: number[]): number {
    return numeros.reduce((acumulador, atual) => acumulador + atual, 0);
}

function teste(): string | number {
    if(10 > 5) {
        return 'dez mais que cinco';
    } else{
        return 5;
    }
}

const resultadoTeste = teste(); // string | number, podemos usar o typeof para verificar o tipo de dado