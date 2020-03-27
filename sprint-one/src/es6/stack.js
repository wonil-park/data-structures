class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this;
  }

  push(value) {
    this[Object.keys(this).length] = value;
  }

  pop() {
    var index = Object.keys(this).length;
    if (index === 0) {
    }
    else {
      var poppedItem = this[index-1];
      delete this[index-1];
      return poppedItem;
    }
  }

  size() {
    return Object.keys(this).length;
  }
}