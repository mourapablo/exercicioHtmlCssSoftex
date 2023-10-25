class banco {
    constructor (agencia,conta,saldo){
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
    }
}

class ContaPoupanca extends banco{
    constructor(agencia,conta,saldo,rendimento){
        super(agencia,conta,saldo);
        this.rendimento = rendimento
    }

    sacar(valor){
        if(this.saldo>=0 && this.saldo<=this.saldo){
            return this.saldo -= valor
            console.log(this.saldo)
        }else{
            console.log('Saldo insuficiente')
        }
    }
    depositar(valor){
        return this.saldo += valor
        console.log(this.saldo)
    }
    rendimento(valor){
        return this.saldo += 1*100/(100)
    }
}

class ContaCorrente extends banco{
    constructor (agencia,conta,saldo,limite){
        super(agencia,conta,saldo);
        this.limite = limite
    }
    sacar(valor){
        if(this.saldo>=0 && this.saldo<=this.saldo){
            return this.saldo -= valor
            console.log(this.saldo)
        }else{
            console.log('Saldo insuficiente')
        }
    }
    depositar(valor){
        return this.saldo += valor
        console.log(this.saldo)
    }
    emprestimo(valor){
        if(valor>0 && valor<=this.limite){
            return this.limite -= valor
            console.log('Parabéns , emprestimo contratado.')
        }else{
            console.log('Saldo insuficiente')
        }
    }
}

class ContaConjunta extends ContaCorrente{
    constructor (agencia,conta,saldo,limite,financiamento){
        super(agencia,conta,saldo,limite);
        this.financiamento = financiamento
    }
    sacar(valor){
        if(this.saldo>=0 && this.saldo<=this.saldo){
            return this.saldo -= valor
            console.log(this.saldo)
        }else{
            console.log('Saldo insuficiente')
        }
    }
    depositar(valor){
        return this.saldo += valor
        console.log(this.saldo)
    }
    emprestimo(valor){
        if(valor>0 && valor<=limite){
            return this.limite -= valor
            console.log('Parabéns , emprestimo contratado.')
        }else{
            console.log('Saldo insuficiente')
        }
    }
    financiar(valor){
        if(valor>0 && valor<=this.financiamento){
            console.log('parabens')
            return this.financiamento -= valor
        }else{
            console.log('Saldo insuficiente')
        }
    }
}

let conta1 = new ContaPoupanca(1 , 123 , 1000 ,0.5)
conta1.depositar(500);
console.log(conta1.saldo);
conta1.sacar(300);
console.log(conta1.saldo)

let conta2 = new ContaPoupanca(2 , 234 , 1500 , 0.5)
conta2.depositar(100);
console.log(conta2.saldo);
conta2.sacar(500);
console.log(conta2.saldo)

let conta3 = new ContaCorrente(3, 456 , 5000 , 10000)
conta3.depositar(2000);
console.log(conta3.saldo)
conta3.emprestimo(11000)
console.log(conta3.limite)

let conta4 = new ContaConjunta(4,568,50000,100000, 200000);
conta4.financiar(100000)
console.log(conta4.financiamento)

