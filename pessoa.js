class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacoes() {
    console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos`);
  }
}

module.exports = Pessoa;
