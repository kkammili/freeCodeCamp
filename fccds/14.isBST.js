var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;

    this.returnBST = function(){
        return this.root
    }

    this.add = function (value, node = this.root) {
        if(!this.root){
            this.root = new Node(value)
        }else{
            if(value > node.value && !node.left){
                node.left = new Node(value)
                return null
            }else if(value > node.value){
                this.add(value, node.left)
            }else if(value < node.value && !node.right){
                node.right = new Node(value)
                return null
            }
            else if(value < node.value){
                this.add(value, node.right)
            }else{
                return null
            }

        }
    }
}


function isBinarySearchTree(tree) {
    // change code below this line
    let isBST = true
    if(tree && tree.hasOwnProperty('value') && (tree.hasOwnProperty('left') || tree.hasOwnProperty('right'))){
       tree.left && isBinarySearchTree(tree.left)
       tree.right && isBinarySearchTree(tree.right)
    }else{
        isBST = false
    }
    return isBST
    // change code above this line
}


let bst = new BinarySearchTree()
bst.add(15)
bst.add(20)
bst.add(10)

console.log(isBinarySearchTree(bst.returnBST()))
