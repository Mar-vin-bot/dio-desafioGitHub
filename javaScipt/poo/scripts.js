class ContaBancaria {

    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
    get saldo(){
        return this._saldo;
    }

    set saldo (valor){
        this._saldo = valor;
    }

     sacar (valor){
        if (valor > this.saldo){
            return "Operação invalida."
        }else {
         return this._saldo = this._saldo - valor;
        }
    }

     depositar (valor){
        this.saldo = this.saldo + valor;

        return this._saldo;
    }

}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = "corrente";
        this.cartaoCredito = cartaoCredito
    }

    get cartaoCredito(){
       return this.cartaoCredito; 
    }

    set cartaoCredito (valor){
        this.cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = "poupança";
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = "universitaria";
        
    }

     sacar (valor){
        if (valor < this._saldo && valor < 500){
            return this.saldo - valor
        }else {
            return "Operação invalida"
        }
    }
}