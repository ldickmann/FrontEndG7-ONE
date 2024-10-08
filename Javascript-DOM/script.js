const html = document.querySelector('html');
const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const startPauseBtn = document.querySelector('#start-pause');
const iniciarOuPausarBtn = document.querySelector('#start-pause span');
const musicaFocoInput = document.querySelector('#alternar-musica');
const iniciarOuPausarImg = document.querySelector('.app__card-primary-butto-icon');
const tempoTela = document.querySelector('#timer');

const musica = new Audio('./Fokus-projeto/sons/luna-rise-part-one.mp3');
const audioPlay = new Audio('./Fokus-projeto/sons/play.wav');
const audioPausa = new Audio('./Fokus-projeto/sons/pause.mp3');
const audioTempoFinalizado = new Audio('./Fokus-projeto/sons/beep.mp3');

let tempoDecorridoSeg = 1500;
let intervaloId = null;

musica.loop = true;

musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})

focoBtn.addEventListener('click', () => {
    tempoDecorridoSeg = 1500;
    alterarContexto('foco');
    focoBtn.classList.add('active');
})

curtoBtn.addEventListener('click', () => {
    tempoDecorridoSeg = 300;
    alterarContexto('descanso-curto');
    curtoBtn.classList.add('active');
})

longoBtn.addEventListener('click', () => {
    tempoDecorridoSeg = 900;
    alterarContexto('descanso-longo');
    longoBtn.classList.add('active');
})

function alterarContexto(contexto) {
    mostrarTempo();

    botoes.forEach(function (contexto) {
        contexto.classList.remove('active');
    });

    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `./Fokus-projeto/imagens/${contexto}.png`);
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `
            break;
        case "descanso-longo":
            titulo.innerHTML = `
            Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if (tempoDecorridoSeg <= 0) {
        audioTempoFinalizado.play();
        alert('Tempo Finalizado');
        zerar();
        return
    }
    tempoDecorridoSeg -= 1
    mostrarTempo();
}

startPauseBtn.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
    if (intervaloId) {
        audioPausa.play();
        zerar();
        return
    }
    audioPlay.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
    iniciarOuPausarBtn.textContent = "Pausar";
    iniciarOuPausarImg.setAttribute('src', './Fokus-projeto/imagens/pause.png');
}

function zerar() {
    clearInterval(intervaloId);
    iniciarOuPausarBtn.textContent = "Começar";
    iniciarOuPausarImg.setAttribute('src', './Fokus-projeto/imagens/play_arrow.png');
    intervaloId = null;
}

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoSeg * 1000);
    const tempoFormat = tempo.toLocaleTimeString('pt-Bt', {minute: '2-digit', second: '2-digit'});
    tempoTela.innerHTML = `${tempoFormat}`
}

mostrarTempo();
