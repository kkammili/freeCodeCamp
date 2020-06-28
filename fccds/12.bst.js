//Adding elements to BST

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    // change code below this line

    this.print = function () {
        console.log(this.root, '<---- check the root')
    }

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

    // change code above this line
}


let bst = new BinarySearchTree()
bst.add(15)
bst.add(20)
bst.add(10)
bst.add(25)
bst.add(5)
bst.add(7)
bst.print()