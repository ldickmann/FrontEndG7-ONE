// Variáveis para as raquetes, bola e barras horizontais
let raqueteJogador, raqueteComputador, bola, barraSuperior, barraInferior;
let fundoImg, bolaImg, barra1Img, barra2Img;
let bounceSound, golSound;

let placarJogador = 0;
let placarComputador = 0;

function preload() {
  fundoImg = loadImage('./Sprites/fundo1.png');
  bolaImg = loadImage('./Sprites/bola.png');
  barra1Img = loadImage('./Sprites/barra01.png');
  barra2Img = loadImage('./Sprites/barra02.png');
  bounceSound = loadSound('./Sounds/bounce.wav');
  golSound = loadSound('./Sounds/game_over_mono.wav');
}

function setup() {
  createCanvas(800, 400);
  raqueteJogador = new Raquete(30, height / 2, 10, 60);
  raqueteComputador = new Raquete(width - 40, height / 2, 10, 60);
  bola = new Bola(10);
  barraSuperior = new Barra(0, 0, width, 5);
  barraInferior = new Barra(0, height, width, 5);

  // Adiciona um evento de clique ao canvas para iniciar o contexto de áudio
  canvas.addEventListener('click', iniciarAudio);
}

function iniciarAudio() {
  userStartAudio();
  canvas.removeEventListener('click', iniciarAudio); // Remove o evento após iniciar o áudio
}

function draw() {
  let escala = Math.max(width / fundoImg.width, height / fundoImg.height);
  let imgWidth = fundoImg.width * escala;
  let imgHeight = fundoImg.height * escala;
  let imgX = (width - imgWidth) / 2;
  let imgY = (height - imgHeight) / 2;
  image(fundoImg, imgX, imgY, imgWidth, imgHeight);

  // Atualiza as posições das raquetes, bola e barras horizontais
  raqueteJogador.atualizar();
  raqueteComputador.atualizar();
  bola.atualizar(barraSuperior, barraInferior);

  // Verifica colisões entre bola e raquetes
  bola.verificarColisaoRaquete(raqueteJogador);
  bola.verificarColisaoRaquete(raqueteComputador);

  // Desenha as raquetes, a bola e as barras horizontais
  raqueteJogador.exibir();
  raqueteComputador.exibir();
  bola.exibir();
  barraSuperior.exibir();
  barraInferior.exibir();
}

class Raquete {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  atualizar() {
    if (this === raqueteJogador) {
      this.y = mouseY;
    } else {
      if (bola.y > this.y + this.h / 2) {
        this.y += 3;
      } else if (bola.y < this.y - this.h / 2) {
        this.y -= 3;
      }
    }
    this.y = constrain(this.y, this.h / 2 + barraSuperior.h, height - this.h / 2 - barraInferior.h);
  }

  exibir() {
    let img;
    if (this === raqueteJogador) {
      img = barra1Img;
    } else {
      img = barra2Img;
    }
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    scale(this.h / 400.0); // Escala as imagens para metade do tamanho
    image(img, 0, 0, img.width, img.height);
    pop();
  }
}

class Bola {
  constructor(r) {
    this.r = r;
    this.reiniciar();
  }
  
  aumentarVelocidade() {
    const fatorAumento = 1.1;
    this.velocidadeX *= fatorAumento;
    this.velocidadeY *= fatorAumento;
  }

  reiniciar() {
    this.anguloRotacao = 0;
    this.x = width / 2;
    this.y = height / 2;
    this.velocidadeX = random([-4, -3, 3, 4]);
    this.velocidadeY = random(-3, 3);
  }

  atualizar(barraSuperior, barraInferior) {
    this.x += this.velocidadeX;
    this.y += this.velocidadeY;

    if (
      this.y - this.r / 2 <= barraSuperior.y + barraSuperior.h ||
      this.y + this.r / 2 >= barraInferior.y - barraInferior.h
    ) {
      this.velocidadeY *= -1;
    }

    if (this.x + this.r / 2 >= width) {
      this.reiniciar();
      tocarSomDeGol();
      placarComputador++;
      narrarPlacar();
    } else if (this.x - this.r / 2 <= 0) {
      raqueteComputador.y = random(height - raqueteComputador.h);
      this.reiniciar();
      tocarSomDeGol();
      placarJogador++;
      narrarPlacar();
    }
    
    this.anguloRotacao += Math.atan2(this.velocidadeY, this.velocidadeX) / 5;

  }

  verificarColisaoRaquete(raquete) {
    if (
      this.x - this.r / 2 <= raquete.x + raquete.w / 2 &&
      this.x + this.r / 2 >= raquete.x - raquete.w / 2 &&
      this.y + this.r / 2 >= raquete.y - raquete.h / 2 &&
      this.y - this.r / 2 <= raquete.y + raquete.h / 2
    ) {
      // Inverte a direção horizontal da bola
      this.velocidadeX *= -1;

      // Calcula a posição relativa da bola na raquete (entre -0.5 e 0.5)
      let posicaoRelativa = (this.y - raquete.y) / raquete.h;

      // Define o ângulo da bola após a colisão
      let anguloBola = posicaoRelativa * PI / 3 * 2.3;

      // Atualiza a velocidade vertical da bola com base no ângulo
      this.velocidadeY = this.velocidadeX * Math.tan(anguloBola);

      // Aumenta a velocidade da bola
      this.aumentarVelocidade();
      
      // Toca o som de colisão
      tocarSomColisao();
    }
  }

  exibir() {
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    scale(2 * this.r / 318); // Escala a imagem para metade do tamanho
    rotate(this.anguloRotacao);
    image(bolaImg, 0, 0, bolaImg.width, bolaImg.height);
    pop();
  }
}

class Barra {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  exibir() {
    fill(255);
    rect(this.x, this.y, this.w, this.h);
  }
}

function tocarSomColisao() {
  if (bounceSound.isLoaded()) {
    bounceSound.play();
  }
}

function tocarSomDeGol() {
  if (golSound.isLoaded()) {
    golSound.play();
  }
}

// DESAFIO DO PLACAR
function narrarPlacar() {
  console.log(`Jogador: ${placarJogador} - Computador: ${placarComputador}`);
}