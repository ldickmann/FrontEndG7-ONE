// Exercicio 01

const html = document.querySelector('html');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');


function alterarContexto(contexto, imagem) {
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/FrontEndG7-ONE/Javascript-DOM/Fokus-projeto/imagens/${imagem}.png`);
}


// Exercicio 02

const focoBt = document.querySelector('.app__card-button--foco');
focoBt.addEventListener('click', () => {
  alterarContexto('foco', 'foco.png');
});

const curtoBt = document.querySelector('.app__card-button--curto');
curtoBt.addEventListener('click', () => {
  alterarContexto('descanso-curto', './descanso-curto.png');
});

const longoBt = document.querySelector('.app__card-button--longo');
longoBt.addEventListener('click', () => {
  alterarContexto('descanso-longo', 'descanso-longo.png');
});


// Exercicio 03

focoBt.addEventListener('click', () => {
    alterarContexto('foco')
})

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
})

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
})

function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/FrontEndG7-ONE/Javascript-DOM/Fokus-projeto/imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>
            ` 
            break;
        case "descanso-longo":
            titulo.innerHTML = `
            Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>
            `
        default:
            break;
    }
}
