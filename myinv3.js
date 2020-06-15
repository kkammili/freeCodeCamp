// write a triplet function to:
const calc = function (arg) {
  return function (a, b) {
    return function (c, d) {
      if (arg === 'add') {
        return a + b + c + d;
      } if (arg === 'prod') {
        return a * b * c * d;
      }

      return -1;
    };
  };
};

console.log(calc('add')(1, 2)(3, 4));  //eslint-disable-line
console.log(calc('prod')(1, 2)(3, 4)); //eslint-disable-line
