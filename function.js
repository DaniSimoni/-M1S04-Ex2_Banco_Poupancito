/* Um banco contratou você para criar uma classe que opere as contas do banco utilizando orientação a objetos.

Crie uma classe chamada Conta

A classe conta recebe dois atributos: saldo e senha(privado), e dois métodos deposito e retirada. o método deposito adiciona valor ao saldo (o usuário deve passar a senha, e ela deve ser igual à senha determinada no atributo), e o depósito retira valor do saldo.

Por fim, instancie um objeto chamado contaCorrente e teste as operações. */

class Conta {
    constructor(saldo, senha) { 
        this.saldo = saldo;
        this.senha = senha;
    } 

    deposito(total) { 
        if(this.senha === 1234){
          this.saldo += total;
          console.log(`Depósito de R$ ${total} realizado com sucesso.`)
        }else {
          console.log('Senha Incorreta');
        }
    }
    
     retirada(total) {
        if(this.senha === 1234){
          this.saldo -= total;
          console.log(`Retirada de R$ ${total} realizado com sucesso.`)
        }else {
          console.log('Senha Incorreta');
    }
  };
};
    


    const cadastro = new Conta (0 , 1234);
    cadastro.deposito(20);
    cadastro.deposito(100);
    cadastro.deposito(30);
    console.log(`Saldo atual: R$ ${cadastro.saldo}`);
    cadastro.retirada(20);
    console.log(`Saldo atual: R$ ${cadastro.saldo}`);
    cadastro.retirada(30);
    console.log(`Saldo atual: R$ ${cadastro.saldo}`);
    cadastro.atualizaJuros;
    

   
