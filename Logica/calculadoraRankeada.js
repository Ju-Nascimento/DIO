/* Calculadora de partidas Rankeadas utilizando variáveis, 
operadores, estruturas de decisões e funções. 
Uma função calcula o saldo de vitórias subtraindo as derrotas, 
determinando o nível do jogador com base nas faixas de vitórias especificadas 
e exibir uma mensagem com o saldo de vitórias e o nível alcançado. */

let vitorias = 100;
let derrotas = 30;
let saldo = calcularSaldo();
let ranking = calcularRanking(saldo);

function calcularSaldo(){
    let saldo = vitorias - derrotas;
    return saldo;
}

function calcularRanking() {
    if (saldo < 10) {
        return "Ferro";
    } else if (saldo >= 11 && saldo <= 20) {
        return "Bronze";
    } else if (saldo >= 21 && saldo <= 50) {
        return "Prata";
    } else if (saldo >= 51 && saldo <= 80) {
        return "Ouro";
    } else if (saldo >= 81 && saldo <= 90) {
        return "Diamante";
    } else if (saldo >= 91 && saldo <= 100) {
        return "Lendário";
    } else if (saldo >= 101) {
        return "Imortal";
    }
}

console.log("O Heroi tem saldo de vitorias de: " + saldo + " e está no nivel de: " +ranking)