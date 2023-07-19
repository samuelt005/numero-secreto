const elementoChute = document.getElementById('chute'); //Constante para localizar a div com id = "chute"

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; //Adiciona o reconhecimento de voz do navegador
const recognition = new SpeechRecognition(); //Cria uma constante para reconhecimento de voz
recognition.lang = 'pt-Br' //Da set na linguagem
recognition.start() //Inicia o reconhecimento por voz
recognition.addEventListener('result', onSpeak); //Cria o evento ao falar algo
recognition.addEventListener('end', () => recognition.start()); //Reinicia o evento de reconhecimento de voz para continuar jogando

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    chute = chute.replace(/\.$/, ''); //Remove o ponto do final da string
    exibeChute(chute); //Chama função exibeChute com parâmetro a palavra dita
    verificaChute(chute);
}

function exibeChute(chute) {
    elementoChute.innerHTML = `
        <div>Você disse: <span class="box">${chute}</span></div>
    ` //Cria uma div dentro da div com id = "chute"
}
