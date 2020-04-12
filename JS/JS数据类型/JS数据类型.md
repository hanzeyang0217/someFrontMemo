# JS 数据类型

1. 数据类型

   1. String

      1. 储存形式
         1. 类似`UTF8`的`UCS-2`
      2. 写法

      ```
      '你好' / "你好" / `你好`
      ```

      3. 引号不包括在字符串里面

      ```
      'it\'s ok'
      "it's ok"
      `it's ok`
      ```

      4. 转义

         - `\'` / `\n`换行 / `\r`回车 / `\\`\ / `\u Unicode字符` / `\x`

      5. 多行字符串

         - 反引号可以直接上 别的估计需要转义

      6. 属性

         - `length`

      7. base64 转码

         - `window.btoa`
         - `window.atob`
         - 自欺欺人

      8. 总结

         - 用的时候反引号就好了(但是 IE 可能不好使)
           - 多行方便不用转义
           - 跟现实用语也不冲突
         - `length`很好用
         - 别的`写法` `转义` `base64` 再说

   2. Number
      1. 储存形式
         1. 64 位浮动点
      2. 写法
         - `1`/`0.1`/`1.23e4`/`8进制写法`/`16进制写法`/`2进制写法`
      3. 特殊值
         - `0`/`+0`/`-0`
         - `Infinity`/`+Infinity`/`-Infinity`
         - `NaN` 还不知道是啥的数字
      4. `64位浮点数`
         - `正负号`占 1 位
         - `指数`占 11 位(-1023~1024)
         - `有效数字`占 52 位(开头的`1`省略)
      5. 范围
         - `Number.MAX_VALUE`
         - `Number.MIN_VALUE` 最细小的值(注意不是最小值哟)
      6. 精度
         - `15`~16 位 10 进制`有效数字` OK
      7. 总结
         - 小心别超 16 位
   3. Boolean
      1. 得到 bool 值
         - `!xxx`
         - `1==2`/`1!=2`/`3===4`/`3!==4`
         - `1>2`
      2. `falsy`值 超级重要！！！背
         - `undefined`/`null`/`0`/`NaN`/`空字符串`
      3. 总结
         - `falsy`值 超级重要！！！背
           - `undefined`/`null`/`0`/`NaN`/`空字符串`
           - 看起来不像`false`的其实只有 `0`和`空字符串`嘛 很好记
   4. Null
   5. Undefined
      - Null 和 Undefined 的区别
        - 没有本质区别
        - 细节 1，声明后没赋值 默认`undefined`
        - 细节 2，没写 return 的话 默认返回`undefined`
        - 细节 3，习惯上非对象空值写`undefined` 只是习惯上
   6. BigInt
   7. Symbol
   8. Object

      1. 声明对象

         1. 写法
            1. `let obj = { 'name': 'frank', 'age': 18 }` 推荐
            2. `let obj = new Object({'name': 'frank'})`
         2. 注意

            - key 是字符串
            - 允许省略引号 but 还是会被转换成字符串
            - 而且他自动转成字符串的时候会有一些很神奇的操作具体看资料去 eg `.234`=>`'0.234'`
            - 反正记得每次带引号就好了不废话
            - 又是一个重点 ★google 的调试版表示有点问题 用`Object.keys(obj)`来查看所有`key`

         3. 变量`key`ES6

            ```
            let p1 = `name`
            let obj = {[p1]:'oh'} //key为 'name'
            ```

      2. 删

         - 写法
           1. `delete obj.xxx`
           2. `delete obj['xxx']` //推荐
         - 验证是否成功
           - 不含 key
             - `'xxx' in obj === false`
           - 含 key，但是值是`undefined`
             - `'xxx' in obj && obj.xxx === undefined` //这个为什么拿出来说 只是因为 如果不含`key`的情况也会是`undefined` 小心点,比如
               ```javascript
               xx = { a: undefined };
               xx.a === undefined; //true
               xx.b === undefined; //true
               ```

      3. 查

         - 查看自身 key
           - `Object.keys(obj)`
           - but `__proto__`不会出来
         - 查看(自身 + 共有) key
           - `console.dir(obj)`
         - 那我 TM 怎么知道他是 自身还是共有？ 不通过眼睛看？
           - `'key' in obj` 区分不了 原型链上的也包括
           - `obj.hasOwnProperty('key')` 阔以！限定了直接属性的
         - 查单个 key 值
           - obj['key'] //推荐新手这个 因为可以提薪自己`key`一直是`字符串`
           - obj.key

      4. 增改

         - 普通赋值
           - let obj = {name:'aaa'}
           - obj.name = 'aaa'
           - obj['name'] = 'aaa'
         - 批量赋值 `ES6`
           - `Object.assign(obj,{age:18,name:'yt'})`

      5. 关于原型

         - 上次也说过 原型上的`key`不能在自身上修改 可读，改的话会加在自身上
         - 改`__proto__`上的`key值`不推荐
         - 真要改的话改`prototype`上的 key 值
         - 想把`__proto__`整个改成别的的时候推荐用
           - `let obj = Object.create(common)`
           - 规范说了要改一开始改好别后来改
           - 不推荐 `obj.__proto__ = common`

2. 变量声明
   - 三种方法
     - `var`/`const`/`let`
     - 现代人只用`const`/`let`
   - 变量提升
     - 现在不讲
   - let
     - 作用域不能超出{}
     - 不能重复申明
     - 全局声明的 let 变量不会挂在 window 下面
     - for 循环配 let 可以满足小白的幻想
   - const
     - 几乎和`let`一样
     - but 不能重新赋值/而且声明时必须赋值
3. 类型转换
   - x => string
     - `String(x)`
     - `x.toString()`
     - `x + ''`
   - x => number
     - `Number(x)`
     - `parseInt(x)`/`parseFloat(x)`
   - x => boolean
     - `Boolean(x)`
     - `!!x`
