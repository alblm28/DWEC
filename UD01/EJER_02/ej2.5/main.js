// Importaciones nombradas (con alias en crearPerfil) y la exportación por defecto
import mostrarPerfil, { 
  crearPerfil as nuevoPerfil, 
  obtenerMayoresDeEdad, 
  calcularPromedioEdad 
} from './gestorUsuarios.js';

// Array inicial con 5 usuarios de distintas edades
const usuarios = [
  nuevoPerfil("Ana López", "ana@email.com", 22),
  nuevoPerfil("Carlos Gómez", "carlos@email.com", 15),
  nuevoPerfil("María Rodríguez", "maria@email.com", 30),
  nuevoPerfil("David Pérez", "david@email.com", 17),
  nuevoPerfil("Elena Torres", "elena@email.com", 25)
];

// 1. Filtrar y mostrar usuarios mayores de edad
const mayoresDeEdad = obtenerMayoresDeEdad(usuarios);

console.log("Usuarios mayores de edad:");
mayoresDeEdad.forEach((usuario) => {
  console.log(mostrarPerfil(usuario));
});

// 2. Calcular y mostrar la edad promedio
const promedio = calcularPromedioEdad(usuarios);
console.log(`La edad promedio de los usuarios es: ${promedio}`);