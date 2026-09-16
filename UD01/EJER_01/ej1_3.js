let producto = {
    nombre: "pc",
    precio: 1500,
}
let cliente = {
    nombreCliente: "Alba",
    esPremium: true,
}

let pedido = { //spread operator ...
    ...cliente,
    ...producto
}

console.table(pedido)

let cliente2 = {
    nombre:"Joe"
}
 pedido2={
    ...producto,
    ...cliente2
}
//al repetir nombre de prop, solo se queda con la última
console.table(pedido2)