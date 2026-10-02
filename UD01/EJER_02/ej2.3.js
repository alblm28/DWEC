// Función para procesar la transacción
function procesarRetiro(saldo, cantidadARetirado, tieneTarjetaCredito = false) {
  // Comprobación inicial: ¿el saldo cubre el retiro?
  if (saldo >= cantidadARetirado) {
    const saldoRestante = saldo - cantidadARetirado;
    console.log(`Retiro exitoso. Saldo restante: ${saldoRestante}`);
  } 
  // Si no cubre, se evalúa si cuenta con tarjeta de crédito
  else if (tieneTarjetaCredito) {
    console.log("Saldo insuficiente, pagando con tarjeta de crédito.");
  } 
  // Si no cubre el saldo ni tiene tarjeta
  else {
    console.log("Saldo insuficiente.");
  }
}

// --- Pruebas de funcionamiento ---

// Caso 1: Saldo suficiente
procesarRetiro(500, 200, false); 
// Resultado: Retiro exitoso. Saldo restante: 300

// Caso 2: Saldo insuficiente pero tiene tarjeta de crédito
procesarRetiro(100, 300, true); 
// Resultado: Saldo insuficiente, pagando con tarjeta de crédito.

// Caso 3: Saldo insuficiente y no tiene tarjeta de crédito
procesarRetiro(100, 300, false); 
// Resultado: Saldo insuficiente.