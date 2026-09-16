let coche= {
    marca: 'seat',
    modelo:  'leon',
    ano: "1999",
    estaDisponible: false,
}
console.table(coche)
const {marca, modelo} = coche
console.log(marca)
console.log(modelo)
/*desestructuracion crea var local y no cambia 
el obj real
*/
coche.estaDisponible= true
console.log(coche.estaDisponible)

coche.color="azul"
console.log(coche.color)

delete coche.ano

console.table(coche)