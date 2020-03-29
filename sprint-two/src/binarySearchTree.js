var BinarySearchTree = function (value) {
  var node = {
    value : value,
    left : null,
    right : null
  }

  var bST = [node];
  return bST;
};

BinarySearchTree.prototype.insert = function (value) {
  var newNode = {
    value : value,
    left : null,
    right : null
  }

  if (this.length === 0) {
    this.push(newNode);
  }
  else {
    var middle = Number.floor(this.length / 2);
    if (newNode.value < this[middle].value) {
      this.left = newNode
      if (this.length === 1) {
        this.unshift(newNode);
      }
      else {
        this.splice(this.indexOf(this[middle]-1, 0, newNode));
      }
    }
    else {
      this.right = newNode;
      this.splice(this.indexOf(this[middle], 0, newNode));
    }
  }
  return newNode;
}

BinarySearchTree.prototype.contains = function (target) {
    // var length = this.left
    // var middle = Number.floor(length / 2);
    // //Compare with the headNode, then left/right until null
    // //Always halve the length (find the middle of what's remaining) and update the length variable
    // target < this[middle].value ? this.left : this.right
}

BinarySearchTree.prototype.depthFirstLog = function (cb) {

}
//left, right, insert(), contains(), depthFirstLog()
/*
 * Complexity: What is the time complexity of the above functions?
 */
