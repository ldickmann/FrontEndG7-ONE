//* Exercícios | Módulo 02: Exibindo elementos

// Exercicio 01 | Consumindo dados da API com Fetch API

// async function videosColec() {
//   const consumir = await fetch("http://localhost:3000/videos");
//   const consumirConvert = await consumir.json();
//   console.log(consumirConvert);
// }

// videosColec();

// Exercício 02 | Integrando dados da API com a interface do usuário

// import { videosColec } from './conectaApi.js';

// function constroiCard(titulo, descricao, url, imagem) {
//     const videoElemento = document.createElement('li');
//     videoElemento.className = 'videos__item';
//     videoElemento.innerHTML = `
//         <img src="${imagem}" alt="${titulo}">
//         <div class="video__descricao">
//             <h2>${titulo}</h2>
//             <p>${descricao}</p>
//             <a href="${url}" target="_blank">Assistir</a>
//         </div>
//     `;
//     return videoElemento;
// }

// async function exibeVideos() {
//     const videos = await listaVideos();
//     const listaElemento = document.querySelector('[data-lista]');
//     videos.forEach(({ titulo, descricao, url, imagem }) => {
//         const videoElemento = constroiCard(titulo, descricao, url, imagem);
//         listaElemento.appendChild(videoElemento);
//     });
// }

// exibeVideos();

// Exerrcício 03 | Adicionando novos vídeos ao AluraPlay via formulário

document
  .getElementById("formularioDeVideo")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const urlEmbed = document.getElementById("urlEmbed").value;
    const titulo = document.getElementById("titulo").value;
    const imagem = document.getElementById("imagem").value;
    const visualizacoes = document.getElementById("visualizacoes").value;

    const novoVideo = {
      url: urlEmbed,
      titulo,
      imagem,
      visualizacoes: parseInt(visualizacoes, 10),
    };

    await fetch("http://localhost:3000/videos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoVideo),
    });

    window.location.reload();
  });
