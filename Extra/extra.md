## Métodos de array: `filter` y `map`

Son dos de los métodos de orden superior más usados en JS: reciben una función como argumento (un callback) y la aplican a cada elemento de un array, **sin modificar el array original**.

### `map` — transforma cada elemento

Devuelve un **nuevo array** del mismo tamaño que el original, con el resultado de aplicar la función a cada elemento.

```js
const numeros = [1, 2, 3, 4];

const doblados = numeros.map((n) => n * 2);
console.log(doblados); // [ 2, 4, 6, 8 ]
console.log(numeros);  // [ 1, 2, 3, 4 ] → el original no cambia
```

```js
const alumnos = [
  { nombre: "Ana", nota: 7 },
  { nombre: "Luis", nota: 9 }
];

const nombres = alumnos.map((alumno) => alumno.nombre);
console.log(nombres); // [ 'Ana', 'Luis' ]
```

### `filter` — selecciona elementos

Devuelve un **nuevo array** (puede ser más corto que el original) solo con los elementos para los que la función devuelve `true`.

```js
const numeros = [1, 2, 3, 4, 5, 6];

const pares = numeros.filter((n) => n % 2 === 0);
console.log(pares); // [ 2, 4, 6 ]
```

```js
const alumnos = [
  { nombre: "Ana", nota: 7 },
  { nombre: "Luis", nota: 4 },
  { nombre: "Eva", nota: 9 }
];

const aprobados = alumnos.filter((alumno) => alumno.nota >= 5);
console.log(aprobados); // [ { nombre: 'Ana', nota: 7 }, { nombre: 'Eva', nota: 9 } ]
```

### Encadenar `filter` y `map`

Como ambos devuelven un array nuevo, se pueden encadenar uno detrás de otro para hacer transformaciones en varios pasos:

```js
const productos = [
  { nombre: "Teclado", precio: 25 },
  { nombre: "Monitor", precio: 150 },
  { nombre: "Ratón", precio: 15 }
];

const caros = productos
  .filter((p) => p.precio > 20)   // primero filtramos
  .map((p) => p.nombre);          // luego nos quedamos solo con el nombre

console.log(caros); // [ 'Teclado', 'Monitor' ]
```

| | `map` | `filter` |
|---|---|---|
| Tamaño del array resultante | Igual que el original | Igual o menor |
| Qué devuelve el callback | El nuevo valor de cada elemento | `true` / `false` (¿se queda o no?) |
| Para qué se usa | Transformar datos | Seleccionar un subconjunto |

> Ni `map` ni `filter` modifican el array original: ambos son un buen ejemplo de **función pura** aplicada a colecciones, lo que encaja con la programación funcional vista en el punto 3.

---

## El objeto `Math`

`Math` es un objeto global de JavaScript que agrupa constantes y métodos matemáticos. Es, en la práctica, una pequeña "librería" que ya viene incluida en el lenguaje: no hace falta importarla ni instalarla.

### Métodos de redondeo

```js
Math.floor(4.7);  // 4   → redondea hacia abajo
Math.ceil(4.2);   // 5   → redondea hacia arriba
Math.round(4.5);  // 5   → redondea al más cercano
Math.trunc(4.9);  // 4   → elimina la parte decimal sin redondear
```

### Máximos, mínimos y otras operaciones

```js
Math.max(3, 7, 2);     // 7
Math.min(3, 7, 2);     // 2
Math.abs(-8);           // 8   → valor absoluto
Math.pow(2, 3);         // 8   → 2 elevado a 3 (equivale a 2 ** 3)
Math.sqrt(16);          // 4   → raíz cuadrada
Math.random();           // un número decimal aleatorio entre 0 (incluido) y 1 (excluido)
```

### Generar un número entero aleatorio en un rango

Un uso muy habitual combina `Math.random()` con `Math.floor()`:

```js
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInt(1, 6)); // simula una tirada de dado, entre 1 y 6
```

### Agrupar tus propias utilidades matemáticas

Igual que `Math` agrupa funciones relacionadas, puedes crear tu propio objeto de utilidades para las operaciones que repitas en tu proyecto — es el mismo patrón que vimos en "Tus librerías" (punto 4.1):

```js
const mathUtils = {
  isEven(number) {
    return number % 2 === 0;
  },
  average(numbers) {
    const total = numbers.reduce((sum, n) => sum + n, 0);
    return total / numbers.length;
  },
  clamp(number, min, max) {
    return Math.min(Math.max(number, min), max); // limita 'number' al rango [min, max]
  }
};

console.log(mathUtils.isEven(4));          // true
console.log(mathUtils.average([2, 4, 6])); // 4
console.log(mathUtils.clamp(15, 0, 10));   // 10
```

> `mathUtils` no es nada especial del lenguaje: es simplemente un objeto normal que agrupa funciones relacionadas bajo un mismo nombre, para que el código quede más organizado y sea más fácil de reutilizar.