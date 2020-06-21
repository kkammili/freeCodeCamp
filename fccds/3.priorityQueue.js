//     Your PriorityQueue class should have a enqueue method.
//     Your PriorityQueue class should have a dequeue method.
//     Your PriorityQueue class should have a size method.
//     Your PriorityQueue class should have an isEmpty method.
//     Your PriorityQueue class should correctly keep track of the current number of items using the size method as items are enqueued and dequeued.
//     The isEmpty method should return true when the queue is empty.
//     The priority queue should return items with a higher priority before items with a lower priority and return items in first-in-first-out order otherwise.


class PriorityQueue {
    //this is an unsorted PriorityQueue
    //O(1) to insert elements
    //O(n) to pop elements because it searches for the priority
    //O(1) to see if it is empty because it just looks at the value of length
    //create a constructor with default parameters

    constructor() {
        this.collection = [];
    }

    printCollection() {
        console.log(this.collection);
    }

    enqueue(element) {
        return this.collection.push(element)
    }

    //this is a helper function to tell us what value is next to be popped
    findPriority() {

        var values = this.collection.map(function(keys) {
            return keys[1];
        });
        var thePriority = Math.min.apply(null, values)
        return this.collection.find(element => element[1] == thePriority)

    }

    dequeue() {
        //set the item to be removed to the first priority found
        let removeItem = this.findPriority()
        //get the position of where it was so it can be spliced off
        let removePosition = this.collection.indexOf(removeItem);
        this.collection.splice(removePosition, 1)
        //return only the item exclued the level of priority
        return removeItem[0]

    }
    // get the size by just return the length O(1) time
    size() {
        return this.collection.length
    }

    // returns if the queue is empty
    isEmpty() {
        return this.size() === 0;
    }
}

let queue = new PriorityQueue()
queue.enqueue(['krishna',1])
queue.enqueue(['siva',2])
queue.enqueue(['rama',2])
queue.enqueue(['raju',3])
queue.enqueue(['honey',2])
queue.enqueue(['wow',2])
queue.enqueue(['lovedit',1])
queue.enqueue(['there',3])

console.log(queue.dequeue())
queue.printCollection()


//Not working solution