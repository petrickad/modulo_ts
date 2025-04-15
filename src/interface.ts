class Conta{
    numeroDaConta: number;
    saldo: number = 0;

    constructor(numeroDaConta: number){
        this.numeroDaConta = numeroDaConta;
    }
}
class ContaSalario extends Conta{
    depositar(valor: number): void{
        this.saldo += valor;
    }
}

interface ITransacional{
    transferir: (valor: number, destinario: Conta) => boolean;
    
}

interface IExemplo2{
    cnpj: number;
}

interface IExemplo3 extends IExemplo2{
    telefone: number;
}

class ContaCorrente extends Conta implements ITransacional{
    transferir(valor: number, destinatario: Conta){
        destinatario.saldo += (valor - this.taxaTransferencia);
        return true;
    }
    taxaTransferencia: number = 0;

}
