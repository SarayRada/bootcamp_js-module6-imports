import { partida } from "./modelo";
import { dameCartaAleatoria, cambiarEstado, calcularPuntuaciónSegúnCarta } from "./motor";
import { 
    sumarPuntuación,
    mostrarCarta, 
    mostrarPuntuación, 
    mostrarMensajePlantarse,
    mostrarMensajePosibleResultado,
    disabledButtonDameCarta,
    disabledButtonPlantarse,
    disabledButtonNuevaPartida,
    disabledButtonQueHubiesePasado,
    comprobarEstadoBotónDameCarta,
    activarBotónNuevaPartida,
    activarBotónSaberMás,
    activarBotones,
    comprobarPuntuación
} from "./ui";



const jugarCarta = () => {
    const cartaAleatoria = dameCartaAleatoria();
    mostrarCarta(cartaAleatoria); 
    sumarPuntuación(calcularPuntuaciónSegúnCarta(cartaAleatoria));
    mostrarPuntuación();
    comprobarPuntuación();
}

const plantase = () => {
    const estadoActual = cambiarEstado();

    mostrarMensajePlantarse(estadoActual);
    disabledButtonDameCarta();
    activarBotónNuevaPartida(comprobarEstadoBotónDameCarta());
    activarBotónSaberMás();
}

const nuevaPartida = () => {
    activarBotones();
    partida.puntuacionUsuario = 0;
    mostrarPuntuación();
    disabledButtonNuevaPartida();
    disabledButtonQueHubiesePasado();
    mostrarCarta(0);
}

const saberMas = () => {
    disabledButtonPlantarse();
    const cartaAleatoria = dameCartaAleatoria();
    mostrarCarta(cartaAleatoria);
    sumarPuntuación(calcularPuntuaciónSegúnCarta(cartaAleatoria));    
    mostrarPuntuación();
    mostrarMensajePosibleResultado();
    disabledButtonQueHubiesePasado();
}

document.addEventListener("DOMContentLoaded", mostrarPuntuación);

const botonDarCarta = document.getElementById("dameCarta");
botonDarCarta instanceof HTMLButtonElement
    ? botonDarCarta.addEventListener("click", jugarCarta)
    : console.error("botonComprobar: elemento dameCarta no existe");

const botonPlantarse = document.getElementById("plantarse");
botonPlantarse instanceof HTMLButtonElement
    ? botonPlantarse.addEventListener("click", plantase)
    : console.error("botonPlantarse: elemento plantarse no existe");

const botonNuevaPartida = document.getElementById("nuevaPartida");
botonNuevaPartida instanceof HTMLButtonElement
    ? botonNuevaPartida.addEventListener("click", nuevaPartida)
    : console.error("botonPlantarse: elemento plantarse no existe");

const botonSaberMas = document.getElementById("queHubiesePasado");
botonSaberMas instanceof HTMLButtonElement
    ? botonSaberMas.addEventListener("click", saberMas)
    : console.error("botonPlantarse: elemento plantarse no existe");