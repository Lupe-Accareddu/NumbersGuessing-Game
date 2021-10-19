const start = document.getElementById("start");
const game = document.querySelector(".game");

let randomNumber =Math.floor(Math.random()*100);
let submit = document.getElementById("submit");
let prevGuessLabel = document.getElementById("prevGuessLabel");
let anterioresSupo = document.getElementById("anterioresSupo");;
let hint = document.getElementById("hint");
let reiniciar = document.getElementById("reiniciar");
let contador = 0;


start.addEventListener('click',iniciarJuego);
function iniciarJuego(){
    game.style.display='block' //game.classList.remove("game")
    start.style.display= 'none'
}


myForm.addEventListener("submit", (e) =>{
    e.preventDefault();
});


submit.addEventListener('click', validation);
function validation(){
    let playerGuess= parseInt(document.getElementById("guess").value);
    contador++;

    if (playerGuess === ""){
        hint.textContent= "Ingrese un número valido"
    } else if (playerGuess === randomNumber){
        hint.textContent= "¡Ganaste!"
        reiniciar.style.display='block';
    } else if (playerGuess > randomNumber){
        hint.textContent= "El número ingresasado es mayor a la respuesta"
    } else if (playerGuess < randomNumber){
        hint.textContent= "El número ingresasado es menor a la respuesta"
    }
    anterioresSupo.textContent+= playerGuess + ' ';

    if (contador === 10){
        game.style.display='none';
        reiniciar.style.display='block';
        document.getElementById('gameover').textContent = "Perdiste... u.u"
    }
}
function reload(){
    history.go(0);
}