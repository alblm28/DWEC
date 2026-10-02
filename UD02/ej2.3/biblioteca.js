// Arreglo de objetos inicial con 10 libros
const libros = [
  { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", paginas: 417 },
  { id: 2, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", paginas: 863 },
  { id: 3, titulo: "1984", autor: "George Orwell", paginas: 328 },
  { id: 4, titulo: "El principito", autor: "Antoine de Saint-Exupéry", paginas: 96 },
  { id: 5, titulo: "Fahrenheit 451", autor: "Ray Bradbury", paginas: 249 },
  { id: 6, titulo: "Ficciones", autor: "Jorge Luis Borges", paginas: 224 },
  { id: 7, titulo: "Orgullo y prejuicio", autor: "Jane Austen", paginas: 432 },
  { id: 8, titulo: "El hobbit", autor: "J.R.R. Tolkien", paginas: 310 },
  { id: 9, titulo: "Pedro Páramo", autor: "Juan Rulfo", paginas: 128 },
  { id: 10, titulo: "Crónica de una muerte anunciada", autor: "Gabriel García Márquez", paginas: 120 }
];

// Función para añadir un libro al arreglo
export function agregarLibro(nuevoLibro) {
  libros.push(nuevoLibro);
}

// Función para obtener el arreglo completo
export function obtenerLibros() {
  return libros;
}