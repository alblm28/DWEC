// 1. Creación del array de cursos
const cursos = [
  {
    nombre: "JavaScript Básicos",
    profesor: "Carlos Martínez",
    estudiantes: [
      { nombre: "Ana", calificacion: 8.5 },
      { nombre: "Pedro", calificacion: 3.5 },
      { nombre: "Lucía", calificacion: 9.0 }
    ]
  },
  {
    nombre: "Desarrollo Web HTML/CSS",
    profesor: "Laura Gómez",
    estudiantes: [
      { nombre: "Juan", calificacion: 6.0 },
      { nombre: "María", calificacion: 7.5 },
      { nombre: "Diego", calificacion: 5.0 }
    ]
  },
  {
    nombre: "Bases de Datos SQL",
    profesor: "Roberto Sánchez",
    estudiantes: [
      { nombre: "Sofía", calificacion: 9.5 },
      { nombre: "Javier", calificacion: 8.0 },
      { nombre: "Elena", calificacion: 7.0 }
    ]
  },
  {
    nombre: "Python para Principiantes",
    profesor: "Marta Fernández",
    estudiantes: [
      { nombre: "Gabriel", calificacion: 2.0 },
      { nombre: "Carmen", calificacion: 5.5 },
      { nombre: "Luis", calificacion: 3.0 }
    ]
  }
];

// 2. Uso de .map() para transformar la estructura de los datos
const resumenCursos = cursos.map((curso) => {
  // Sumamos las calificaciones del array anidado de estudiantes
  const sumaCalificaciones = curso.estudiantes.reduce((acumulador, estudiante) => {
    return acumulador + estudiante.calificacion;
  }, 0);

  // Calculamos el promedio
  const promedio = sumaCalificaciones / curso.estudiantes.length;

  // Devolvemos el nuevo objeto transformado
  return {
    nombreCurso: curso.nombre,
    promedioCalificaciones: Number(promedio.toFixed(2)) // Redondeamos a 2 decimales
  };
});

// 3. Uso de .filter() para seleccionar según condición
const cursosDestacados = resumenCursos.filter((curso) => {
  return curso.promedioCalificaciones >= 7;
});

// 4. Recorrer e imprimir los cursos destacados
cursosDestacados.forEach((curso) => {
  console.log(`📘 El curso ${curso.nombreCurso} tiene un promedio de ${curso.promedioCalificaciones} y es considerado destacado.`);
});

// 5. Verificar si hay estudiantes con calificación menor a 4
cursos.forEach((curso) => {
  // .some() devuelve true si AL MENOS UN elemento cumple la condición
  const tieneBajasCalificaciones = curso.estudiantes.some((estudiante) => {
    return estudiante.calificacion < 4;
  });

  if (tieneBajasCalificaciones) {
    console.log(`⚠️ Atención: En el curso ${curso.nombre} hay estudiantes con calificaciones muy bajas.`);
  }
});