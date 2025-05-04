function subtracao(numA, numB) {
    return numA - numB;
}

let vitorias = 90;
let derrotas = 9;

let player = ["Leonardo", subtracao(vitorias, derrotas)];

let level = [];

let saldo = player[1];

if (saldo <= 10) {
    level.push("Ferro");
} else if (saldo >= 11 && saldo <= 20) {
    level.push("Bronze");
} else if (saldo >= 21 && saldo <= 50) {
    level.push("Prata");
} else if (saldo >= 51 && saldo <= 70) {
    level.push("Ouro");
} else if (saldo >= 71 && saldo <= 90) {
    level.push("Diamante");
}

console.log("O Jogador " + player[0] + " tem " + vitorias + " vitórias e " + derrotas + " derrotas");
console.log(player[0] + " está no nível " + level[0]);
