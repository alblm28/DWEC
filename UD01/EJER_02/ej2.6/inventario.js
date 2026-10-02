// Función para crear el objeto producto
export function crearProducto(nombre, categoria, precio, stock) {
  return {
    nombre,
    categoria,
    precio,
    stock
  };
}

// Filtra los productos por una categoría especificada
export function filtrarPorCategoria(inventario, categoria) {
  return inventario.filter((producto) => producto.categoria === categoria);
}

// Filtra y devuelve solo los productos sin stock
export function listarProductosAgotados(inventario) {
  return inventario.filter((producto) => producto.stock === 0);
}

// Calcula el valor acumulado (precio * stock) de todos los productos
export function calcularValorTotalInventario(inventario) {
  return inventario.reduce((acumulador, producto) => {
    return acumulador + producto.precio * producto.stock;
  }, 0);
}

// Exportación por defecto: muestra un resumen general del inventario
export default function resumenInventario(inventario) {
  const totalProductos = inventario.length;

  // Set elimina los duplicados, permitiendo contar categorías únicas
  const categoriasUnicas = new Set(inventario.map((p) => p.categoria)).size;
  
  const valorTotal = calcularValorTotalInventario(inventario);

  console.log("=== RESUMEN DEL INVENTARIO ===");
  console.log(`Número total de productos: ${totalProductos}`);
  console.log(`Categorías distintas: ${categoriasUnicas}`);
  console.log(`Valor total del inventario: $${valorTotal.toFixed(2)}`);
}