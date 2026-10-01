// let tecla_pom = document.querySelector(".tecla_pom");

// function tocarsom(){
//     document.querySelector("#som_tecla_pom").play();
// }

// tecla_pom.onclick = tocarsom;

let listaDeTeclas = document.querySelectorAll(".tecla");

function tocarSom(idElementoSom){
    document.querySelector(idElementoSom).play();

}

let contador = 0;

while(contador < 9){
    let tecla = listaDeTeclas[contador];
    let instrumento = tecla.classList[1];
    let audio = `#som_${instrumento}`;
    tecla.onclick = function() {
    tocarSom(audio);
    }
    contador++;
}