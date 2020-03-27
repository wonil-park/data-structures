var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  var storage = {};

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
  push : function (value) {
    this[Object.keys(this).length] = value;
  },
  pop : function () {
    var index = Object.keys(this).length - 1;
    var poppedItem = this[index];
    delete this[index];
    return poppedItem;
  },
  size : function() {
    return Object.keys(this).length - 3;
  }
};


