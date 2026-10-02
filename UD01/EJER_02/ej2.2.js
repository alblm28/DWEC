// 1. Function Declaration (Declaración de Función)
function calcularAreaRectangulo(base, altura) {
  return base * altura;
}

// 2. Function Expression (Expresión de Función)
const calcularAreaTriangulo = function(base, altura) {
  return (base * altura) / 2;
};

// 3 y 4. Arrow Function (Función Flecha) con Valores por Defecto
const calcularAreaTrianguloFlecha = (base = 10, altura = 5) => (base * altura) / 2;

// 5. Llamadas de prueba e impresión en consola
console.log("Área Rectángulo:", calcularAreaRectangulo(8, 4));        // Resultado: 32
console.log("Área Triángulo (Expresión):", calcularAreaTriangulo(8, 4)); // Resultado: 16

// Pruebas con la Arrow Function:
console.log("Área Triángulo (Flecha con valores dados):", calcularAreaTrianguloFlecha(12, 6)); // Resultado: 36
console.log("Área Triángulo (Flecha con valores por defecto):", calcularAreaTrianguloFlecha());  // Usa base=10 y altura=5. Resultado: 25