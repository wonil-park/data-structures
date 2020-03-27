class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this;
  }

  enqueue(value) {
    this[Object.keys(this).length] = value;
  }

  dequeue() {
    var index = Object.keys(this).length;
    if (index === 0) {

    }
    else {
      var dequeuedItem = this[0];
      for (var i = 0; i < index-1; i++) {
        this[i] = this[i+1];
      }
      delete this[index-1];
      return dequeuedItem;
    }
  }

  size() {
    return Object.keys(this).length;
  }
}
