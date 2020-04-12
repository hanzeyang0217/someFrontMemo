# 关于继承关系的故事

1. 没有继承关系的思维写代码会怎么样?

   - 需要的东西全部都需要做出来再用
   - 重复的`属性和行为`很多=>他们占着内存 //废话
   - 也就是说=>`浪费内存`=>做出来的东西会很慢//spec 允许的情况下不然直接爆了

2. 那么怎么做才是省内存的好代码？

   - 比如一个完美的代码

   ```javascript
   let squareList = [];
   let widthList = [5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6];
   function createSquare(width) {
     let obj = Object.create(createSquare.squarePrototype); //就是这个 创建了一个以`createSquare.squarePrototype`为原型的`obj`对象 不管obj再多 这家伙占的内存只有一份
     obj.width = width;
     return obj;
   }
   createSquare.squarePrototype = {
     getArea() {
       return this.width * this.width;
     },
     getLength() {
       return this.width * 4;
     },
     constructor: createSquare
   };
   for (let i = 0; i < 12; i++) {
     squareList[i] = createSquare(widthList[i]);
     console.log(squareList[i].constructor);
   }
   ```

3. new

   - 完美的代码而且很通用 所以 JS 之父 给了`new`来帮开发者减负

     1. 创建`空对象`
     2. 把空对象的`__proto__`指向`构造函数的prototype`
     3. 将空对象`作为this关键字运行构造函数`
     4. return this

   - 变身以后的代码

   ```javascript
   let squareList = [];
   let widthList = [5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6];
   function Square(width) {
     //new会帮你创建个空对象
     //new将这个空对象`作为this关键字运行构造函数`
     //new会把这个空对象的`__proto__`指向`构造函数的prototype`
     this.width = width;
     //new会帮你自动return 创建的空对象
   }
   Square.prototype.getArea = function() {
     return this.width * this.width;
   };
   Square.prototype.getLength = function() {
     return this.width * 4;
   };
   for (let i = 0; i < 12; i++) {
     squareList[i] = new Square(widthList[i]);
     console.log(squareList[i].constructor);
   }
   ```

4. 代码规范

   - 大小写
     - 构造函数 首字母大写
     - 别的首字母小写
   - 词性
     - `new`后面的函数`名词形式`
     - 其他函数一般`动词开头`

5. 原型链

   1. `对象.__proto__===他的构造函数.prototype`
   2. 没了

6. 解释一下

   1. `a对象.a方法()`的时候
   2. 先去找`a对象`里面有没有`a方法`
   3. 没有的话找`a对象.__proto__`也就是`构造出a的构造函数A.prototype`里面有没有`a方法`
   4. 如果还没有的话找`a对象.__proto__.__proto__`也就是`构造出a的构造函数A.prototype.__proto__`里面有没有`a方法` 找到顶是`null`
   5. 执行先找到的`a方法`
   6. [代码](./main.js)

7. 4 个 原则

   1. `对象.__proto__===他的构造函数.prototype`
   2. 所有`对象`都是`Object`构造的
   3. 所有`函数`都是`Function`构造的
   4. `Object.prototype.__proto__`是 null 是终点是哲学

8. 别看

   1. `Function.__proto__ === Function.prototype //true` 第 3 条
   2. `Object.__proto__===Function.prototype //true`第 3 条
   3. `Function.prototype.__proto__===Object.prototype //true`第 2 条
   4. `Function.__proto__.__proto__===Object.prototype //true`第 2 条
   5. `Object.__proto__.__proto__===Object.prototype`第 2 条
   6. `Object.prototype.__proto__===null //true` 第 4 条

9. Class

   - 话说原型链不是蛮好的，不知道为啥又整出来一个功能重复的语法...而且 IE 兼容还有问题..杯具简直
   - 以后被强迫用 class 的时候再深挖现在先随便写点好了
   - [代码](./main.js)
