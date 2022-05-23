'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

  let sumatoria = 0;
  let numero = num.toString();
  let posicion = numero.length - 1;
  
  for (let i = 0; i < numero.length; i++) {
    if (posicion === -1) {
      break;
    }
    sumatoria += numero[i] * 2 ** posicion;
    posicion--;
  }
  return sumatoria;
}

function DecimalABinario(num) {
  // tu codigo aca

  let binario = [];
  
  while (num !== 0) {
    let division = Math.floor(num / 2);
    let resto = num % 2;
    num = division;
    binario.push(resto); 
  }
  return binario.reverse().join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}