var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this;
};

Stack.prototype.push = function(value) {
  this[Object.keys(this).length] = value;
};

Stack.prototype.pop = function() {
  var index = Object.keys(this).length;
  if (index === 0) {}
  else {
  var poppedItem = this[index-1];
  delete this[index-1];
  return poppedItem;
  }
};

Stack.prototype.size = function() {
  return Object.keys(this).length;
};

