// 1.Declaración de variables
let age = 25;
const name = "María"; 

console.log(age);
console.log(name);

edad = 26;
console.log(edad);

// 2. Tipos de variables
let texto = "hola mundo";
let number = 33;
let isBigger = true;
let empty = null;
let undefined;

// 3. temple literals `` 
console.log(`Mi nombre ${name} y tengo ${age} años.`);

// 4.Condicionales Simple
let temperature = 28;

if ( temperature > 30 ){
    console.log("Hace calor, enciende el aire");
} else if (temperature >= 20 ){
    console.log("Hace buena temperatura");
} else {
    console.log("Hace frío, abrígate");
}

// Operadores de comparación y lógicos
//=== 
//!==
//&&
//||

// Costumer details
let age2 = 27;
let membership = "Gold";
let totalPurchase = 120;
let hasCoupon = false;

let isGoldMember = membership === "Gold"; 

// For
for (let i = 1; i <= 10; i++) {
    console.log(`Numero de repetición: ${i} `);
} 

// While
let batery = 3;
while (bateria > 0){
    console.log(`Móvil encendido. Batería restante: ${batery}%`);
    batery--;
}
console.log("El móvil se ha apagado");

// Función tradicional
function greetings(user) {
    return `hola, ${user}, bienvenida al curso`;
}
let message = greetings("Alberto");
console.log(message);

// Arrow function
const greetings = (user) => {
    return `hola, ${user}, bienvenida al curso`;
}

const greetings = user => `hola, ${user}, bienvenida al curso`;

const sum = (a,b) => {
    return a + b;
}

const sum = (a,b) a + b;

// Arrays 
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]);
console.log(fruits.length);
fruits.push("Kiwi");
console.log(fruits);

fruits.unshift("Tomato");
console.log(fruits);

fruits.shift();
console.log(fruits);

let whichFruit = fruits.includes("Apple");
console.log(whichFruit);

// Pop
fruits.pop();
console.log(fruits);

// IndexOf
fruits.indexOf("Banana");
console.log(fruits); 

let color = ["red", "green", "blue"];
if(color.indexOf("yellow") === -1){
    console.log("El color amarillo no esta en tu lista");
}

//Filter
const prices = [10, 20, 30, 40];
const biggetPrices = prices.filter(p => p > 20);
console.log(biggetPrices);

filter()

// Find   