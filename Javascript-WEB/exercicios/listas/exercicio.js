// Exercicio 01

document.querySelectorAll('.tecla');

// Exercicio 02

const listaDeBotoes = document.querySelectorAll('.tecla');

// Exercicio 03

listaDeBotoes[2]

// Exercicio 04

listaDeBotoes[0].onclick = tocaSomPom;

// Exercicio 05

function tocaSomClap () {
    document.querySelector('#som_tecla_clap').play();
}
const listaDeBotoes = document.querySelectorAll('.tecla');
listaDeBotoes[1].onclick = tocaSomClap;
