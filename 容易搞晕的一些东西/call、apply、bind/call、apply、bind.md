# call、apply、bind

## TODO

- fn.bind(A).call(B)里面的 this 是什么 => `A`
  ```javascript
  ...
  const GetX4 = module.getX.bind(module);
  console.log(GetX4.call(Xman)); //42 module 居然是bind厉害！！！
  const GetX5 = module.getX.bind(module).call(Xman);
  console.log(GetX5); //42 module 居然是bind厉害！！！
  ```
- new fn.bind(A)呢
  - new 比 bind 晚执行
  - this 是 new 的时候产生的那个对象 跟 bind 的没关系
    ```javascript
    var cheese = new Food("feta", 5);
    console.log(cheese); //cheese
    const fuckFood = Food.bind(cheese);
    const fuck = new fuckFood(`fuck`, 100);
    console.log(cheese); //cheese
    console.log(fuck); //fuck
    ```

### call

- 如果想让 a 函数执行时的 this 是 b 对象的时候
  - `a.call(b)` //a 里面的 this 是 b
- 如果不传参数的话 在非严格模式的时候 会绑定`this`为`全局对象`
  - `a.call()` //a 里面的 this 是 window
- 如果不传参数的话 在严格模式的时候 会绑定`this`为`undefined`
  - `'use strict'; a.call()` //a 里面的 this 是 undefined

### apply

- 跟`call`区别只是传参方式不同
  - `a.call(b,参数1，参数2)`
  - `a.apply(b,数组)`
- 骚操作

  - `a.apply(b,arguments)`

    ```javascript
    function Product(name, price) {
      this.name = name;
      this.price = price;
    }

    function Food(name, price) {
      Product.call(this, name, price);
      this.category = "food";
    }

    function Toy(name, price) {
      Product.apply(this, arguments); //不用知道有哪些直接用
      this.category = "toy";
    }

    var cheese = new Food("feta", 5);
    console.log(cheese);
    var fun = new Toy("robot", 40);
    console.log(fun);
    ```

  - 数组结合的时候

    ```javascript
    var array = ["a", "b"];
    var elements = [0, 1, 2];
    // array = array.concat(elements);
    array.push.apply(array, elements);
    console.log(array); // ["a", "b", 0, 1, 2]
    ```

  - 利用`apply`传参的特点可以 有时候可以省掉一些遍历

    ```javascript
    /* 应用(apply) Math.min/Math.max 内置函数完成 */
    var max = Math.max.apply(null, numbers);
    const max2 = Math.max(...numbers);
    var min = Math.min.apply(null, numbers);

    /* 代码对比： 用简单循环完成 */
    (max = -Infinity), (min = +Infinity);

    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] > max) max = numbers[i];
      if (numbers[i] < min) min = numbers[i];
    }
    ```

- 要注意

  - 因为`apply`传参很方便所以需要小心参数丢失
  - 如果参数可能很多个情况下最好还是切成小块再传

    ```javascript
    function minOfArray(arr) {
      var min = Infinity;
      var QUANTUM = 32768;

      for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
        var submin = Math.min.apply(
          null,
          arr.slice(i, Math.min(i + QUANTUM, len))
        );
        min = Math.min(submin, min);
      }

      return min;
    }

    var min = minOfArray([5, 6, 2, 3, 7]);
    ```

### bind

- 如果想让 a 函数将来执行时的 this 是 b 对象的时候

  ```javascript
  const module = {
    x: 42,
    getX: function() {
      console.log(this);
      return this.x;
    }
  };
  const GetX1 = module.getX;
  console.log(GetX1.call(module)); //执行的时候指定this为module
  const GetX2 = module.getX.bind(module); //create函数的时候就指定了里面的this为module
  console.log(GetX2());
  ```

- 如果想要预设函数的参数的时候

  ```javascript
  function list() {
    return Array.prototype.slice.call(arguments);
  }
  function addArguments(arg1, arg2) {
    return arg1 + arg2;
  }
  var list1 = list(1, 2, 3); // [1, 2, 3]
  var result1 = addArguments(1, 2); // 3
  // 创建一个函数，它拥有预设参数列表。
  var leadingThirtysevenList = list.bind(null, 37);
  // 创建一个函数，它拥有预设的第一个参数
  var addThirtySeven = addArguments.bind(null, 37);
  var list2 = leadingThirtysevenList();
  // [37]
  var list3 = leadingThirtysevenList(1, 2, 3);
  // [37, 1, 2, 3]
  var result2 = addThirtySeven(5);
  // 37 + 5 = 42
  var result3 = addThirtySeven(5, 10);
  // 37 + 5 = 42 ，第二个参数被忽略
  ```
