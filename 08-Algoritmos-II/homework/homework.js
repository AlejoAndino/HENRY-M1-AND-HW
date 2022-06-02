'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <= 1) {
    return array;
  }

  let pivot = array[Math.floor(Math.random() * array.length)];
  let left = [];
  let right = [];
  let equal = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else
    if (array[i] > pivot) {
      right.push(array[i]);
    }
    else {
      equal.push(array[i]);
    }
  }
 
  return quickSort(left).concat(equal).concat(quickSort(right));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length === 1) {
    return array;
  }

  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge (left, right) {
  let leftIndex = 0;
  let rightIndex = 0;
  let ordenado = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      ordenado.push(left[leftIndex]);
      leftIndex++;
    } else
    if (left[leftIndex] >= right[rightIndex]) {
      ordenado.push(right[rightIndex]);
      rightIndex++;
    }
  }
  if (leftIndex === left.length) {
    return ordenado.concat(right.slice(rightIndex));
  } else {
    return ordenado.concat(left.slice(leftIndex));
  }
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
