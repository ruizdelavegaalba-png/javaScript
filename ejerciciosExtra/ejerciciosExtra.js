// 5. for...of
console.log("\nEjercicio 5: for...of");
/* Escribe una función llamada 'countLetter' que tome dos parámetros,
un texto ('text') y una letra ('letter'), y devuelva cuántas veces
aparece esa letra en el texto.
Recorre el texto con un 'for...of' y usa una variable 'let' como contador. */

function countLetter(text,letter ){
    let cont = 0;
    for (const char of text){
        if (char === letter){
        cont ++;
        }
    }
    return cont;
}


console.log(countLetter("banana", "a"));     // Debería mostrar: 3
console.log(countLetter("Hola mundo", "o")); // Debería mostrar: 2
console.log(countLetter("JavaScript", "z")); // Debería mostrar: 0

// 6. for...in
console.log("\nEjercicio 6: for...in");
/* Escribe una función llamada 'countHighScores' que tome dos parámetros:
un objeto 'scores' (cada clave es el nombre de un alumno y cada valor
es su nota) y un número 'min'. Devuelve cuántos alumnos tienen una nota
mayor o igual que 'min'.
Recorre el objeto con un 'for...in'. */

function countHighScores(scores, min){
    let cont = 0;
    for ( const name in scores){
        if (scores[name] >= min){
            cont++;
        }
    }
    return cont;
}


console.log(countHighScores({ Ana: 7, Luis: 4, Eva: 9 }, 5)); //Debería mostrar: 2
console.log(countHighScores({ Leo: 3, Mar: 2 }, 5));          //Debería mostrar: 0

// 7. while
console.log("\nEjercicio 7: while");
/* Una planta mide 1 cm el primer día y cada día DUPLICA su altura.
Escribe una función llamada 'daysToReach' que tome una altura objetivo
('target', en cm) y devuelva cuántos días tienen que pasar hasta que la
planta mida 'target' o más.
Usa una variable 'let height' que empiece en 1, una variable 'let days'
que empiece en 0, y un bucle 'while'. */
function daysToReach (target){
    let height = 1;
    let days = 0;
    while (height < target){
        height *= 2;
        days += 1;
    }
    return days;
}


console.log(daysToReach(8));   // Debería mostrar: 3  (1 → 2 → 4 → 8)
console.log(daysToReach(1));   // Debería mostrar: 0  (ya mide 1)
console.log(daysToReach(100)); // Debería mostrar: 7  (… 64 → 128)

// 8. break
console.log("\nEjercicio 8: break");
/* Escribe una función llamada 'findFirstLongWord' que tome dos parámetros,
un array de palabras ('words') y un número ('minLength'), y devuelva la
PRIMERA palabra que tenga 'minLength' letras o más. Si no hay ninguna,
devuelve null.
Guarda el resultado en una variable 'let result' que empiece en null,
recorre el array con un 'for...of' y usa 'break' para dejar de buscar
en cuanto la encuentres. */

function findFirstLongWord(words, minLength){
    let result = null;
    for (const word of words){
        if (word.length >= minLength){
        result = word;
        break;
        }
    }
    return result;
}


console.log(findFirstLongWord(["sol", "casa", "elefante", "jirafa"],
5)); // Debería mostrar: 'elefante'
console.log(findFirstLongWord(["sol", "mar"], 5));
  // Debería mostrar: null

// 9. continue
console.log("\nEjercicio 9: continue");
/* Escribe una función llamada 'countNonSpaces' que tome un texto ('text')
y devuelva cuántos caracteres tiene SIN contar los espacios.
Recorre el texto con un 'for...of' y usa 'continue' para saltarte los
espacios (" "). */

function countNonSpaces(text){
    let cont = 0;
    for ( const letter of text){
        if (letter === " "){
        continue;
        }
        cont++;
    }
    return cont;
}


console.log(countNonSpaces("Hola mundo")); // Debería mostrar: 9
console.log(countNonSpaces("a b c"));      // Debería mostrar: 3
console.log(countNonSpaces("   "));        // Debería mostrar: 0

// 10. forEach
console.log("\nEjercicio 10: forEach");
/* Escribe una función llamada 'getLengths' que tome un array de palabras
('words') y devuelva un NUEVO array con el número de letras de cada palabra.
Utiliza el método 'forEach' y 'push' sobre un array 'result' declarado
con 'const'. El array original no debe modificarse. */

function getLengths(words){
    const result = [];
    words.forEach((word) => {
    result.push(word.length)
});
    return result;
}


console.log(getLengths(["sol", "casa", "elefante"])); // Debería
mostrar: [ 3, 4, 8 ]
console.log(getLengths([]));                         // Debería mostrar: []

// 1. Acceder a un carácter y mayúsculas
console.log("Ejercicio 1: Acceder a un carácter y mayúsculas");
/* Escribe una función llamada 'getInitials' que tome dos parámetros,
'firstName' y 'lastName' (strings), y devuelva las iniciales en mayúscula
y seguidas de un punto, con el formato: "A.R."
Usa charAt(0) para sacar la primera letra, toUpperCase() para ponerla en
mayúscula y una plantilla literal (backticks) para construir el texto. */

function getInitials(firstName, lastName){
    return `${firstName.charAt(0).toUpperCase()}.${lastName.charAt(0).toUpperCase()}.`;
}


console.log(getInitials("alba", "ruiz"));  // Debería mostrar: 'A.R.'
console.log(getInitials("Juan", "pérez")); // Debería mostrar: 'J.P.'

// 2. Limpiar un texto (trim, toLowerCase, replaceAll)
console.log("\nEjercicio 2: Limpiar un texto");
/* Escribe una función llamada 'createUsername' que tome un nombre completo
('fullName') que puede llegar con espacios sobrantes y mayúsculas, y
devuelva un nombre de usuario:
- sin espacios al principio ni al final (trim)
- todo en minúsculas (toLowerCase)
- con los espacios de en medio cambiados por guiones bajos "_" (replaceAll) */

function createUsername(fullName){
    return fullName.trim().toLowerCase().replaceAll(" ", "_");
}


console.log(createUsername("  Alba Ruiz  "));      // Debería mostrar:
'alba_ruiz'
console.log(createUsername("Juan Carlos Pérez"));  // Debería mostrar:
'juan_carlos_pérez'

// 3. Rellenar con padStart()
console.log("\nEjercicio 3: Rellenar con padStart()");
/* Escribe una función llamada 'formatTicket' que tome un número de ticket
('number') y devuelva el texto "Ticket nº " seguido del número con ceros
a la izquierda hasta tener 3 cifras.
Recuerda que padStart es un método de string, no de número: primero
tienes que convertir el número a texto con toString(). */

function formatTicket(number) {
    return `Ticket nº ${number.toString().padStart(3, "0")}`;
}


console.log(formatTicket(5));   // Debería mostrar: 'Ticket nº 005'
console.log(formatTicket(42));  // Debería mostrar: 'Ticket nº 042'
console.log(formatTicket(123)); // Debería mostrar: 'Ticket nº 123'

// 4. split
console.log("\nEjercicio 4: split");
/* Escribe una función llamada 'countWords' que tome una frase ('sentence')
y devuelva cuántas palabras tiene.
Ojo: la frase puede llegar con espacios sobrantes al principio o al final.
Pista: primero limpia los extremos, después convierte la frase en un array
de palabras con split, y por último mira cuántos elementos tiene el array. */

function countWords(sentence){
    return sentence.trim().split(" ").length;
}


console.log(countWords("Hola mundo"));               // Debería mostrar: 2
console.log(countWords("  Me gusta JavaScript  "));  // Debería mostrar: 3

// 5. slice con índices negativos
console.log("\nEjercicio 5: slice con índices negativos");
/* Escribe una función llamada 'getExtension' que tome el nombre de un
archivo ('fileName') y devuelva sus 3 últimos caracteres (la extensión).
Utiliza 'slice' con un índice negativo. */

function getExtension(fileName){
    return fileName.slice(-3)
}


console.log(getExtension("foto.jpg"));      // Debería mostrar: 'jpg'
console.log(getExtension("apuntes.pdf"));   // Debería mostrar: 'pdf'
console.log(getExtension("index.html"));    // Debería mostrar: 'tml'

// 6. replace contra replaceAll
console.log("\nEjercicio 6: replace contra replaceAll");
/* Escribe una función llamada 'changeAnimal' que tome un texto ('text')
y devuelva un array con dos versiones en las que "gato" se cambia por
"perro":
1. la primera usando replace()
2. la segunda usando replaceAll() */

function changeAnimal(text){
    return [text.replace("gato", "perro"), text.replaceAll("gato", "perro")];
}


console.log(changeAnimal("gato come, gato duerme"));
// Debería mostrar: [ 'perro come, gato duerme', 'perro come, perro duerme' ]

// 1. Acceder a los elementos
console.log("Ejercicio 1: Acceder a los elementos");
// Escribe una función llamada 'getEdges' que tome un array ('items') y
// devuelva un nuevo array con su primer y su último elemento, en ese orden.
// Para el primero usa el índice 0 y para el último el método 'at' con un
// índice negativo.

// Tu código aquí

console.log(getEdges([10, 20, 30, 40])); // Debería mostrar: [ 10, 40 ]
console.log(getEdges(["a"]));            // Debería mostrar: [ 'a', 'a' ]

// 1. Acceder a los elementos
console.log("Ejercicio 1: Acceder a los elementos");
// Escribe una función llamada 'getEdges' que tome un array ('items') y
// devuelva un nuevo array con su primer y su último elemento, en ese orden.
// Para el primero usa el índice 0 y para el último el método 'at' con un
// índice negativo.

function getEdges(items){

}

console.log(getEdges([10, 20, 30, 40])); // Debería mostrar: [ 10, 40 ]
console.log(getEdges(["a"]));            // Debería mostrar: [ 'a', 'a' ]

// 6. Condicionales (if / else)
console.log("\nEjercicio 6: Número mayor");
/* Escribe una función llamada 'getLarger' que tome dos números ('a' y 'b')
como parámetros y devuelva el número que sea mayor.
Si ambos números son iguales, debe devolver cualquiera de los dos o indicar
que son iguales.

Requisitos:
- Usa estructuras condicionales 'if' / 'else'.
- Muestra el resultado en la consola probando distintos casos. */

function getLarger(a, b) {
    if (a > b) {
        return a;
    } else {
        return b; 
    }
}

console.log(getLarger(10, 5));  // Debería mostrar: 10
console.log(getLarger(3, 8));   // Debería mostrar: 8
console.log(getLarger(4, 4));   // Debería mostrar: 4 (o mensaje de igualdad)


// 7. Bucle for clásico
console.log("\nEjercicio 7: Tabla de multiplicar");
/* Escribe una función llamada 'printTable' que tome un número ('num')
e imprima en consola su tabla de multiplicar del 1 al 10.

Requisitos:
- Usa un bucle 'for' clásico que vaya desde 1 hasta 10.
- Imprime cada renglón con la sintaxis "num x i = resultado". */

function printTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

printTable(5);
// Debería mostrar:
// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50


// 8. Bucle whileo
console.log("\nEjercicio 8: Cuenta regresiva");
/* Escribe una función llamada 'countdown' que reciba un número entero positivo ('start')
y realice una cuenta regresiva imprimiendo cada número en la consola hasta llegar a 0.

Requisitos:
- Utiliza un bucle 'while'.
- Decrementa el contador en cada iteración.
- Al llegar a 0, imprime "¡Despegue!". */

function countdown(start) {
    // Tu código aquí
}

countdown(3);
// Debería mostrar:
// 3
// 2
// 1
// 0
// ¡Despegue!


// 9. Métodos de Arrays (push / pop)
console.log("\nEjercicio 9: Invertir un array");
/* Escribe una función llamada 'reverseArray' que tome un array ('arr')
y devuelva un nuevo array con los mismos elementos pero en orden inverso.

Requisitos:
- Recorre el array original o utiliza métodos como 'push' o 'unshift'.
- No modifiques el array original.
- Devuelve el nuevo array invertido. */

function reverseArray(arr) {
    // Tu código aquí
}

console.log(reverseArray([1, 2, 3, 4])); // Debería mostrar: [4, 3, 2, 1]
console.log(reverseArray(["a", "b", "c"])); // Debería mostrar: ["c", "b", "a"]


// 10. Manipulación de Strings
console.log("\nEjercicio 10: Invertir texto");
/* Escribe una función llamada 'reverseText' que tome un string ('str')
y devuelva el texto escrito al revés.

Requisitos:
- Puedes usar un bucle ('for' o 'for...of') o métodos de string/array (.split, .reverse, .join).
- Devuelve la cadena invertida como resultado. */

function reverseText(str) {
    
}

console.log(reverseText("hola"));       // Debería mostrar: "aloh"
console.log(reverseText("JavaScript")); // Debería mostrar: "tpircSavaJ"
/* Ejercicio 1: Variables y Tipos de Datos
1. Declara una variable llamada nombre y asígnale tu nombre.
2. Crea una variable edad y asígnale tu edad actual.
3. Declara una variable esEstudiante y asígnale true si eres estudiante o false si no lo eres.
4. Crea una variable mensaje que contenga un saludo utilizando las variables nombre y edad.
5. Crea una variable num1 y asígnale un número cualquiera.
6. Crea otra variable num2 y asígnale otro número.
7. Realiza las siguientes operaciones:
    Suma num1 y num2 y guarda el resultado en una variable llamada suma.
    Resta num1 y num2 y guarda el resultado en una variable llamada resta.
    Multiplica num1 por num2 y guarda el resultado en una variable llamada multiplicacion.
    Divide num1 entre num2 y guarda el resultado en una variable llamada division. */

const nombre = "Alba Ruiz de la Vega";
const edad = 21;
const esEstudiante = true
const mensaje = `Hola, me llamo ${nombre} y tengo ${edad} años.`;
const num1 = 3;
const num2 = 5;
let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;



// Para comprobar que funciona:
console.log(nombre, edad, esEstudiante);
console.log(mensaje);
console.log(suma, resta, multiplicacion, division);

/* Ejercicio 9: Parámetros y Argumentos
Crea una función llamada calcularAreaRectangulo que acepte dos parámetros: base y altura.
La función debe calcular y retornar el área del rectángulo. */

function calcularAreaRectangulo(base, altura){
    return base * altura; 
}


console.log(calcularAreaRectangulo(4, 5)); // Debería mostrar: 20
console.log(calcularAreaRectangulo(3, 3)); // Debería mostrar: 9

/* Ejercicio 8: Bucles For
Utiliza un bucle for para imprimir los números pares del 2 al 20. */

for (let i = 2; i <= 20; i+=2 ) {
    console.log(i); 
}

// Debería mostrar: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 (uno por línea)

/* Ejercicio 6: Bucles While
Utiliza un bucle while para imprimir los números del 1 al 10. */

let i = 1;
while (i <= 10 ){
    console.log(i);
    i++
}


// Debería mostrar: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 (uno por línea)

/* Ejercicio 3: Operador Ternario y Tipos de Datos
1. Crea una variable numero y asígnale un valor numérico cualquiera.
2. Utiliza el operador ternario para asignar a la variable tipoNumero el valor "positivo"
si numero es mayor que 0, y "negativo o cero" si no lo es.
3. Declara una variable cadena y asígnale un valor de tipo cadena de texto.
4. Utiliza el operador ternario para asignar a la variable longitudCadena indicar 
que la cadena
es "larga" si su longitud es mayor que 5, y "corta" si no lo es. */

const numero = 7;
const tipoNumero = numero > 0 ? "positivo" : "negativo o cero";
const cadena = "Hola";
const longitudCadena = cadena.length > 5 ? "larga" : "corta";

console.log(tipoNumero);
console.log(longitudCadena);

/* Ejercicio 2: Operadores y Condicionales
1. Declara una variable puntuacion y asígnale un valor entre 0 y 100 para representar 
una calificación.
2. Utiliza un condicional if para verificar si la puntuacion es mayor o igual a 70.
Si es verdadero,
muestra en la consola "Aprobado", de lo contrario, muestra "Reprobado".
3. Declara una variable dia y asígnale un número del 1 al 7 para representar un día de la semana
mbarg(1: Lunes, 2: Martes, ..., 7: Domingo).
4. Utiliza una estructura switch para mostrar en la consola el nombre del día correspondiente
al número asignado a dia.
5. Crea una función llamada convertirFahrenheit que tome la temperatura en grados Celsius como
argumento y devuelva la temperatura equivalente en grados Fahrenheit utilizando la fórmula:
(C × 9/5) + 32.
6. Utiliza la función convertirFahrenheit para mostrar la temperatura en grados Fahrenheit 
en la consola.
7. Crea una funcion llamada esPar que tome un numero como argumento y devuelva true o false 
si el
numero es par. Puedes utilizar el operador modulo % para ver si tiene resto la operación y saber
si es par o no.
8. Utiliza la función esPar */


const puntuacion = 85;
if (puntuacion >= 70){
    console.log("Aprobado");
}else {
    console.log("Reprobado");
}

const dia = 7;
switch (dia){
    case 1 : 
        console.log("Lunes");
        break;
    case 2 : 
        console.log("Martes");
        break;
    case 3 : 
        console.log("Miercoles");
        break;
    case 4 : 
        console.log("Jueves");
        break;
    case 5 : 
        console.log("Viernes");
        break;
    case 6 : 
        console.log("Sabado");
        break;
    case 7 : 
        console.log("Domingo");
        break;
}


function convertirFahrenheit (Celsius){
    return ( Celsius * 9 / 5 ) + 32;
}
console.log(convertirFahrenheit(25));

function esPar(numero){
    return numero % 2 === 0;
}
console.log(esPar(2));

/* Ejercicio 5: Declaración Switch
1. Crea una variable mes y asígnale un número del 1 al 12 para representar un mes del año.
2. Utiliza una declaración switch para mostrar en la consola la estación del año
correspondiente al mes asignado.
3. Crea una función llamada calcularDiasMes que tome un número mes como argumento y devuelva
la cantidad de días que tiene ese mes. Utiliza una declaración switch para calcular los
días de cada mes.
4. Utiliza la función calcularDiasMes para mostrar en la consola la cantidad de días de un
mes específico. */

const mes = 7;
switch (mes) {
    case 12:
    case 1:
    case 2:
        console.log("Invierno");
        break;
    case 3:
    case 4:
    case 5:
            console.log("Primavera");
        break;
    case 6:
    case 7:
    case 8:
            console.log("Verano");
        break;
    case 9:
    case 10:
    case 11:
            console.log("Otoño");
        break;
    default: 
        console.log("Mes invalido");
}
console.log(calcularDiasMes(4));

function calcularDiasMes (mes){
switch (mes) {
    case 11:
    case 6:
    case 9:
        return 30;
        case 4:
    case 2:
        return 28;
    case 3:
    case 1:
    case 5:
    case 7:
    case 8:
    case 12:
    case 10:
            return 31;
    default: 
        return "Mes invalido";
    }
}
console.log(calcularDiasMes(4));

/* Ejercicio 4: Condicionales Anidados y Operador Lógico
1. Crea una variable hora y asígnale un valor numérico que represente una hora del día
   (en formato de 24 horas).
2. Utiliza condicionales anidados para mostrar en la consola un mensaje que indique el
   momento del día: "Buenos días" si la hora es menor a 12, "Buenas tardes" si la hora es
   mayor o igual a 12 y menor a 18, y "Buenas noches" si es igual o mayor a 18.
3. Crea una función llamada esMayorDeEdad que tome la edad como argumento y devuelva true si
   la edad es mayor o igual a 18, y false si es menor.
4. Utiliza la función esMayorDeEdad y el operador lógico && para mostrar en la consola si una
   persona es mayor de edad y estudiante o no.
5. Crea una función llamada esVocal que tome una letra como argumento y devuelva true si la
   letra es una vocal (mayúscula o minúscula), y false si no lo es.
6. Utiliza la función esVocal para mostrar en la consola si un carácter específico es una vocal. */

const hora = 17;
if (hora < 12) {
    console.log("Buenos días");
} else if (hora >= 12 && hora <= 18){
    console.log("Buenas tardes");
}else {
    console.log("Buenas noches");
}
{
    const esEstudiante = true;
function esMayorDeEdad(edad){
    return edad >= 18 ? true : false; 
}
if (esMayorDeEdad(21) && esEstudiante){
    console.log("Es mayor de edad y estudiante");
}else{
    console.log("Es menor de de edad y estudiante a la vez");
}
}

function esVocal(letra){
    return "AEIOUaeiou".includes(letra)
}
console.log(esVocal("a"));

/* Ejercicio 7: Bucle Do...While
Utiliza un bucle do...while para pedir al usuario que ingrese un número positivo.
Continúa pidiendo hasta que ingrese un número negativo. */

{
let numero;
do {
    numero = Number(prompt("Escribe un número positivo:")); ;
    
}while (numero >= 0)
}
/* Ejercicio 10: Objeto + map + función
Crear función 'promediarEdades' que devuelva el
 promedio de edades de un array de personas */

const grupo = [
    { nombre: "Ana", edad: 20 },
    { nombre: "Luis", edad: 25 },
    { nombre: "Eva", edad: 30 }
];

function promediarEdades(personas) {
    const edades = personas.map((persona) => persona.edad);
    let suma = 0;
    for (const edad of edades) {
        suma += edad;                                       
    }
    return suma / personas.length;                        
}

console.log(promediarEdades(grupo)); // 25
console.log(promediarEdades(grupo)); // Debería mostrar: 25