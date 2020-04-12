# JS 数组

1. 跟别的语言的数组比较

   - 典型的数组
     - 元素的数据类型相同
     - 使用连续的内存储存
     - 通过数字下表获取元素
   - JS 的数组
     - 元素的数据类型可以不同
     - 内存不一定连续(对象的内存是随机的)
     - `不能通过数字下表`，而是通过`字符串下标` //新手看起来不是字符串罢了 打出来就知道
     - 所以他的 key 可以是随便啥 //arr[`xxx`]

2. 创建数组

   - 新建
     - `let arr = [1,2,3]` //常用 因为短
     - `let arr = new Array(1,2,3)` //正规方式 构造函数
     - `let arr = new Array(3)`//这个感觉也蛮神奇的 如果只有一个参数的话 默认这个参数代表`length`而不是内容..
   - 转化
     - `let arr = '1,2,3'.split(',')`
     - `let arr = '123'.split('')`
     - `Array.from('123')`
   - 伪数组
     - 就是原型里面不带数组原型的家伙
     - `let divList = document.querySelectorAll('div')`
   - 合并
     - `arr1.concat(arr2)`
   - 截取
     - `arr1.slice(1)` //从第 2 个元素开始
     - `arr1.slice(0)` //第 1 个开始也就是全部
     - JS 只提供浅拷贝

3. 删

   - 坑
     - 方法跟对象一样
     - `BUT！！！！ 居然长度不改变！！！`
     - 直接改`length`可以删居然 但是不推荐
   - 用这些
     - `arr.shift()` //砍头 arr 被修改 返回被删元素
     - `arr.pop()` //砍尾 arr 被修改 返回被删元素
     - `arr.splice(index,1)` //删除`index`位置的`一个`元素
     - `arr.splice(index,1,'x')` //并在删除的位置加`x` 修改 arr
     - `arr.splice(index,1,'x','y')` //并在删除的位置加`x,y` 修改 arr

4. 查

   1. 查看所有元素

      - 查看所有属性名
        - `let arr = [1,2,3]; arr.xxx = 'xxx'`
        - `Object.keys(arr)`
        - `for (let key in arr){}`=> `log`
        - 问题这些方法连`xxx`都会打出来 但是他是`数组`所以`length还是3`不包括 xxx 你懂的 w
      - 查看属性名和值
      - ```javascript
        for (let i = 0; i < arr.length; i++) {
          console.log(`${i}: ${arr[i]}`);
        }
        ```
      - ```javascript
        arr.forEach(function(item, index) {
          console.log(`${index}: ${item}`);
        });
        ```
      - 自己写个`forEach` 帮你理解回调函数的

        ```javascript
        function forEach(array, fn) {
          for (let i = 0; i < array.length; i++) {
            fn(array[i], i, array);
          }
        }
        forEach(arr, function(item, index) {
          console.log(`${index}: ${item}`);
        });
        ```

   2. 查看单个属性

      - 如果越界的话都是返回`undefined`
      - `arr.indexOf(item)` //存在返回下标 不存在返回`-1`
      - `arr.find(item => item % 2 === 0)` //找到第一个偶数 但是木有下标

        ```javascript
        arr.find(function(item) {
          return item % 2 === 0;
        });
        ```

      - `arr.findIndex(item => item % 2 === 0)` //找到第一个偶数的下标

5. 改增

   - 别用对象的方法 比如`arr[100]='xx'`之后`arr.length===101`就很窘迫..
   - `arr.push(newItem)` //插尾 修改 arr 返回新长度
   - `arr.push(newItem1,newItem2)` //插尾 修改 arr 返回新长度
   - `arr.unshift(newItem)` //插头 修改 arr 返回新长度
   - `arr.unshift(newItem1,newItem2)` //插头 修改 arr 返回新长度
   - `arr.splice(index,0,'x')` //在 index 处插'x' 修改 arr
   - `arr.splice(index,0,'x')` //在 index 处插'x' 修改 arr
   - `arr.reverse()`//反转 修改 arr

6. 排序

   - `arr.sort((a,b)=>a-b)`

     ```javascript
     arr.sort(function(a, b) {
       if (a > b) {
         return 1; //正数就行
       } else if (a === b) {
         return 0;
       } else {
         return -1; //负数就行
       }
     });
     ```

     ```javascript
     function sort(array, fn) {
       for (let j = 0; j < array.length; j++) {
         for (let i = 0; i < array.length; i++) {
           //就是拿到两个数
           //比一比
           let 后不后退 = 比大小(array[i], array[i + 1]);
           if (fn) {
             后不后退 = fn(array[i], array[i + 1]);
           } else {
             后不后退 = 比大小(array[i], array[i + 1]);
           }
           //换位置
           if (后不后退 === 1) {
             let item = array[i];
             array.splice(i, 1);
             array.splice(i + 1, 0, item);
           }
         }
       }
       function 比大小(a, b) {
         if (a > b) {
           return 1; //正数就行
         } else if (a === b) {
           return 0;
         } else {
           return -1; //负数就行
         }
       }
     }
     ```

7. 数组变换三兄弟
   1. map
      - n => n
        ```javascript
        let arr = [0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 6];
        let arr2 = arr.map(
          i => ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][i]
        );
        console.log(arr2); // ['周日', '周一', '周二', '周二', '周三', '周三', '周三', '周四', '周四', '周四', '周四','周六']
        ```
   2. filter
      - n => 变少
        ```javascript
        let scores = [95, 91, 59, 55, 42, 82, 72, 85, 67, 66, 55, 91];
        let scores2 = scores.filter(score => score > 65);
        console.log(scores2); //  [95,91,82,72,85,67,66,91]
        ```
   3. reduce
      - n => 1
        ```javascript
        let scores = [95, 91, 59, 55, 42, 82, 72, 85, 67, 66, 55, 91];
        let sum = scores.reduce((sum, n) => sum + (n % 2 ? n : 0), 0);
        console.log(sum); // 奇数之和：598
        ```
        ```javascript
        function reduce(arr, fn, init) {
          let sum = init;
          for (let i = 0; i < arr.length; i++) {
            sum = fn(sum, arr[i]);
          }
          return sum;
        }
        let sum = reduce(scores, (sum, n) => sum + (n % 2 ? n : 0), 0);
        //用自己的reduce改写map
        let arr = [0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 6];
        let arr3 = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
        let arr2 = reduce(arr, (sum, n) => sum.concat(arr3[n]), []);
        //用自己的reduce改写filter
        let scores = [95, 91, 59, 55, 42, 82, 72, 85, 67, 66, 55, 91];
        let scores2 = reduce(
          scores,
          (sum, n) => sum.concat(n > 65 ? n : []),
          []
        );
        console.log(scores2); //  [95,91,82,72,85,67,66,91]
        ```
