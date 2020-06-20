// Your Stack class should have a push method.
//     Your Stack class should have a pop method.
//     Your Stack class should have a peek method.
//     Your Stack class should have a isEmpty method.
//     Your Stack class should have a clear method.
//     The peek method should return the top element of the stack
// The pop method should remove and return the top element of the stack
// The isEmpty method should return true if a stack does not contain any elements
// The clear method should remove all element from the stack

// function Stack() {
//     var collection = [];
//     this.print = function() {
//         console.log(collection);
//     };
//     // Only change code below this line
//
//     this.push = function(item){
//         collection.push(item)
//     }
//
//     this.pop = function(){
//        return collection.pop()
//     }
//
//     this.peek = function(){
//         return collection[collection.length - 1]
//     }
//
//     this.isEmpty = function(){
//         return collection.length === 0
//     }
//
//     this.clear = function(){
//         collection = []
//     }
//
//     // Only change code above this line
// }

class Stack {
    constructor(){
        this.data = [];
    }

    print(){
        console.log(this.data)
    }


    push(item){
        this.data.push(item)
    }

    pop(){
       return this.data.pop()
    }

    peek(){
        return this.data[this.data.length - 1]
    }

    isEmpty(){
        return this.data.length === 0
    }

    clear(){
        this.data = []
    }
}


let stack = new Stack()
stack.push('hello')
stack.push('my')
stack.push('love')
stack.pop()
stack.peek()

stack.print()