// Array inicial de la lista de reproducción
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

// 1. .filter() para obtener canciones con duración mayor a 180 segundos
const cancionesLargas = playlist.filter((cancion) => cancion.duracion > 180);

// 2. .map() para transformar los objetos filtrados en un array de cadenas de texto
const mensajesCanciones = cancionesLargas.map((cancion) => {
  return `La canción '${cancion.titulo}' de ${cancion.artista} dura${cancion.duracion} segundos.`;
});

// 3. Imprimir el array resultante en consola
console.log(mensajesCanciones);