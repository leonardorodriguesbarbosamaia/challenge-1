let listaDeNomes = [
    'Ana', 'Beatriz', 'Carlos', 'Daniel', 'Eduardo', 'Fernanda', 'Gabriela', 'Henrique', 'Igor', 'Juliana',
    'Karine', 'Luana', 'Mariana', 'Nathalia', 'Otavio', 'Paula', 'Quiteria', 'Rafael', 'Sabrina', 'Tiago',
    'Ursula', 'Vitor', 'Wellington', 'Ximena', 'Yara', 'Zé', 'Aline', 'Breno', 'Cláudio', 'Débora', 'Elias'
];
let nomeSecreto = gerarNomeAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do nome secreto');
    exibirTextoNaTela('p', 'Escolha um nome da lista');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value.trim().toLowerCase();
    
    if (chute === nomeSecreto.toLowerCase()) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o nome secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        exibirTextoNaTela('p', 'Tente novamente! O nome secreto não é esse.');
        tentativas++;
        limparCampo();
    }
}

function gerarNomeAleatorio() {
    let nomeEscolhido = listaDeNomes[Math.floor(Math.random() * listaDeNomes.length)];
    return nomeEscolhido;
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    nomeSecreto = gerarNomeAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}








