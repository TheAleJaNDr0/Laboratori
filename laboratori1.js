console.log("Hola, món!");

// 4
console.log("Ejercicio 4:");

let numero = 12;
let text = "Hola";
const ciutat = "Palma";
let boolea = true;

let concatenacio = text + " món! Visc a " + ciutat;

let interpolacio = `${text} món! Visc a ${ciutat} i el número és ${numero}`;

console.log(concatenacio);
console.log(interpolacio);

//5
console.log("Ejercicio 5:");

let nom = "Alejandro";
let edat = 19;
let estudiant = true;
let valorNul = null;

console.log("Nom:", nom);
console.log("Edat:", edat);
console.log("Estudiant:", estudiant);
console.log("Valor nul:", valorNul);

console.log(`El meu nom es ${nom}, tinc ${edat} anys i és ${estudiant} que estic estudiant.`);

// 6
console.log("Ejercicio 6:");

let a = 15;
let b = 4;

let suma = a + b;
let resta = a - b;
let multiplicacio = a * b;
let divisio = a / b;
let residu = a % b;

console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicació:", multiplicacio);
console.log("Divisió:", divisio);
console.log("Residu:", residu);

console.log("a == b:", a == b);
console.log("a === b:", a === b);
console.log("a != b:", a != b);
console.log("a !== b:", a !== b);
console.log("a < b:", a < b);
console.log("a > b:", a > b);

// 7
console.log("Ejercicio 7:");

let numeroSet = -7;

if (numeroSet > 0) {
    console.log("El número és positiu");
} else if (numeroSet < 0) {
    console.log("El número és negatiu");
} else {
    console.log("El número és zero");
}

// 8 
console.log("Ejercicio 8:");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 9
console.log("Ejercicio 9:");

let estudiants = ["Alejandro", "Joan", "Lucas", "Pere"];

for (let i = 0; i < estudiants.length; i++) {
    console.log(estudiants[i]);
}

// 10
console.log("Ejercicio 10:");

let x = 2;

while (x <= 20) {
    console.log(x);
    x += 2;
}

// 11
console.log("Ejercicio 11:");

function suma11(a, b) {
    return a + b;
}

console.log(suma11(8, 3));   
console.log(suma11(-10, 25)); 
console.log(suma11(4, 55));

// 12
console.log("Ejercicio 12:");
function nombreMesGran(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

let numeros12 = [4, 2, 55, 20, 23];
console.log("El nombre més gran és:", nombreMesGran(numeros12));

// 13
console.log("Ejercicio 13:");
function comptarParells(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}

let llistaNumeros = [2, 22, 8, 15, 18, 30];
console.log("Nombre de nombres parells:", comptarParells(llistaNumeros));

// 14
console.log("Ejercicio 14:");
function inverteixText(text) {
    return text.split("").reverse().join("");
}

console.log(inverteixText("Hola Món!"));

// 15


// 16

