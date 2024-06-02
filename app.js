let listaDeNumerosSorterados = [];
let numeroLimite = 100;
let numeroSecreto = geraNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do número Secreto' );
    exibirTextoNaTela('p','Escolha um número de 1 a 100');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    console.log (numeroSecreto);

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa' ;
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p', mensagemTentativas );
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p','O número secreto e menor');
        } else {
            exibirTextoNaTela('p','O número secreto e maior');
        } 
        tentativas++;
        limparCampo();
    }

}

function geraNumeroAleatorio () {
   let numeroEscolhido =  parseInt(Math.random() * numeroLimite +1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorterados.length;

    if (quantidadeDeElementosNaLista == numeroLimite ) {
        listaDeNumerosSorterados = [];
    }

   if (listaDeNumerosSorterados.includes(numeroEscolhido)) {
        return geraNumeroAleatorio();
   } else {
        listaDeNumerosSorterados.push(numeroEscolhido);
        console.log (listaDeNumerosSorterados);
        return numeroEscolhido;
   }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = geraNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}