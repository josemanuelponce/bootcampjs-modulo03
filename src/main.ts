// Interfaz
interface Grupos{
    nombre: string,
    anio: number,
    activo: boolean,
    genero: string
}

// Variables
const popRock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hardRock = "🤘 Hard Rock";
const clasica = "🎼 Clásica";

const estiloNombre = "color:black; font-size:18px; background:green;"

// Grupos objetos
const grupoA : Grupos = {
    nombre: "The Beatles",
    anio: 1960,
    activo: true,
    genero: "Pop Rock"
}


console.log(grupoA);


const grupoB : Grupos = {
    nombre: "Queen",
    anio: 1970,
    activo: false,
    genero: "Rock"
}

console.log(grupoB);


const grupoC : Grupos = {
    nombre: "AC DC",
    anio: 1973,
    activo: true,
    genero: "Hard Rock"
}

console.log(grupoC);


const grupoD : Grupos = {
    nombre: "Ludwig van Beethoven",
    anio: 1770,
    activo: false,
    genero: "Clásica"
}

console.log(grupoD);


const grupoE : Grupos = {
    nombre: "The Rolling Stones",
    anio: 1962,
    activo: true,
    genero: "Rock"
}

console.log(grupoE);

// Mostrar por consola los grupos con estilos

console.log(`%c${grupoA.nombre}`, estiloNombre,` / ${grupoA.anio} / Activo: ${grupoA.activo} / ${popRock}`);
console.log(`%c${grupoB.nombre}`, estiloNombre,` / ${grupoB.anio} / Activo: ${grupoB.activo} / ${rock}`);
console.log(`%c${grupoC.nombre}`, estiloNombre,` / ${grupoC.anio} / Activo: ${grupoC.activo} / ${hardRock}`);
console.log(`%c${grupoD.nombre}`, estiloNombre,` / ${grupoD.anio} / Activo: ${grupoD.activo} / ${clasica}`);
console.log(`%c${grupoE.nombre}`, estiloNombre,` / ${grupoE.anio} / Activo: ${grupoE.activo} / ${rock}`);