const pessoa1 = {
    nome: 'Isa',
    idade: 30,
};

const pessoa2 = {
    nome: 'Ana',
    idade: 26,
};

const animal = {
    nome: 'Bob',
    idade: 15,
    raca: 'Labrador', 
};

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.apply(pessoa1, [3]));