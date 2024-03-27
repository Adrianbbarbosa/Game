let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarUmNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do  número secreto!');
exibirTextoNaTela('p', 'Escolha um numero de 1 a 10');
}
exibirMensagemInicial();
function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ?  'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobril o número secreto! com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor!');
        } else{
            if(chute < numeroSecreto) {
                exibirTextoNaTela('p', 'O número secreto é maior');
            }
        }
            // tentativas = tentativas + 1;
            tentativas++;
            limparCampo();
    }
}

function gerarUmNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

if(quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
}

  if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarUmNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarUmNumeroAleatorio();
    limparCampo()
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
