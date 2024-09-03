class ContaBancaria {
    private saldo: number;

    constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
    }

    depositar (valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
        }
    }

    verSaldo(): number {
        return this.saldo;
    }

    sacar (valor: number): void {
        if (this.saldo > valor)
            this.saldo -= valor
    }

}

const minhaConta = new ContaBancaria(1000);
minhaConta.sacar(500);
console.log(minhaConta.verSaldo());