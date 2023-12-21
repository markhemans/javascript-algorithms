// HashTable constructor function
function HashTable() {
	this.table = {};
  }
  
  // Hash function
  HashTable.prototype.hash = function(key) {
	let hash = 0;
	for (let i = 0; i < key.length; i++) {
	  hash += key.charCodeAt(i);
	}
	return hash % 37; // Modulo to limit the hash to a reasonable range
  };
  
  // Insert key-value pair into the hash table
  HashTable.prototype.insert = function(key, value) {
	const index = this.hash(key);
	this.table[index] = value;
  };
  
  // Retrieve value from the hash table
  HashTable.prototype.get = function(key) {
	const index = this.hash(key);
	return this.table[index];
  };
  
  // Example usage
  const myHashTable = new HashTable();
  myHashTable.insert("name", "John");
  myHashTable.insert("age", 25);
  
  console.log(myHashTable.get("name")); // Output: John
  console.log(myHashTable.get("age"));  // Output: 25