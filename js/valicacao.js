function verificaChute(chute) {
    const numero = +chute;

    if (Number.isNaN(numero)) {
        elementoChute.innerHTML += `<div>Número inválido!</div>`
        return;
    }

    if (numeroForaDoRange(numero)) {
        elementoChute.innerHTML += `<div>O chute deve estar entre ${menorValor} e ${maiorValor}!</div>`
        return;
    }

    if (numero < numeroSecreto && numero > menorValor) {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`;
    } else if (numero > numeroSecreto && numero < maiorValor) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <div class="tela-acertou">
                <p>Parabéns!!</p>
                <p>Você acertou!</p>
                <p>O número secreto era ${numeroSecreto}!</p>
                <button class="botao-rejogar" id="botao-rejogar">Jogar Novamente!</button>
            </div>
        `
    }
}

function numeroForaDoRange(numero) {
    if (numero > maiorValor || numero < menorValor) {
        return true;
    }
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'botao-rejogar') {
        window.location.reload();
    }
})