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
