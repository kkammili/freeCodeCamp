// Your Queue class should have a enqueue method.
//     Your Queue class should have a dequeue method.
//     Your Queue class should have a front method.
//     Your Queue class should have a size method.
//     Your Queue class should have an isEmpty method.
//     The dequeue method should remove and return the front element of the queue
// The front method should return value of the front element of the queue
// The size method should return the length of the queue
// The isEmpty method should return false if there are elements in the queue


class Queue {
    constructor(){
        this.data = []
    }

    print(){
        console.log(this.data)
    }

    enqueue(item){
        this.data.unshift(item)
    }

    dequeue(){
        return this.data.pop()
    }

    size(){
        return this.data.length
    }

    front(){
        return this.data[this.data.length - 1]
    }

    isEmpty(){
        return this.data.length === 0
    }
}


const queue = new Queue()

queue.enqueue('krishna')
queue.enqueue('siva')
console.log(queue.dequeue())
// queue.size()
// queue.front()
// queue.isEmpty()
queue.print()