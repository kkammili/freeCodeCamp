class Node {
    constructor(element){
        this.element = element
        this.next = null
    }
}

const Kitten = new Node('Kitten');
const Puppy = new Node('Puppy');
const Cat = new Node('cat')
const Dog = new Node('dog')

Kitten.next = Puppy
Puppy.next = Cat
Cat.next = Dog

console.log(Kitten)