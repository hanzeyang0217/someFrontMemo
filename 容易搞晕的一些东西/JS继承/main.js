// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.sayName = function() {
//   console.log(this.name);
// };
// const p1 = new Person(`yy`, 15);
// const p2 = new Person(`yyy`, 12);
// console.log(p1.name); //yy
// p1.sayName(); //yy
// p1.sayName.call(p1); //yy
// p1.sayName.call(p2); //yyy
// p1.sayName = () => {
//   console.log(`tt`);
// };
// p1.sayName(); //tt

/**
 * class改写
 */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayName() {
    console.log(this.name);
  }
}

const p1 = new Person(`yy`, 15);
const p2 = new Person(`yyy`, 12);
console.log(p1.name); //yy
p1.sayName(); //yy
p1.sayName.call(p1); //yy
p1.sayName.call(p2); //yyy
p1.sayName = () => {
  console.log(`tt`);
};
p1.sayName(); //tt
