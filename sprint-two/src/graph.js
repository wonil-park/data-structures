

// Instantiate a new graph
var Graph = function() {
  var newGraph = Object.create(Graph.prototype);
  newGraph.storage = {};

  return newGraph;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.storage) {
    if (key === node.toString()) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.storage[node].length; i++) {
    var target = this.storage[node][i];
    var index = this.storage[target].indexOf(node);
    this.storage[target].splice(index, 1);
  }

  for (var key in this.storage) {
    if (key === node.toString()) {
      delete this.storage[key];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.storage[fromNode].indexOf(toNode) !== -1) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var targetIndexAtFromNode = this.storage[fromNode].indexOf(toNode);
  var targetIndexAtToNode = this.storage[toNode].indexOf(fromNode);

  this.storage[fromNode].splice(targetIndexAtFromNode, 1);
  this.storage[toNode].splice(targetIndexAtToNode, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


