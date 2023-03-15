'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
};

BinarySearchTree.prototype.size = function(){
   let acumulador = 1;
   if(!this.value) return 0;
   else {
      if(this.left) acumulador += this.left.size();
      if(this.right) acumulador += this.right.size();
   }
   return acumulador
};

BinarySearchTree.prototype.insert = function(value){
   if (value > this.value) {
      if (this.right !== null) {
         this.right.insert(value)
      } else { this.right = new BinarySearchTree(value); }
   }
   if (value < this.value) {
      if (this.left !== null) {
         this.left.insert(value)
      } else { this.left = new BinarySearchTree(value); }
   }
};

BinarySearchTree.prototype.contains = function(value){
   // si el value es igual a la raiz
   if(this.value === value) return true;
   else{
      if(this.left && this.left.contains(value)) return true;
      if(this.right && this.right.contains(value)) return true;
   };
   return false;
};

BinarySearchTree.prototype.depthFirstForEach = function(cb,order){
   if (order === 'pre-order') {
      // 'pre-order' => root - izq - der
      cb(this.value)
      if (this.left !== null) this.left.depthFirstForEach(cb, order)
      if (this.right !== null) this.right.depthFirstForEach(cb, order)
   } else if (order === 'post-order') {
      // 'post-order' => izq - der - root
      if (this.left !== null) this.left.depthFirstForEach(cb, order)
      if (this.right !== null) this.right.depthFirstForEach(cb, order)
      cb(this.value)
   } else {
      // 'in-order' => izq - root - der   (ÚLTIMO CASO)
      if (this.left !== null) this.left.depthFirstForEach(cb, order)
      cb(this.value)
      if (this.right !== null) this.right.depthFirstForEach(cb, order)
   };
};

BinarySearchTree.prototype.breadthFirstForEach = function(cb,array = []){
   // PRIMERO IZQUIERDA, DERECHA Y NIVEL POR NIVEL
   if (this.left !== null) {
      array.push(this.left)
   }
   if (this.right !== null) {
      array.push(this.right)
   }
   cb(this.value);
   if (array.length > 0) {
      array.shift().breadthFirstForEach(cb, array)
   }
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
