// Let's create the basic functionality of a hash table. We've created a naive hashing function for you to use. You can pass a string value to the function hash and it will return a hashed value you can use as a key for storage. Store items based on this hashed value in the this.collection object. Create these three methods: add, remove, and lookup. The first should accept a key value pair to add to the hash table. The second should remove a key-value pair when passed a key. The third should accept a key and return the associated value or null if the key is not present.
//
//     Be sure to write your code to account for collisions!

// The HashTable data structure should exist.
//     The HashTable should have an add method.
//     The HashTable should have a remove method.
//     The HashTable should have a lookup method.
//     The add method should add key value pairs and the lookup method should return the values associated with a given key.
//     The remove method should accept a key as input and should remove the associated key value pair.
//     Items should be added using the hash function.
// The hash table should handle collisions.


var called = 0;
var hash = string => {
    called++;
    var hashed = 0;
    for (var i = 0; i < string.length; i++) {
        hashed += string.charCodeAt(i);
    }
    return hashed;
};
class HashTable {
    constructor() {
        this.collection = {};
    }

    print(){
        console.log(this.collection)
    }

    add(key, value) {
        let hashedKey = hash(key)
        if(!this.collection[hashedKey]){
            this.collection[hashedKey] = {}
        }
        this.collection[hashedKey][key] = value;
    }

    remove(key) {
        let hashedKey = hash(key)
        if(this.collection[hashedKey][key]){
            delete this.collection[hashedKey][key]
        }

        if(!Object.keys(this.collection[hashedKey]).length){
            delete this.collection[hashedKey]                    //if no keys exist in the hashed key object remove hashed key object.
        }
    }

    lookup(key) {
        let hashedKey = hash(key)
        return this.collection[hashedKey][key]
    }
}

const hashTable = new HashTable()

hashTable.add('krishna', 'hello')
hashTable.lookup('krishna')
hashTable.add('krishna', 'hello1')
hashTable.remove('krishna')
hashTable.print()
