// push adds an element on the right
// shift adds and element on the left
// pop deletes an element on the right
// unshift deletes and element on the left
// includes method checks whether and item exist in array or not
// slice return sub array original array remains same
// splice modifies original array deletes and adds to a array at required position

// hasOwnProperity method check whether an item exists in given object
// delete objname[key] deletes specified item in an object
// modification of an object is straight forward.

var array=[1,2,3,4,5];
console.log(array.splice(2));
// shows [3, 4, 5], returned removed item(s) as a new array object.

console.log(array);
// shows [1, 2], original array altered.

var array2=[6,7,8,9,0];
console.log(array2.splice(2,1));
// shows [8]

console.log(array2.splice(2,0));
//shows [] , as no item(s) removed.

console.log(array2);
// shows [6,7,9,0]

var array3=[11,12,13,14,15];
console.log(array3.splice(2,1,"Hello","World"));
// shows [13]

console.log(array3);
// shows [11, 12, "Hello", "World", 14, 15]

         // -5 -4 -3 -2 -1
         // |  |  |  |  |
var array4=[16,17,18,19,20];
         // |  |  |  |  |
         // 0  1  2  3  4

console.log(array4.splice(-2,1,"me"));
// shows  [19]

console.log(array4);
// shows [16, 17, 18, "me", 20]