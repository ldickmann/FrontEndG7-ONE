// Exercicio 01

const focoBtn = document.getElementById('focoBtn');
const curtoBtn = document.getElementById('curtoBtn');
const longoBtn = document.getElementById('longoBtn');

function ativarBotao(botao) {
    const botoes = document.querySelectorAll('.btn');
    botoes.forEach(btn => btn.classList.remove('active'));

    botao.classList.add('active');
}


// Exercicio 02

function alterarContexto(contexto) {

    const botoes = document.querySelectorAll('.btn');
    botoes.forEach(btn => btn.classList.remove('active'));

    switch (contexto) {
        case 'foco':
            ativarBotao(focoBtn);
            break;
        case 'descanso-curto':
            ativarBotao(curtoBtn);
            break;
        case 'descanso-longo':
            ativarBotao(longoBtn);
            break;
        default:
            break;
    }
}


focoBtn.addEventListener('click', () => alterarContexto('foco'));
curtoBtn.addEventListener('click', () => alterarContexto('descanso-curto'));
longoBtn.addEventListener('click', () => alterarContexto('descanso-longo'));

// Exercicio 03

const musicaCheckbox = document.getElementById('alternar-musica');
const musica = new Audio('/FrontEndG7-ONE/Javascript-DOM/Fokus-projeto/sons/luna-rise-part-one.mp3');
musica.loop = true; // Exercicio 04

musicaCheckbox.addEventListener('change', () => {
    if (musicaCheckbox.checked) {
        musica.play();
    } else {
        musica.pause();
    }
});
