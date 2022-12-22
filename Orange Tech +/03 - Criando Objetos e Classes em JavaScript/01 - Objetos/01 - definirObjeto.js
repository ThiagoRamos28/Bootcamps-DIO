const pessoa = {
    nome: 'Thiago Ramos',
    idade: 37,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
};

pessoa.descrever();