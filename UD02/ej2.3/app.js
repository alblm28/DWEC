// Importar funciones desde el módulo biblioteca.js
import { agregarLibro, obtenerLibros } from './biblioteca.js';

// 1. Mostrar la colección inicial
console.log("=== COLECCIÓN INICIAL ===");
console.log(obtenerLibros());

// 2. Crear un nuevo libro y agregarlo
const libroNuevo = {
  id: 11,
  titulo: "Un mundo feliz",
  autor: "Aldous Huxley",
  paginas: 288
};

agregarLibro(libroNuevo);

// 3. Mostrar la colección actualizada para verificar los cambios
console.log("\n=== COLECCIÓN ACTUALIZADA ===");
console.log(obtenerLibros());