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
    this.index = 0
    this.print= function(){
        console.log('length:', this.length, 'head:', this.head)
    }

    this.add= function(element){
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

    this.reverse = function(currNode = this.head){
        if(!this.head) return null
        this.index++
        let temp = currNode.next || null
        currNode.next = currNode.prev || null
        currNode.prev = temp

        if(this.index === 1){
            this.tail = currNode
        }

        // currNode = currNode.next
        if(temp){
            return this.reverse(temp)
        }else{
            this.head = currNode
            return this.head
        }
    }


    // change code above this line
};

const dl = new DoublyLinkedList()
dl.add(1)
dl.add(2)
// dl.add(3)
console.log(dl.reverse())

