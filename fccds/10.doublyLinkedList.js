var Node = function(data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
};
var DoublyLinkedList = function() {
    this.head = null;
    this.tail = null;
    // change code below this line
    this.length = 0
    this.add = function(element){
        let newNode = new Node(element)
        this.length++

        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            // newNode.prev = this.tail
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode

        }
        return newNode
    }

    this.remove = function(data){
        if(!this.length){
            return null
        } else if(data === this.head.data) {
            this.head = this.head.next;
            this.head.prev = null;
        } else if(data === this.tail.data) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }else{
            let itemFound = false, prevNode = null, currNode = this.head

            while(currNode.next && !itemFound){
                if(data === currNode.data){
                    let nextNode = currNode.next
                    let prevAlign = prevNode.prev
                    nextNode.prev = prevAlign
                    prevAlign.next = nextNode
                    itemFound = true
                    break
                }else{
                    currNode = currNode.next
                    prevNode = currNode
                }
            }

        }
    }
    // change code above this line
};



const dll = new DoublyLinkedList()
dll.add(1)
dll.add(2)
dll.add(3)
dll.add(4)
dll.remove(3)
dll.print()