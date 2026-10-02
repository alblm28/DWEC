import { 
  agregarLibro, 
  obtenerLibros, 
  buscarLibro, 
  eliminarLibro 
} from './biblioteca.js';

// 1. Probar la función buscarLibro
console.log("=== BUSCAR LIBRO CON ID 3 ===");
const libroEncontrado = buscarLibro(3);
console.log(libroEncontrado);

// 2. Probar la función eliminarLibro
console.log("\n=== ELIMINAR LIBRO CON ID 5 ===");
eliminarLibro(5);

// 3. Mostrar la colección final para verificar la eliminación
console.log("\n=== COLECCIÓN FINAL DE LIBROS ===");
console.log(obtenerLibros());