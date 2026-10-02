// 1. Array inicial con 6 números
const numeros = [5, 12, 8, 3, 20, 7];

// 2. Uso de .map() para multiplicar cada elemento por 2
const dobles = numeros.map((numero) => {
  return numero * 2;
});

// 3. Uso de .filter() para conservar solo los pares
const pares = numeros.filter((numero) => {
  return numero % 2 === 0; // El operador % (módulo) obtiene el resto de la división entre 2
});

// 4. Bucle for...of para iterar y mostrar los números pares
for (const numero of pares) {
  console.log(numero);
}