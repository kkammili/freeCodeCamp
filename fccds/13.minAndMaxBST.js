//Find min and max in a Bst

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    // change code below this line
    this.add = function (value, node = this.root) {
        if(!this.root){
            this.root = new Node(value)
        }else{
            if(value > node.value && !node.left){
                node.left = new Node(value)
                return undefined
            }else if(value > node.value){
                this.add(value, node.left)
            }else if(value < node.value && !node.right){
                node.right = new Node(value)
                return undefined
            }
            else if(value < node.value){
                this.add(value, node.right)
            }else{
                return null
            }

        }
    }

    this.findMin = function(node = this.root){
        if(!this.root){
            return null
        }else{
            if(node && node.right !== null){
                return this.findMin(node.right)
            }
            else{
                return node.value
            }
        }
    }

    this.findMax = function(node = this.root){
        if(!this.root){
            return null
        }else{
            if(node.left){
               return this.findMax(node.left)
            }else{
                return node.value
            }
        }
    }

    // change code above this line
}

//not executed.
let bst = new BinarySearchTree()
bst.add(15)
bst.add(20)
bst.add(10)
bst.add(25)
bst.add(5)
bst.add(7)

console.log(bst.findMax())
console.log(bst.findMin())