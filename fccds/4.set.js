// In this exercise we are going to perform a union on two sets of data. We will create a method on our Set data structure called union. This method should take another Set as an argument and return the union of the two sets, excluding any duplicate values.
//
//     For example, if setA = ['a','b','c'] and setB = ['a','b','d','e'], then the union of setA and setB is: setA.union(setB) = ['a', 'b', 'c', 'd', 'e'].


//array implementation but prefer object implementation
// class Set{
//     constructor(){
//         this.data = []
//     }
//
//     values(){
//         return this.data
//     }
//
//     print(){
//         console.log(this.data)
//     }
//
//     add(setA){
//         for(let item of setA){
//             if(!this.data.includes(item)){
//                 this.data.push(item)
//             }
//         }
//     }
//
//     union(setB){
//         let result = []
//         let setBValues = setB.values()
//
//         this.values().forEach(item=> result.push(item))
//         setBValues.forEach(item=>{
//             if(!result.includes(item)){
//                 result.push(item)
//             }
//         })
//
//         return result
//     }
// }
//
// let setA = new Set()
//
// setA.add(["a", "b", "c"])
//
// let setB = new Set()
//
// setB.add(["c", "d"])
// setA.union(setB)
// setA.print()
// setB.print()
// console.log(setA.union(setB))

//their example

class Set {
    constructor() {
        this.dictionary = {};
        this.length = 0;
    }

    has(element) {
        return this.dictionary[element] !== undefined;
    }

    values() {
        return Object.keys(this.dictionary);
    }

    add(element) {
        if (!this.has(element)) {
            this.dictionary[element] = true;
            this.length++;
            return true;
        }

        return false;
    }

    remove(element) {
        if (this.has(element)) {
            delete this.dictionary[element];
            this.length--;
            return true;
        }

        return false;
    }

    size() {
        return this.length;
    }

    union(set) {
        const newSet = new Set();
        this.values().forEach(value => {
            newSet.add(value);
        })
        set.values().forEach(value => {
            newSet.add(value);
        })

        return newSet;
    }

    intersection(setB){
        const inSet = new Set()
        this.values().forEach(value =>{
            let setBvalues = setB.values()
            if(setBvalues.includes(value)){
                inSet.add(value)
            }
        })
        return inSet
    }

    difference(setB){
        const diffSet = new Set()

        this.values().forEach(value =>{
            let setBvalues = setB.values()
            if(!setBvalues.includes(value)){
                diffSet.add(value)
            }
        })
        return diffSet
    }

    isSubsetOf(setB){
        let subset = true
        this.values().forEach(item=>{
            if(!setB.values().includes(item)){
                subset = false
            }
        })
        return subset
    }

}

let setA = new Set()
setA.add('b')
setA.add('c')
setA.add('e')
let setB = new Set()
setB.add('a')
setB.add('b')
setB.add('f')

console.log(setA.union(setB))

console.log(setA.intersection(setB))
console.log(setA.difference(setB))

/* also check es5 set implementations on fcc*/
