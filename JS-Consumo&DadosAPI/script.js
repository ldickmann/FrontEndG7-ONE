//* 02.Aplicando assincronicidade

// console.log("Mandando um oi pro amigp")

// function mandaMsg() {
//     console.log("Tudo certo?");
//     console.log("Vou te mandar uma solicitação");
//     console.log("Solicitação recebida!");
// }

// setTimeout(mandaMsg, 5000);

// console.log("Xau xau");


//* 03. Aprofundando em promises

//     .then(resposta => resposta.json())
//     .then(r => {
//         if (r.erro) {
//             throw Error("Esse CEP não existe")
//         } else
//         console.log(r)
//     })
//     .catch(erro => console.log(erro))
//     .finally(mensagem => console.log("Processamento concluído!"));

// console.log(consultaCEP);


//* 04. Criando funções assíncronas || 05. Manipulando formulários

async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById("erro");
    mensagemErro.innerHTML = "";
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error("CEP não existente");
        }
        var cidade = document.getElementById("cidade");
        var logradouro = document.getElementById("Endereço");
        var estado = document.getElementById("Estado");

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = `<p> CEP inválido, tente novamente.</p>`
        console.log(erro);
    }
}

// let ceps = ["01001000", "01001001"];
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
// Promisse.all(conjuntoCeps).then(respostas => console.log(respostas));

var cep = document.getElementById("cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
