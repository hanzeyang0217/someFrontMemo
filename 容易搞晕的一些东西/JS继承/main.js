// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.sayName = function() {
//   console.log(this.name);
// };
// function 杨家将() {
//   this.family = `杨家将`;
//   Person.apply(this, arguments);
// }
// 杨家将.prototype.__proto__ = Person.prototype;

// const p1 = new 杨家将(`yy`, 15);
// const p2 = new 杨家将(`yyy`, 12);
// console.log(p1.name); //yy
// p1.sayName(); //yy
// p1.sayName.call(p1); //yy
// p1.sayName.call(p2); //yyy
// 杨家将.prototype.sayName = function() {
//   console.log(`we are 杨家将`);
// };
// p1.sayName(); //we are 杨家将
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
Person.prototype.sayName = function() {
  console.log(this.name);
};
class 杨家将 extends Person {
  constructor(name, age, waihao) {
    super(name, age);
    this.family = `杨家将`;
    this.waihao = waihao;
  }
  sayName() {
    super.sayName();
    console.log(`we are 杨家将`);
  }
}

const p1 = new 杨家将(`yy`, 15, `六郎`);
const p2 = new 杨家将(`yyy`, 12, `九郎`);
console.log(p1.name); //yy
console.log(p1.waihao); //六郎
p1.sayName(); //yy we are 杨家将
p1.sayName.call(p1); //yy we are 杨家将
p1.sayName.call(p2); //yyy we are 杨家将
p1.sayName = () => {
  console.log(`tt`);
};
p1.sayName(); //tt
