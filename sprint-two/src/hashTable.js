

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  //check if there's a bucket existing
  if (bucket === undefined) {
    var newBucket = {};
    newBucket[k] = v;
    this._storage.set(index, newBucket);
  }
  //if there's a bucket, ckeck keys
  else {
    if (bucket.hasOwnProperty(k)) {
      bucket[k] = v;
    }
    bucket[k] = v;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  //compare key to keys in the bucket
  return bucket[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket.hasOwnProperty(k)) {
    delete bucket[k];
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


