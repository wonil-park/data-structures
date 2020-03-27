var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this[Object.keys(this).length] = value;
  },
  dequeue: function() {
    var index = Object.keys(this).length - 1;
    var dequeuedItem = this[0];
    for (var i = 0; i < index; i++) {
      this[i] = this[i+1];
    }
    delete this[index];
    return dequeuedItem;
  },
  size: function() {
    return Object.keys(this).length;
  }
};


