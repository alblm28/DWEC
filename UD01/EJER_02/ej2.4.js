// 1. Objeto usuario
const usuario = {
  nombre: "Carlos Ruiz",
  email: "carlos.ruiz@email.com"
};

// 2. Objeto perfil
const perfil = {
  puesto: "Desarrollador Frontend",
  empresa: "Tech Solutions"
};

// 3. Combinar objetos usando el Spread Operator (...)
const empleado = {
  ...usuario,
  ...perfil
};

console.log("Objeto empleado combinado:", empleado);

// 4 y 5. Acceso seguro con Optional Chaining (?.) y valor por defecto con Nullish Coalescing (??)
const ciudad = empleado.perfil?.direccion?.ciudad ?? "Ciudad no especificada";

console.log(`Ciudad del empleado: ${ciudad}`); 
// Resultado: "Ciudad del empleado: Ciudad no especificada"