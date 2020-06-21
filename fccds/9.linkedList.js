class Node {
    constructor(element){
        this.element = element
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    print(){
        console.log(JSON.stringify(this.head,null,2), 'll length ====>',this.length)
    }

    isEmpty(){
        return this.head !== null
    }

    add(element){
        let newElemNode = new Node(element)
        if(!this.head){
            this.head = newElemNode
        }else{
            let currNode = this.head
            while(currNode.next){
                currNode = currNode.next
            }
            currNode.next = newElemNode
        }

        this.length++
    }

    remove(element){
        if(this.head && this.head.element === element){
            this.head = this.head.next
        }else{
            let prevNode = null
            let currNode = this.head

            while(currNode.next){
                if(currNode.element === element){
                    prevNode.next = currNode.next
                    break;
                }else{
                    prevNode = currNode
                    currNode = currNode.next
                }
            }
        }
        this.length--
    }

    removeAt(indexToDel){
        let prevNode = null, currNode = this.head, indexFound = false, index = -1

        if(indexToDel === 0){
            let element = this.head.element
            this.head = this.head.next
            this.length--
            return element
        }else{
            while(!indexFound && currNode){
                index++
                if(index === indexToDel){
                    this.length--
                    indexFound = true
                    prevNode.next = currNode.next
                }else{
                    prevNode = currNode
                    currNode = currNode.next
                }
            }
            return indexFound? currNode.element:null
        }
    }

    addAt(indexToAdd, element){
        let prevNode = null,currIndex = -1, currNode = this.head, indexAdded=false

        if(indexToAdd === 0){
            let newHead = new Node(element)
            newHead.next = currNode
            this.head = newHead
            indexAdded = true
            this.length++
        }else{
            while(!indexAdded && currNode){
                currIndex++
                if(indexToAdd === currIndex){
                    indexAdded = true
                    this.length++
                    let newNode = new Node(element)
                    prevNode.next = newNode
                    newNode.next = currNode

                }else{
                    prevNode = currNode
                    currNode = currNode.next
                }
            }
        }
        return indexAdded
    }

    indexOf(element){
      let index = -1
        let indexFound = false
        let currNode = this.head
        while(!indexFound && currNode){
          index++
          if(currNode.element === element){
              indexFound = true
          }
              currNode = currNode.next

        }

        return indexFound?index:-1
    }

    elementAt(wantedIndex){
        let index = -1, currNode = this.head,stop=false;
        while(!stop && wantedIndex <= this.length){
            index++
            if(index === wantedIndex){
                stop = true
                // return currNode.element
            }else{
                currNode = currNode.next
            }
        }

        return stop?currNode.element:undefined

    }
}


const ll = new LinkedList()
ll.add('hi')
ll.add('hello')
// ll.add('how')
// ll.remove('hello')
// ll.isEmpty()
// console.log(ll.elementAt(0))
// console.log(ll.removeAt(0))
// console.log(ll.addAt(0, 'krishna'))

ll.print()


