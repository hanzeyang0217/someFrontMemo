//里面的可以拿到外面的变量值
// const n = 999;
// function f1() {
//   console.log(n);
// }
// f1(); // 999

//外面的却拿不到里面的变量值
// function f1() {
//   const n = 999;
// }
// console.log(n); // error

//那么如何拿到函数内部的变脸值呢？
//1 再套一个函数
// function f1() {
//   const n = 999;
//   function f2() {
//     console.log(n); // 999
//   }
//   f2();
// }
// f1();

//2 return出来 这里的f2是保有n的值的
// function f1() {
//   const n = 999;
//   function f2() {
//     console.log(n);
//   }
//   return f2;
// }
// const result = f1();
// result(); // 999
// // f1()(); //999

//搞定 于是就从外部取到了内部的变量的值
//这个手法 好吧俗称闭包 还有个常用的用途就是
//让一个变量的值始终保持在内存中
//比如下面的代码可以从外面改变函数内部的变量的值
// const f1 = () => {
//   let n = 999;
//   nAdd = () => {
//     n += 1;
//   };
//   f2 = () => {
//     console.log(n);
//   };
//   return f2;
// };
// const result = f1();
// result(); // 999
// nAdd();
// result(); // 1000

//不过优点就是缺点
//你有没有发现 f1明明再第一次执行以后就其实可以完成使命去西方极乐世界了
//但是 因为f2 和 nAdd里面绑架了 n 所以f1其实一直活在内存里?
// const name = "The Window";
// const obj = {
//   name: "My Object",
//   getNameFunc: function() {
//     return function () {
//       return this.name;
//     };
//   }
// };
// console.log(obj.getNameFunc()()); //The Window
//1 执行 obj.getNameFunc()
//2 返回 ()=>{return this.name} //这个时候this是obj 所以this.name是obj.name
//3 执行 ()=>{return this.name}
//4 返回 this.name //这个时候this是window 所以this.name是window.name

// const name = "The Window";
// const obj = {
//   name: "My Object",
//   getNameFunc: function() {
//     var that = this;
//     return function() {
//       return that.name;
//     };
//   }
// };
// console.log(obj.getNameFunc()()); //My Object
//1 执行 obj.getNameFunc()
//2 返回
// function() {
//     return that.name;
// };
//※ 但是that.name 挂着obj.name
//3 执行
// function() {
//     return that.name;
// };
//4 返回 that.name 也就是obj.name

// const name = "The Window";
// const obj = {
//   name: "My Object",
//   getNameFunc: () => {
//     var that = this;
//     return () => {
//       return that.name;
//     };
//   }
// };
// console.log(obj.getNameFunc()()); //The Window
//因为箭头函数木有this 那么则么改写呢？
// const name = "The Window";
// const obj = {
//   name: "My Object",
//   getNameFunc: () => {
//     return () => {
//       return obj.name;
//     };
//   }
// };
// console.log(obj.getNameFunc()()); //My Object
// //写死就好了

// function makeFunc() {
//   const name = "Mozilla";
//   displayName = () => {
//     alert(name);
//   };
//   return displayName;
// }

// var myFunc = makeFunc();
// myFunc();

// makeAdder = x => {
//   return y => {
//     return x + y;
//   };
// };

// var add5 = makeAdder(5);
// // return
// // function(y) {
// //     return 5 + y;
// // };
// var add10 = makeAdder(10);
// // return
// // function(y) {
// //     return 10 + y;
// // };

// console.log(add5(2)); // 7
// console.log(add10(2)); // 12

// makeSizer = size => {
//   return () => {
//     document.body.style.fontSize = size + "px";
//   };
// };
// var size12 = makeSizer(12);
// var size14 = makeSizer(14);
// var size16 = makeSizer(16);
// document.getElementById(`size12`).onclick = size12;
// document.getElementById(`size14`).onclick = size14;
// document.getElementById(`size16`).onclick = size16;

//如果不用闭包的话
//三个按钮 改字体大小
// setFontSize = size => {
//   document.body.style.fontSize = `${size}px`;
// };
// document.getElementById(`size12`).onclick = () => {
//   setFontSize(12);
// };
// document.getElementById(`size14`).onclick = () => {
//   setFontSize(14);
// };
// document.getElementById(`size16`).onclick = () => {
//   setFontSize(16);
// };
//好了呀 没用闭包

// const Counter = (() => {
//   let privateCounter = 0;
//   changeBy = val => {
//     privateCounter += val;
//   };
//   return {
//     increment: () => {
//       changeBy(1);
//     },
//     decrement: () => {
//       changeBy(-1);
//     },
//     value: () => {
//       return privateCounter;
//     }
//   };
// })();

// console.log(Counter.value()); /* logs 0 */
// Counter.increment();
// console.log(Counter.value()); /* logs 1 */
// Counter.decrement();
// console.log(Counter.value()); /* logs 0 */

// const makeCounter = () => {
//   let privateCounter = 0;
//   const changeBy = val => {
//     privateCounter += val;
//   };
//   return {
//     increment: () => {
//       changeBy(1);
//     },
//     decrement: () => {
//       changeBy(-1);
//     },
//     value: () => {
//       return privateCounter;
//     }
//   };
// };
// const c1 = makeCounter();
// const c2 = makeCounter();
// console.log(c1.value()); /* logs 0 */
// console.log(c2.value()); /* logs 0 */
// c1.increment();
// c1.increment();
// console.log(c1.value()); /* logs 2 */
// console.log(c2.value()); /* logs 0 */

// // const Counter = (() => {
// //   let privateCounter = 0;
// //   const changeBy = val => {
// //     privateCounter += val;
// //   };
// //   return {
// //     increment: () => {
// //       changeBy(1);
// //     },
// //     decrement: () => {
// //       changeBy(-1);
// //     },
// //     value: () => {
// //       return privateCounter;
// //     }
// //   };
// // })();

// // console.log(Counter.value()); /* logs 0 */
// // Counter.increment();
// // console.log(Counter.value()); /* logs 1 */
// // Counter.decrement();
// // console.log(Counter.value()); /* logs 0 */

// const privateCounter = 12;

// const makeFunc = () => {
//   const name = "Mozilla";
//   const displayName = () => {
//     console.log(name);
//   };
//   return displayName;
// };
// const myFunc = makeFunc();
// myFunc();

// function MakeCounter() {
//   this.privateCounter = 0;
//   this.changeBy = val => {
//     this.privateCounter += val;
//   };

//   this.increment = () => {
//     this.changeBy(1);
//   };
//   this.decrement = () => {
//     changeBy(-1);
//   };
//   this.value = () => {
//     return this.privateCounter;
//   };
// }

// const c1 = new MakeCounter();
// const c2 = new MakeCounter();
// console.log(c1.value()); /* logs 0 */
// console.log(c2.value()); /* logs 0 */
// c1.increment();
// c1.increment();
// console.log(c1.value()); /* logs 2 */
// console.log(c2.value()); /* logs 0 */

// const makeCounter = () => {
//   return {
//     privateCounter: 0,
//     changeBy: function(val) {
//       this.privateCounter += val;
//     }
//   };
// };
// const c1 = makeCounter();
// const c2 = makeCounter();
// console.log(c1.privateCounter); /* logs 0 */
// console.log(c2.privateCounter); /* logs 0 */
// c1.changeBy(1);
// c1.changeBy(1);
// console.log(c1.privateCounter); /* logs 2 */
// console.log(c2.privateCounter); /* logs 0 */
// //跟刚刚一样嘛 不过不一样的就是
// //你真的要改的话
// c1.privateCounter = 123;
// console.log(c1.privateCounter);
// //泪奔wwwwww

// function showHelp(help) {
//   document.getElementById("help").innerHTML = help;
// }

// function setupHelp() {
//   const helpText = [
//     { id: "email", help: "Your e-mail address" },
//     { id: "name", help: "Your full name" },
//     { id: "age", help: "Your age (you must be over 16)" }
//   ];

//   for (let i = 0; i < helpText.length; i++) {
//     const item = helpText[i];
//     document.getElementById(item.id).onfocus = function() {
//       showHelp(item.help);
//     };
//   }
// }

// setupHelp();

// function MyObject(name, message) {
//   this.name = name.toString();
//   this.message = message.toString();
//   this.getName = function() {
//     return this.name;
//   };

//   this.getMessage = function() {
//     return this.message;
//   };
// }
// function MyObj(name, message) {
//   const name = name.toString() || ``;
//   const message = message.toString() || ``;
//   return {
//     getName: () => {
//       return name;
//     },
//     getMessage: () => {
//       return message;
//     }
//   };
// }
// const makeFunc = () => {
//   const name = "yeye";
//   const displayYeyeName = () => {
//     const babaname = name;
//     const displayBabaName = () => {
//       //   const name = name;
//       console.log(name);
//     };
//     console.log(babaname);
//   };
//   //   return displayYeyeName;
//   return babaname;
// };
// const myFunc = makeFunc();
// console.log(myFunc); //他现在即使被保存到外面了还是可以访问到他生父的name
// var m, n; //全局变量

// function outer_a1() {
//   var num = 10;
//   function inner() {
//     console.log(num); //打印了outer_a1中定义的num
//     // debugger;
//   }
//   m = inner;
// }
// outer_a1();
// m();

// function outer_a2() {
//   var num = 10;
//   function inner() {
//     console.log("just console"); //只做了简单的打印
//     // debugger;
//   }
//   n = inner;
// }
// outer_a2();
// n();

// function outer_b1() {
//   var num = 15;
//   function inner() {
//     console.log(num); //打印了outer_b1中定义的num
//     // debugger;
//   }
//   inner();
// }
// outer_b1();

// function outer_b2() {
//   var num = 15;
//   function inner() {
//     console.log("just console"); //只做了简单的打印
//     // debugger;
//   }
//   inner();
// }
// outer_b2();

//

// function outer_c1(s) {
//   var num = 20;
//   function inner() {
//     console.log(s + num); //打印包含了outer_c1形参s和定义的num
//     // debugger
//   }
//   return inner;
// }
// outer_c1(1)();

// function outer_c2(s) {
//   var num = 20;
//   function inner() {
//     console.log("just console"); //只做了简单的打印
//     // debugger
//   }
//   return inner;
// }
// outer_c2()();

//俺想 console.log(`世上只有妈妈好`) 这句话
console.log(`世上只有妈妈好`);
//搞定收工
//OK 如果俺需要在一个函数中打印这句话
const say = () => {
  const test = `世上只有妈妈好`;
  console.log(test);
};
say();
//搞定收工
//OK 俺需要用上闭包打印这句话
const say2 = () => {
  const test = `世上只有妈妈好`;
  return console.log(test);
};
const say3 = say2;
say3();
//搞定收工
//等等 你这个不是闭包呀 第一句话知识把指向say2本体的地址给了变量say3 然后say3执行 返回值打印了那句话嘛
//啊哈 你眼睛尖w
const say4 = () => {
  const test = `世上只有妈妈好`;
  return () => {
    console.log(test);
  };
};
const say5 = say4();
say5();
//好了 请问上面这段跟以前有啥不一样？
//俺是一个粗人 怎么看上面这段用了闭包的比别的做的事情多呀
//比如 别人执行完函数打完字就没啥事儿了 这个执行完以后test还要等着被下次执行
//那么性能就差了嘛 具体到内存的话求指导 反正俺说不清
