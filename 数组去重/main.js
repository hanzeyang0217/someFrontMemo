const array = [
  "a",
  "a",
  true,
  true,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  1,
  1,
  0,
  0,
  +0,
  +0,
  -0,
  -0,
  {},
  {}
];
Array.prototype.unique = function() {
  const C = Array.from(this);
  const D = [];
  let countNaN = 0;
  for (let i = 0; i < C.length; i++) {
    const item = C[i];
    if (isNaN(item) && !countNaN && typeof item === `number`) {
      countNaN = 1;
    } else if (isNaN(item) && countNaN && typeof item === `number`) {
      countNaN++;
      continue;
    }
    D.push(item);
    C.splice(i, 1);
    if (i !== 0) {
      i--;
    }
    while (C.indexOf(item) !== -1) {
      C.splice(C.indexOf(item), 1);
      if (i !== 0) {
        i--;
      }
    }
  }
  return D;
};

// Array.prototype.unique = function() {
//   const B = [];
//   this.forEach(item => {
//     B.push([item, 0]);
//   });
//   const A = new Map(B);
//   return [...A.keys()];
// };

// Array.prototype.unique = function() {
//   const A = [...new Set(this)];
//   return A;
// };

const array1 = array.unique();
console.log(array1);
// ["a", true, false, undefined, null, NaN, 1, 0, {…}, {…}]
console.log(array); //老样子
