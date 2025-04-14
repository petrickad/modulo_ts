class Pessoa {
    nome: string;  //diferente do JS, o TS precisa que declaremos o tipo de dado da variável definindo-as em cima do construtor
    renda?: number; // o ? indica que o parâmetro é opcional, e nao podemos usar o opcional antes do atributo nao opcional

    constructor(nome: string, renda?: number) { 
        this.nome = nome;
        this.renda = renda;
    }
    dizOla(): string {
        return `${this.nome} diz olá!`;    
    }
}

class ContaBancaria{
    saldo: number = 0;
    numeroConta: number;

    constructor(numeroConta: number) {
        this.numeroConta = numeroConta;
    }

    static retornaNumeroDoBanco(){
        return 125;
    }

    private getSaldo(){
        return this.saldo;
    }

    depositar(valor: number){           //
        this.saldo += valor;           // => soma o valor ao saldo
    }                                 //
}

class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
}
const contaDoPadre = new ContaBancariaPessoaFisica(123456);
ContaBancaria.retornaNumeroDoBanco(); // 125, o static é chamado pela classe e não pela instância