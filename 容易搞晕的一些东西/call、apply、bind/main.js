// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }

// function Food(name, price) {
//   Product.call(this, name, price);
//   this.category = "food";
// }

// function Toy(name, price) {
//   Product.apply(this, arguments);
//   this.category = "toy";
// }

// var cheese = new Food("feta", 5);
// console.log(cheese);
// var fun = new Toy("robot", 40);
// console.log(fun);

// var animals = [
//   { species: "Lion", name: "King" },
//   { species: "Whale", name: "Fail" }
// ];

// for (var i = 0; i < animals.length; i++) {
//   (function(i) {
//     this.print = function() {
//       console.log("#" + i + " " + this.species + ": " + this.name);
//     };
//     this.print();
//   }.call(animals[i], i));
// }
// for (var i = 0; i < animals.length; i++) {
//   (function(item, i) {
//     this.print = function() {
//       console.log("#" + i + " " + item.species + ": " + item.name);
//     };
//     this.print();
//   })(animals[i], i);
// }

// for (let i = 0; i < animals.length; i++) {
//   console.log("#" + i + " " + animals[i].species + ": " + animals[i].name);
// }

// function greet() {
//   var reply = [this.animal, "typically sleep between", this.sleepDuration].join(
//     ` `
//   );
//   console.log(reply);
// }

// var obj = {
//   animal: "cats",
//   sleepDuration: "12 and 16 hours"
// };

// greet.call(obj); // cats typically sleep between 12 and 16 hours
// greet.apply(obj); // cats typically sleep between 12 and 16 hours

// //如果想设置a函数执行时的this是b对象的时候
// // // a.call(b)
// "use strict";
// var sData = "Wisen";

// function display() {
//   console.log(this);
// }

// display.call(); // sData value is Wisen
// const numbers = [5, 6, 2, 3, 7];

// const max = Math.max.apply(null, numbers);

// console.log(max);
// // expected output: 7

// const min = Math.min.apply(null, numbers);

// console.log(min);
// expected output: 2
// var array = ["a", "b"];
// var elements = [0, 1, 2];
// array = array.concat(elements);
// // array.push.apply(array, elements);
// console.log(array); // ["a", "b", 0, 1, 2]

// /* 找出数组中最大/小的数字 */
// var numbers = [8, 5, 6, 2, 3, 7];

// /* 应用(apply) Math.min/Math.max 内置函数完成 */
// var max = Math.max.apply(null, numbers);
// console.log(max);
// const max2 = Math.max(...numbers);
// console.log(max2);
// var min = Math.min.apply(null, numbers);

// /* 代码对比： 用简单循环完成 */
// (max = -Infinity), (min = +Infinity);

// for (var i = 0; i < numbers.length; i++) {
//   if (numbers[i] > max) max = numbers[i];
//   if (numbers[i] < min) min = numbers[i];
// }
// const module = {
//   x: 42,
//   getX: function() {
//     console.log(this);
//     return this.x;
//   }
// };
// const GetX1 = module.getX;
// console.log(GetX1.call(module));
// const GetX2 = module.getX.bind(module);
// console.log(GetX2());

// function list() {
//   return Array.prototype.slice.call(arguments);
// }
// function addArguments(arg1, arg2) {
//   return arg1 + arg2;
// }

// var list1 = list(1, 2, 3); // [1, 2, 3]
// var result1 = addArguments(1, 2); // 3

// // 创建一个函数，它拥有预设参数列表。
// var leadingThirtysevenList = list.bind(null, 37);

// // 创建一个函数，它拥有预设的第一个参数
// var addThirtySeven = addArguments.bind(null, 37);

// var list2 = leadingThirtysevenList();
// // [37]

// var list3 = leadingThirtysevenList(1, 2, 3);
// // [37, 1, 2, 3]

// var result2 = addThirtySeven(5);
// // 37 + 5 = 42

// var result3 = addThirtySeven(5, 10);
// // 37 + 5 = 42 ，第二个参数被忽略

// function LateBloomer() {
//   this.petalCount = Math.random();
// }

// // 在 1 秒钟后声明 bloom
// LateBloomer.prototype.bloom = function() {
//   window.setTimeout(this.declare.bind(this), 1000);
// };
// LateBloomer.prototype.declare = function() {
//   console.log(this.petalCount);
// };

// var flower = new LateBloomer();
// flower.bloom(); // 一秒钟后, 调用 'declare' 方法

function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return this.x + "," + this.y;
};

var p = new Point(1, 2);
console.log(p.toString()); // '1,2'

var emptyObj = {};
var YAxisPoint = Point.bind(emptyObj, 0 /*x*/);
