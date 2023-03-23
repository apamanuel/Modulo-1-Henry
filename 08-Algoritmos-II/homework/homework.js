'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let izquierda = [];
  let derecha = [];
  let pivote = array[0];
  if(array.length > 1){
    for (let i = 1; i < array.length; i++){
      if (pivote > array [i]){
        izquierda.push(array[i]);
      };
      if (pivote <= array[i]){
        derecha.push(array[i]);
      };
    };
    let sortIzquierda= quickSort(izquierda);
    let sortDerecha = quickSort(derecha);
    return sortIzquierda.concat(pivote, sortDerecha);
  } else return array; 
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora
  if (array.length <= 1) return array;
  let aux = Math.round(array.length / 2);
  let subIzquierda = array.slice(0,aux);
  let subDerecha = array.slice(aux);
  let newArray = [];  
  let izquierda = mergeSort(subIzquierda);
  let derecha = mergeSort(subDerecha);
  while (izquierda.length && derecha.length){
    if(izquierda[0] <= derecha[0]){
      newArray.push(izquierda[0]);
      izquierda.shift();
    } else {
      newArray.push(derecha[0]);
      derecha.shift();
    }
  };
  return newArray.concat(izquierda.concat(derecha));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
