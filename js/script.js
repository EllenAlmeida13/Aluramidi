function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = socument.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {

    listaDeTeclas[contador].onclick = tocaSom;

    contador = contador + 1
}