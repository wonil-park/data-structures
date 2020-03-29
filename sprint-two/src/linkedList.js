var LinkedList = function() {
  var list = {};
  list.head = {
    value: null,
    next: null
  };

  list.tail = {
    value: null,
    next: null
  };

  list.addToTail = function(value) {

    var newNode = Node(value);
    //point old tail to new tail
    var currentNode = this.tail;
    this.tail = newNode;
    currentNode.next = newNode;

    if (this.head.value === null) {
      this.head = newNode;
    }
  };

  list.removeHead = function() {
    //check if there's something to delete
    //save and remove the element at head
    if (this.head.value !== null) {
      var headValue = this.head.value;
      this.head = this.head.next;

      return headValue;
    }
    //send error msg if nothing to remove
  };

  list.contains = function(target) {
    var pointer = this.head;

    while(pointer !== null) {
      if(pointer.value === target) {
        return true;
      }
      pointer = pointer.next;
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *            Linear
 */
