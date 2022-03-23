/*Classe abstrata:
Não deve ser instanciada, apenas usada para herança das classes filhas*/

export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta){
            throw new Error("Você não deve instanciar um objeto do tipo Conta diretamente");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor) {
        throw new Error("Você não deve chamar esse método, pois é abstrato");
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

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}