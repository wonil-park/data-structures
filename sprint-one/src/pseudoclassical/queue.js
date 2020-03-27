var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this;
};

Queue.prototype.enqueue = function(value) {
  this[Object.keys(this).length] = value;
};

Queue.prototype.dequeue = function() {
  var index = Object.keys(this).length;
  if (index === 0) {}
  else {
    var dequeuedItem = this[0];
    for (var i = 0; i < index-1; i++) {
      this[i] = this[i+1];
    }
    delete this[index-1];
    return dequeuedItem;
  }
};

Queue.prototype.size = function() {
  return Object.keys(this).length;
};