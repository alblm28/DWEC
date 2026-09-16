let ciudades = ["Madrid", "Buenos Aires", " Tokio", "Nueva York", "Paris"]

ciudades.push("Roma")

//map crea nuevo array a aprtir de otro aplicando funcion
//arrow funct para dar nombre temporal a elementos
let ciudadesMayusculas = ciudades.map(ciudad=>ciudad.toUpperCase())

console.table(ciudadesMayusculas)

//filter recorre array evaluando condición
//comparacion > devuelve bool
let ciudadesFiltradas = ciudades.filter(ciudad=>ciudad.length<=6)
console.table(ciudadesFiltradas)

console.table(ciudades)
