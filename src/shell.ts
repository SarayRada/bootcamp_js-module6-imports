import { 
    jugarCarta,
    plantase,
    nuevaPartida,
    saberMas,
    mostrarPuntuación
} from "./ui";



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