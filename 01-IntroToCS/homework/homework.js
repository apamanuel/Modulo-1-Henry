'use strict';

function BinarioADecimal(num) {
   var array = num.split('').reverse();
   var suma = 0;
   for (var i = 0; i < array.length; i++){
      suma = suma + (array[i] * Math.pow(2,i));
   };
   return suma;
}

function DecimalABinario(num) {
   var array =[];
   var div = num;
   for (var i = 0; div > 0; i++){
      array[i] = div % 2;
      div = Math.floor(div / 2);
   };
   return array.reverse().join('');   
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
