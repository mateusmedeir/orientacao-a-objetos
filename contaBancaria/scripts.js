class ContaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this._saldo = 0
    }
    //Metodos
    sacar(sacar){
        if((this._saldo - sacar) >= 0){
            this._saldo -= sacar
            return `Você sacou R$ ${sacar} da sua conta`
        }else{
            return 'Saldo insuficiente'
        }
    }
    depositar(deposito){
        this._saldo += deposito
        return `Você depositou o valor de R$ ${deposito} na sua conta`
    }
    //Metodos Especiais
    get saldo(){
        return `Saldo: R$ ${this._saldo}`
    }
    set saldo(saldo){
        this._saldo = saldo
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero)
        this.tipo = 'corrente'
        this._cartaoCredito = cartaoCredito
    }
    get cartaoCredito(){
        return this._cartaoCredito
    }
    set cartaoCredito(cartaoCredito){
        this._cartaoCredito = cartaoCredito
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero)
        this.tipo = 'poupanca'
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero)
        this.tipo = 'universitaria'
    }
    sacar(sacar){
        if(sacar > 500){
            return 'Operação negada'
        }else{
            this._saldo -= sacar
        }
    }
}