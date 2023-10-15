function tocaSom (seletorAudio) {
    let elemento = document.querySelector(seletorAudio).play();

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido')
    }
}

let listaDeTeclas = document.querySelectorAll('.tecla');

for ( let contador = 0; contador < listaDeTeclas.length; contador++) {

    let tecla = listaDeTeclas[contador];
    let instrumento = tecla.classList[1];
    let idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

}