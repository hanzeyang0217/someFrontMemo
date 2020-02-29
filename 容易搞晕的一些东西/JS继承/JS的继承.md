## 关于 JS 的对象(Object)的继承

- 目前有 2 种方法
- 原型链
- Class

### 为什么要有继承这种东西？

- 不解释了就(好吧为了省内存,而且程序猿已经默认这么写代码了)

### 原型链

1. `对象.__proto__===他的构造函数.prototype`
2. 没了

#### 解释一下

1. `a对象.a方法()`的时候
2. 先去找`a对象`里面有没有`a方法`
3. 没有的话找`a对象.__proto__`也就是`构造出a的构造函数A.prototype`里面有没有`a方法`
4. 如果还没有的话找`a对象.__proto__.__proto__`也就是`构造出a的构造函数A.prototype.__proto__`里面有没有`a方法` 找到顶是`null`
5. 执行先找到的`a方法`
6. [代码](./main.js)

#### 4 原则

1. `对象.__proto__===他的构造函数.prototype`
2. 所有`对象`都是`Object`构造的
3. 所有`函数`都是`Function`构造的
4. `Object.prototype.__proto__`是 null 是终点是哲学

#### 别看

1. `Function.__proto__ === Function.prototype //true` 第 3 条
2. `Object.__proto__===Function.prototype //true`第 3 条
3. `Function.prototype.__proto__===Object.prototype //true`第 2 条
4. `Function.__proto__.__proto__===Object.prototype //true`第 2 条
5. `Object.__proto__.__proto__===Object.prototype`第 2 条
6. `Object.prototype.__proto__===null //true` 第 4 条

### Class

- 话说原型链不是蛮好的，不知道为啥又整出来一个功能重复的语法...而且 IE 兼容还有问题..杯具简直
- 以后被强迫用 class 的时候再深挖现在先随便写点好了
- [代码](./main.js)
