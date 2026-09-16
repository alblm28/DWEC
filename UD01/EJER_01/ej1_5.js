
let estudiantes= [{
    nombre:"Alba",
    apellido: "Llano",
    calificacion: 10,
    aprobado:true

}, {
    nombre:"Mónica",
    apellido: "P",
    calificacion: 10,
    aprobado:true

}, {
    nombre:"Steve",
    apellido: "M",
    calificacion: 4,
    aprobado:true

}]

let estudiantesId = estudiantes.map((estudiante, index)=>({...estudiante, id: index+1}))

//index empieza en 0, +1
console.table(estudiantesId)

let estudiantesAprobados = estudiantes.filter(estudiante=>estudiante.calificacion>=5)
console.table(estudiantesAprobados)

estudiantesAprobados.forEach(estudiante=>{console.log(`Felicidades ${estudiante.nombre}, has aprobado con un ${estudiante.calificacion}`)})
