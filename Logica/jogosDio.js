/* Desafio 3 do bootcamp de logica da DIO. Nesse exercicio usando classes, obejtos e metodos eu criei uma classe heroi
e seus atribubos e em seguida alguns metodos para essa classe */

class Hero{
    nome;
    idade;
    tipo;

    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    mostrarHeroi(){
        return `O heroi ${this.nome} é do tipo ${this.tipo} e tem ${this.idade} anos`
    }
    atacar (){
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia'
                break;

            case 'guerreiro':
                ataque = 'espada'
                break;

            case 'ninja':
                ataque = 'jutsu'
                break;

            case 'monge':
                ataque = 'punho filosofico'
                break;

            default:
                    ataque = 'usou um ataque desconhecido';

        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }

}

const heroi1 = new Hero('Juan', 20, 'ninja');
const heroi2 = new Hero('Felipe', 98, 'monge');
const heroi3 = new Hero('Ana Julia', 24, 'mago');
const heroi4 = new Hero('Julius', 39, 'guerreiro');

console.log(heroi1.mostrarHeroi());
console.log(heroi2.mostrarHeroi());
console.log(heroi3.mostrarHeroi());
console.log(heroi4.mostrarHeroi());

heroi1.atacar(); 
heroi2.atacar(); 
heroi3.atacar(); 
heroi4.atacar(); 
