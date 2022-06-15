//Classe Abstrata
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
           throw new Error("Você não deveria instanciar um objeto do tipo Conta.");
        }
        this._saldo =saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    //Método abstrato
    sacar(valor) {
        throw new Error("O método Sacar da conta é abstrato.")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor){
        this._saldo += valor;
    }


    transferir (valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}