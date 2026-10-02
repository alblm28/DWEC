// Importación por defecto y nombradas desde inventario.js
import resumenInventario, {
  crearProducto,
  filtrarPorCategoria,
  listarProductosAgotados,
  calcularValorTotalInventario
} from './inventario.js';

// Array de inventario inicial vacio
const inventario = [];

// Agregar 6 productos con variadas categorías y stocks
inventario.push(crearProducto("Camiseta de Algodón", "Ropa", 15.99, 20));
inventario.push(crearProducto("Pantalón Vaquero", "Ropa", 35.50, 0)); // Agotado
inventario.push(crearProducto("Auriculares Bluetooth", "Electrónica", 49.99, 10));
inventario.push(crearProducto("Teclado Mecánico", "Electrónica", 80.00, 5));
inventario.push(crearProducto("Cien Años de Soledad", "Libros", 22.00, 12));
inventario.push(crearProducto("El Principito", "Libros", 10.50, 0)); // Agotado

// 1. Obtener y mostrar productos de la categoría "Ropa"
const productosRopa = filtrarPorCategoria(inventario, "Ropa");
console.log("--- Productos en la categoría 'Ropa' ---");
console.log(productosRopa);

// 2. Obtener y mostrar productos agotados
const agotados = listarProductosAgotados(inventario);
console.log("--- Productos Agotados ---");
console.log(agotados);

// 3. Calcular y mostrar valor total
const valorTotal = calcularValorTotalInventario(inventario);
console.log(`--- Valor Total del Inventario ---`);
console.log(`El valor total es: $${valorTotal.toFixed(2)}\n`);

// 4. Ejecutar el resumen completo
resumenInventario(inventario);