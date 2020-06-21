// Let's get some practice creating our own map. Because JavaScript objects provide a much more efficient map structure than anything we could write here, this is intended primarily as a learning exercise. However, JavaScript objects only provide us with certain operations. What if we wanted to define custom operations? Use the Map object provided here as a wrapper around a JavaScript object. Create the following methods and operations on the Map object:
//
// add accepts a key, value pair to add to the map.
//     remove accepts a key and removes the associated key, value pair
// get accepts a key and returns the stored value
// has accepts a key and returns true if the key exists or false if it doesn't.
// values returns an array of all the values in the map
// size returns the number of items in the map
// clear empties the map


class Map{
    constructor(){
        this.data = {}
    }

    add(key,value){
        if(!this.data[key]){
            this.data[key] = value
        }
    }

    remove(key){
        if(this.data[key]){
            delete this.data[key]
        }
    }

    has(key){
        return this.data[key]
    }

    values(){
        return Object.values(this.data)
    }

    size(){
        return Object.keys(this.data).length
    }

    clear(){
        this.data = {}
    }

    get(key){
        return this.data[key]
    }
}