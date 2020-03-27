var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var index = Object.keys(storage).length;
    storage[index] = value;
  };

  someInstance.pop = function() {
    var index = Object.keys(storage).length - 1;
    var poppedItem = storage[index];
    delete storage[index];
    return poppedItem;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
