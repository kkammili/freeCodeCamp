const name = 'krishnam';

const sObj = {
  name: 'danush',
  obj: {
    name: 'shyam',
    getName() {
      return this.name;
    },
  },
};

console.log(sObj.obj.getName());
// q1: what would be the output of sObj.obj.getName()?

const check = sObj.obj.getName;
console.log(check());
// q2 what would be the output when we call check
// ans varies between undefined and krishnam.

// How can we make getName to return danush without changing the getName function.
console.log(sObj.obj.getName.bind(sObj)()); // if we use bind it just keeps the reference with this binded we  need to call it explicitly

console.log(sObj.obj.getName.call(sObj));
console.log(sObj.obj.getName.call(sObj));
// function.call(thisArg, lang1, lang2)
// function.apply(thisArg, [lang1, lang2]) diff is just array as second arg which is of no use.
// https://blog.bitsrc.io/understanding-call-bind-and-apply-methods-in-javascript-33dbf3217be
