const nombre = "Alba"
let edad = 20
const tieneMascota = true //booleanos minus
edad=21
//tieneMascota= false
console.log(typeof nombre, nombre)
console.log(typeof edad, edad)
console.log(typeof tieneMascota, tieneMascota)


let tener = tieneMascota? "tiene": "no tiene" //op ternario
let frase = `${nombre} tiene ${edad} años y ${tener} mascota`
console.log(frase)