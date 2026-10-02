// Arreglo de objetos inicial
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

export function agregarLibro(nuevoLibro) {
  libros.push(nuevoLibro);
}

export function obtenerLibros() {
  return libros;
}

// Busca y devuelve el objeto del libro por su id
export function buscarLibro(id) {
  return libros.find((libro) => libro.id === id);
}

// Elimina el libro con el id indicado
export function eliminarLibro(id) {
  const indice = libros.findIndex((libro) => libro.id === id);

  // Si findIndex encuentra una coincidencia devuelve la posición, de lo contrario devuelve -1
  if (indice !== -1) {
    libros.splice(indice, 1);
    return true; // Retorna true si fue eliminado con éxito
  }

  return false; // Retorna false si no se encontró el libro
}