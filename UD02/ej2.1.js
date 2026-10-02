// Ejercicio 2.1: Creando tu primera lista de reproducción
const playlist = [
  { titulo: "Bohemian Rhapsody", artista: "Queen", duracion: 354 },
  { titulo: "Hotel California", artista: "Eagles", duracion: 391 },
  { titulo: "Shape of You", artista: "Ed Sheeran", duracion: 233 },
  { titulo: "Blinding Lights", artista: "The Weeknd", duracion: 200 },
  { titulo: "Stairway to Heaven", artista: "Led Zeppelin", duracion: 482 },
  { titulo: "Billie Jean", artista: "Michael Jackson", duracion: 294 },
  { titulo: "Smells Like Teen Spirit", artista: "Nirvana", duracion: 301 },
  { titulo: "Sweet Child O' Mine", artista: "Guns N' Roses", duracion: 356 },
  { titulo: "Wonderwall", artista: "Oasis", duracion: 258 },
  { titulo: "November Rain", artista: "Guns N' Roses", duracion: 537 }
];

// Recorrer la lista e imprimir título y artista
playlist.forEach((cancion) => {
  console.log(`Título: ${cancion.titulo} | Artista: ${cancion.artista}`);
});

// Ejercicio 2.2: Filtrando canciones largas (duración mayor a 300 segundos / 5 minutos)
const cancionesLargas = playlist.filter((cancion) => cancion.duracion > 300);

console.log("\n--- Canciones de más de 5 minutos ---");
cancionesLargas.forEach((cancion) => {
  console.log(`Título: ${cancion.titulo} (${cancion.duracion} segundos)`);
});