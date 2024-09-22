// Exercicio 01

document.querySelector("#tecla_pom").onclick = function() {
    document.querySelector("#som_tecla_pom").play();
};

// Exercício 03

const botaoPom = document.querySelector('.tecla_pom')

botaoPom.addEventListener('click', tocaSomPom);

// Exercício 04

function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('#tecla_pom').addEventListener('click', tocaSomPom);
