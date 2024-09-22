// Exercicios

const startPauseBtn = document.querySelector('#start-pause');
const iniciarOuPausarBtn = document.querySelector('#start-pause span');
const iniciarOuPausarImg = document.querySelector('.app__card-primary-butto-icon');
const tempoTela = document.querySelector('#timer');

const audioPlay = new Audio('/sons/play.wav');
const audioPausa = new Audio('/sons/pause.mp3');
const audioTempoFinalizado = new Audio('./sons/beep.mp3')

let intervaloId = null;
let tempoDecorridoEmSec = 500;


// Exercicio 01

const contagemRegressiva = () => {
    if(tempoDecorridoEmSec <= 0){
        alert('Tempo finalizado!')
        zerar()
        return
    }
    tempoDecorridoEmSec -= 1
    mostrarTempo();
}

startPauseBtn.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar() {
    if(intervaloId){
        zerar()
        return
    }
    intervaloId = setInterval(contagemRegressiva, 1000);
    iniciarOuPausarBtn.textContent = "Pausar";
    iniciarOuPausarImg.setAttribute('src', '/FrontEndG7-ONE/Javascript-DOM/Fokus-projeto/imagens/pause.png');
}

function zerar() {
    clearInterval(intervaloId);
    iniciarOuPausarBtn.textContent = "Começar";
    iniciarOuPausarImg.setAttribute('src', '/FrontEndG7-ONE/Javascript-DOM/Fokus-projeto/imagens/play_arrow.png');
    intervaloId = null
}


// Exercicio 02 - Transformado em comentário para nao duplicar as funções

// function mostrarTempo() {
//     const tempo = (tempoDecorridoEmSec);
//     tempoTela.innerHTML = `${tempo}`;
// }


// Exercicio 03

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSec * 1000);
    const tempoMinSec = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'});
    tempoTela.innerHTML = `${tempoMinSec}`;
}
