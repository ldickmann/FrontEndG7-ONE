// Exercicio 01

const teclas = document.querySelectorAll('.tecla');

function teclaAtiva(event) {
    event.target.classList.add('ativa');

    setTimeout(() => {
        event.target.classList.remove('ativa');
    }, 150);
}

teclas.forEach(tecla => {
    tecla.addEventListener('click', teclaAtiva);
})


// Exercicio 02

function tocaSom(selectorAudio) {
    const elemento = document.querySelector(selectorAudio);
    elemento.currentTime = 0;
    elemento.play();
}

function ativaTecla(event) {
    const tecla = event.target;
    tecla.classList.toggle('ativa');

    const instrumento = tecla.dataset.instrumento;
    const idAudio = `#som_${instrumento}`;
    tocaSom(idAudio);
}

teclas.forEach(tecla => {
    tecla.addEventListener('click', ativaTecla);
});
