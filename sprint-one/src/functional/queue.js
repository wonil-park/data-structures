var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var index = Object.keys(storage).length;
    storage[index] = value;
  };

  someInstance.dequeue = function() {
    var dequeuedItem = storage[0];
    var index = Object.keys(storage).length;
    //rearrange elements
    for (var i = 0; i < index - 1; i++) {
      storage[i] = storage[i+1];
    }
    delete storage[index-1]
    return dequeuedItem;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;;
  };

  return someInstance;
};
