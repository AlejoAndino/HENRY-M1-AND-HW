"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree (value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.insert = function(value) {

  if (this.value <= value) {
    // DERECHA
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }

  if (this.value > value) {
    // IZQUIERDA
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }

}

BinarySearchTree.prototype.contains = function(value) {

  if (this.value === value) {
    return true;
  } 

  if (this.value < value) {
    // DERECHA
    if (this.right === null) {
      return false;
    }
    if (this.right.value === value) {
      return true;
    } else {
      return this.right.contains(value);
    }
  } 

  if (this.value > value) {
    // IZQUIERDA
    if (this.left === null) {
      return false;
    } else
    if (this.left.value === value) {
      return true;
    } else {
      return this.left.contains(value);
    }
  }

}

BinarySearchTree.prototype.depthFirstForEach = function() {



}

BinarySearchTree.prototype.size = function() {

  if (this.right === null && this.left === null) return 1;

  if (this.right === null && this.left !== null) return 1 + this.left.size();

  if (this.right !== null && this.left === null) return 1 + this.right.size();

  if (this.right !== null && this.left !== null) return 1 + this.right.size() + this.left.size();

}

BinarySearchTree.prototype.breadthFirstForEach = function() {



}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
