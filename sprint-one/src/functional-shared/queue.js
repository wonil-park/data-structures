var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this[Object.keys(this).length] = value;
  },
  dequeue: function() {
    var dequeuedItem = this[3];
    var index = Object.keys(this).length;

    for (var i = 3; i < index - 1; i++) {
      this[i] = this[i+1];
    }
    delete this[index-1]
    return dequeuedItem;
  },
  size: function() {
    return Object.keys(this).length - 3;
  }
};


