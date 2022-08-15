const pessoa = {
    nome: 'Maria',
    idade: 24,
    profissao: 'Advogada'
}

pessoa.idade = 25;

const luiz: {nome: string, idade: number, profissao: string} = {
    nome: 'Luiz',
    idade: 62,
    profissao: 'Administrador'
}

enum Profissao{
    Professora, 
    Atriz,
    Desenvolvedor,
    Advogada,
    Administrador
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const Fernando: Estudante = {
    nome: 'Fernando',
    idade: 22,
    profissao: Profissao.Desenvolvedor,
    materias: ['AED II', 'IA']
}

function listar(lista: string[]){
    for(const item of lista){
        console.log('- ', item);
    }
}

listar(Fernando.materias)