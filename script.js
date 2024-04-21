console.log("Hola Mundo")
let intentos = 6;
let diccionario = ['APPLE', 'GRAPE', 'GREEN', 'BROWN', 'MANGO', 'CICLE']
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];


//Esto que agregamos es un “Event Listener”, que es un mecanismo que permite detectar cuando ocurre un evento en una página web. Cuando se detecta un evento, 
//se llama a una función que se encarga de manejarlo.
window.addEventListener('load', init)
function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}


//Actividad - Evento 'click'
//Primero necesitamos encontrar el elemento en cuestión:
const button = document.getElementById("guess-button");
//Ahora, podemos agregar el evento a este elemento:
button.addEventListener("click", intentar);

//En este caso, estamos agregando el event listener al botón. usando su ID “guess-button”. Cuando el botón es presionado, la función “intentar” se ejecuta.


const input = document.getElementById("guess-input");
const valor = input.value;


function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}





//INTENTOS
function intentar(){
    const INTENTO = leerIntento();
    if (INTENTO === palabra ) {
        terminar("<h1>GANASTE!😀</h1>")
        return
    }
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#79b851';
        } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#f3c237';
        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#a4aec4';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
		intentos--
    if (intentos==0){
        terminar("<h1>PERDISTE!😖</h1>")
    }
}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    const BOTON = document.getElementById("guess-button");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}
