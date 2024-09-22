// Exercicio 01

let contador = 0;

const listaBotoes = document.querySelectorAll('.tecla');

listaBotoes.length


// Exercicio 02

console.log(listaBotoes);


// Exercicio 03 

const listaDeTeclas = document.querySelectorAll('.tecla')

function incrementarContador() {
  contador = contador + 1;
  console.log("Contador: " + contador);
}

listaDeTeclas[3].onclick = incrementarContador;


// Exercicio 04

listaBotoes.forEach(botao => {
  botao.addEventListener('click', () => {
    while (true) {
      contador++;
      console.log('Contador:', contador);

      break;
    }
  });
});


// Exercicio 05

listaBotoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let foiClicado = false;
        
        for (let i = 0; i < listaBotoes.length; i++) {
            if (foiClicado) break;
            
            if (listaBotoes[i] === botao) {
                contador++;
                console.log('Contador:', contador);
                foiClicado = true;
            };
        };
    });
});
