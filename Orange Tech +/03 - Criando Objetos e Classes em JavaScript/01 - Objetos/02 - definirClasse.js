class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
}

const thiago = new Pessoa('Thiago Ramos', 37);
const joao = new Pessoa('João Paulo', 9);

thiago.descrever();
console.log(thiago);
joao.descrever();
console.log(joao);