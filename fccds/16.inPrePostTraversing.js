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

    this.inOrder=function() {
        let visited = [],
            current = this.root;

        let traverse = node => {
            if (node.left) traverse(node.left);
            visited.push(node.value);
            if (node.right) traverse(node.right);
        };
        if(current){
            traverse(current);
        }
        return current? visited:null;
    }

    this.preOrder=function() {
        let visited = [],
            current = this.root;

        let traverse = node => {
            visited.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        };
        if(current){
            traverse(current);
        }
        return current? visited:null;
    }

    this.postOrder=function() {
        let visited = [],
            current = this.root;

        let traverse = node => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            visited.push(node.value);
        };
        if(current){
            traverse(current);
        }
        return current? visited:null;
    }
    // change code above this line
}

let bst = new BinarySearchTree()
bst.add(25)
bst.add(20)
bst.add(36)
bst.add(10)
bst.add(22)
bst.add(30)
bst.add(40)
bst.add(5)
bst.add(12)
bst.add(28)
bst.add(38)
bst.add(48)
console.log(bst.inOrder())
console.log(bst.preOrder())
console.log(bst.postOrder())
