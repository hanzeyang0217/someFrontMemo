## 题目

看下面几篇文章，写一篇自己的总结：

1. [JavaScript 的历史](https://zh.wikipedia.org/wiki/JavaScript#%E5%8E%86%E5%8F%B2)
2. [JavaScript 诞生记](http://www.ruanyifeng.com/blog/2011/06/birth_of_javascript.html)
3. [JavaScript 的 10 个设计缺陷](http://www.ruanyifeng.com/blog/2011/06/10_design_defects_in_javascript.html)

## JavaScript 的历史

### 肇始于网景

- 1994 年 大佬浏览器`Mosaic Netscape 0.9`闪亮登场
- 1995 年 5 月 楼上的公司的老布(`他才 34 岁！！！`)花了 10 天把`JavaScript`的原型设计出来了 膜拜一下

### 微软采纳

- `JavaScript`出来以后火了
- 于是微软也出了自己的`JScriot`为了 IE3
- But 两个浏览器支持的`JS`不一样，大家都很痛苦
  - 开发者很痛苦
  - 消费者很痛苦
  - 老板不知道痛不痛苦

### 标准化

- 1996 年 11 月，网景正式向`ECMA`（欧洲计算机制造商协会）提交语言标准
- 1997 年 6 月，ECMA 以 JavaScript 语言为基础制定了 `ECMAScript` 标准规范 `ECMA-262`

### 感想

- 感觉作为程序员 管你怎么变 了解基本原理，并且可以很快做出东西的人就是大佬

## JavaScript 诞生记

- 1995 年 4 月 34 岁的老布进网景
- Brendan Eich 的主要方向和兴趣是函数式编程
- 1995 年 5 月，网景公司做出决策，
  - > 未来的网页脚本语言必须"看上去与 Java 足够相似"，但是比 Java 简单，使得非专业的网页作者也能很快上手。
- 老布被指名负责 ↑
- 但是老布没兴趣 随便花了 10 天就说搞完了..※额 把我的滔滔江水还回来..
- 由于设计时间太短，语言的一些细节考虑得不够严谨，导致后来很长一段时间，Javascript 写出来的程序混乱不堪。
- 总的来说，他的设计思路是这样的：
  1. 借鉴 C 语言的基本语法；
  2. 借鉴 Java 语言的数据类型和内存管理；
  3. 借鉴 Scheme 语言，将函数提升到"第一等公民"（first class）的地位；
  4. 借鉴 Self 语言，使用基于原型（prototype）的继承机制。
- 所以，Javascript 语言实际上是两种语言风格的混合产物
  - （简化的）函数式编程 +
  - （简化的）面向对象编程。
- 这是由 Brendan Eich（函数式编程）与网景公司（面向对象编程）共同决定的。
- 如果不是公司的决策，Brendan Eich 绝不可能把 Java 作为 Javascript 设计的原型。作为设计者，他一点也不喜欢自己的这个作品：

> "与其说我爱 Javascript，不如说我恨它。它是 C 语言和 Self 语言一夜情的产物。十八世纪英国文学家约翰逊博士说得好：'它的优秀之处并非原创，它的原创之处并不优秀。'（the part that is good is not original, and the part that is original is not good.）"

（完）

### 感想

- 函数式编程 / 面向对象是什么鬼？？？ 搜了一下看不懂..
- > 它的优秀之处并非原创，它的原创之处并不优秀。
- 什么鬼..小学语文没学好..

## JavaScript 的 10 个设计缺陷

1. 不适合开发大型程序
   > Javascript 没有名称空间（namespace），很难模块化；没有如何将代码分布在多个文件的规范；允许同名函数的重复定义，后面的定义可以覆盖前面的定义，很不利于模块化加载。
   - 很容易重复名字 当然会报错？
   - 后者覆盖前者 追起来很痛苦
   - 这个是靠闭包技术回避？
2. 非常小的标准库
   > 功能少
   - 现在越来越大了嘛？
3. null 和 undefined

   > null 属于对象（object）的一种，意思是该对象为空；
   > undefined 则是一种数据类型，表示未定义。

   ```javascript
   typeof null; // object

   typeof undefined; // undefined
   ```

   > 两者非常容易混淆，但是含义完全不同。

   ```javascript
   var foo;

   alert(foo == null); // true

   alert(foo == undefined); // true

   alert(foo === null); // false

   alert(foo === undefined); // true
   ```

   > 在编程实践中，null 几乎没用，根本不应该设计它。

   - 啊哈哈哈 好搞脑子 没定义和空的区别是啥？？？

4. 全局变量难以控制

   > Javascript 的全局变量，在所有模块中都是可见的；任何一个函数内部都可以生成全局变量，这大大加剧了程序的复杂性。

   ```javascript
   a = 1;

   (function() {
     b = 2;

     alert(a);
   })(); // 1

   alert(b); //2
   ```

   - 就是说一般的语言帮我们强行规定的东西为了避免我们踩坑的东西 js 木有 于是我们以后就会掉下这些坑很痛苦咯？
   - 话说这个不是已经解决了嘛？const let 啥的

5. 自动插入行尾分号

   > Javascript 的所有语句，都必须以分号结尾。但是，如果你忘记加分号，解释器并不报错，而是为你自动加上分号。有时候，这会导致一些难以发现的错误。比如，下面这个函数根本无法达到预期的结果，返回值不是一个对象，而是 undefined。

   ```javascript
   function(){

   return
   　　　　　　{
   　　　　　　　　 i=1
   　　　　　　};

   }
   ```

   > 原因是解释器自动在 return 语句后面加上了分号。

   ```javascript
   function(){

   return;
   　　　　　　{
   　　　　　　　　 i=1
   　　　　　　};

   }
   ```

   - 规范的写法习惯了以后可以规避吧？
   - 现代人应该有解决办法的 吧？

6. 加号运算符

   > +号作为运算符，有两个含义，可以表示数字与数字的和，也可以表示字符与字符的连接。

   ```javascript
   alert(1 + 10); // 11

   alert("1" + "10"); // 110
   ```

   > 如果一个操作项是字符，另一个操作项是数字，则数字自动转化为字符。

   ```javascript
   alert(1 + "10"); // 110

   alert("10" + 1); // 101
   ```

   > 这样的设计，不必要地加剧了运算的复杂性，完全可以另行设置一个字符连接的运算符

   - 传说中的隐形啥来着？？w
   - 谁用变态语法打谁！

7. NaN

   > NaN 是一种数字，表示超出了解释器的极限。它有一些很奇怪的特性：

   ```javascript
   NaN === NaN; //false

   NaN !== NaN; //true

   alert(1 + NaN); // NaN
   ```

   > 与其设计 NaN，不如解释器直接报错，反而有利于简化程序。

   - 确实 这又是什么鬼 www
   - 这家伙有用的法拉？没有的话留他干嘛哦？

8. 数组和对象的区分

   > 由于 Javascript 的数组也属于对象（object），所以要区分一个对象到底是不是数组，相当麻烦。Douglas Crockford 的代码是这样的：

   ```javascript
   if (
     arr &&
     typeof arr === "object" &&
     typeof arr.length === "number" &&
     !arr.propertyIsEnumerable("length")
   ) {
     alert("arr is an array");
   }
   ```

   - 原来如此 那上面这个就是标准写法咯？是的话拷贝一下

9. == 和 ===

   > ==用来判断两个值是否相等。当两个值类型不同时，会发生自动转换，得到的结果非常不符合直觉。

   ```javascript
   "" == "0"; // false

   0 == ""; // true

   0 == "0"; // true

   false == "false"; // false

   false == "0"; // true

   false == undefined; // false

   false == null; // false

   null == undefined; // true

   " \t\r\n" == 0; // true
   ```

   > 因此，推荐任何时候都使用"==="（精确判断）比较符。

   - 哇 又是那个啥
   - OK 以后只用`===`

10. 基本类型的包装对象

    > Javascript 有三种基本数据类型：字符串、数字和布尔值。它们都有相应的建构函数，可以生成字符串对象、数字对象和布尔值对象。

    ```javascript
    new Boolean(false);

    new Number(1234);

    new String("Hello World");
    ```

    > 与基本数据类型对应的对象类型，作用很小，造成的混淆却很大。

    ```javascript
    alert(typeof 1234); // number

    alert(typeof new Number(1234)); // object
    ```

    - 哦哟 能不能统一点啦 即使都可以实现 大家都写一种不好吗..

### 感想

- 俺的第一门语言好像有坑..
- but 现在这么红 肯定有原因的吧
- 到时候学的时候注意这些坑 绕过去
- 学完 JS 再回来看看
