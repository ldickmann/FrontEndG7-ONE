// Exercicio 01
const startPauseBtn = document.querySelector('#start-pause');

let intervaloId = null;
let tempoDecorridoEmSegundos = 0;

// const contagemRegressiva = () => {
//     if(tempoDecorridoEmSegundos <= 0){
//         alert('Tempo finalizado!')
//         zerar()
//         return
//     }
//     tempoDecorridoEmSegundos -= 1
//     console.log('Temporizador: ' + tempoDecorridoEmSegundos)
// }

startPauseBtn.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar() {
    if(intervaloId){
        zerar()
        return
    }
    audioPlay.play()
    intervaloId = setInterval(contagemRegressiva, 1000)
}


// Exercicio 02

// const contagemRegressiva = () => {
//     if(tempoDecorridoEmSegundos <= 0){
//         alert('Tempo finalizado!')
//         zerar()
//         return
//     }
//     tempoDecorridoEmSegundos -= 1
//     console.log('Temporizador: ' + tempoDecorridoEmSegundos)
// }

// startPauseBtn.addEventListener('click', iniciarOuPausar)

// function iniciarOuPausar() {
//     if(intervaloId){
//         zerar()
//         return
//     }
//     intervaloId = setInterval(contagemRegressiva, 1000)
// }

// function zerar() {
//     clearInterval(intervaloId) 
//     intervaloId = null
// }


focoBtn.addEventListener('click', () => alterarContexto('foco'));
curtoBtn.addEventListener('click', () => alterarContexto('descanso-curto'));
longoBtn.addEventListener('click', () => alterarContexto('descanso-longo'));

// Exercicio 03

const audioPlay = new Audio('/sons/play.wav');
const audioPausa = new Audio('/sons/pause.mp3');
const audioTempoFinalizado = new Audio('./sons/beep.mp3')

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0){
        audioTempoFinalizado.play()
        alert('Tempo finalizado!')
        zerar()
        return
    }
    tempoDecorridoEmSegundos -= 1
    console.log('Temporizador: ' + tempoDecorridoEmSegundos)
}

startPauseBtn.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar() {
    if(intervaloId){
        audioPausa.play()
        zerar()
        return
    }
    audioPlay.play()
    intervaloId = setInterval(contagemRegressiva, 1000)
}

function zerar() {
    clearInterval(intervaloId) 
    intervaloId = null
}
