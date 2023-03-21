'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let divisor = 2;
  let array = [];
  while (num !== 1){
    while(num % divisor === 0){
      num = num / divisor; 
      array.push(divisor);     
    };
    divisor++;
  };
  array.unshift(1);
  return array;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let arrayCopy = array.slice();
  let swap = true;
  let aux;
  while(swap === true){
    swap = false;
    for (let j = 0; j < array.length-1; j++){
      if (arrayCopy[j] > arrayCopy[j+1]){
        aux = arrayCopy[j];
        arrayCopy[j] = arrayCopy[j+1];
        arrayCopy[j+1] = aux;
        swap = true;
      };
    };
  };
  return arrayCopy;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let newArray = array;
  let muestra;
  let comparador;
  for (let i = 0; i < array.length-1; i++){
    for(let j = i + 1; j > 0; j--){
      muestra = array[j];
      comparador = array[j-1];
      if(muestra < comparador){
        newArray[j-1] = muestra;
        newArray[j] = comparador;
      };      
    };    
  };
  return newArray;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let arrayNew = []; //es la matriz resultante
  let arrayCopy = array.slice(); //esta es la matriz que voy a ir modificando
  let index; // este va a ser el indice que necesitare para ir eliminando minimo de la matriz arrayCopy
  let minimo; // es el valor minimo de la busqueda
  for (let i = 0; i < array.length; i++){
    minimo = arrayCopy[0];
    index = 0;
    for(let j = 0; j < arrayCopy.length; j++){
      if(minimo > arrayCopy[j]){
        minimo = arrayCopy[j];
        index = j;
      };
    };
    arrayNew.push(minimo);
    arrayCopy.splice(index,1);    
  };
  return arrayNew;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
