# DOM 事件

## 文档用途

- 这个文档是俺的知识积累用的
- 这里主要是`基础知识的阐述`和一些`API`的列举
- 详细的用法什么的可能会在子文件夹中不定期追加

## 干啥用的?

- `用户交互`呀`渲染模型中发生的事情`什么的
- 想要监听到，然后做点什么事情的时候用的东西

## 有哪些？

- [文档等着你](https://developer.mozilla.org/zh-CN/docs/Web/Events)

### 其实是上面的目录

1. 资源事件
   1. 除了`beforeunload`没怎么用到过
2. 网络事件
   1. `focus` `blur`经常用到
3. `WebSocket`事件
   1. 没用过欸
4. 会话历史事件
   1. 没用过欸
5. CSS 动画事件
   1. 没用过欸
6. CSS 过渡时间
   1. 没用过欸
7. 表单事件
   1. `submit`经常用`reset`第一次知道 w
8. 打印事件
   1. 没用过欸 不过感觉应该蛮常用？
9. 文本写作时间
   1. 没用过欸
10. 视图事件
    1. 没用过欸 不过感觉应该蛮有用欸`resize`什么的
11. 剪切板事件
    1. 没用过欸 不过感觉很有用
12. 键盘事件
    1. 经常用..
13. 鼠标事件
    1. 经常用
14. 拖放事件
    1. 没用过 感觉好神奇呀还有这种 ww
15. 媒体事件
    1. 没用过欸
16. 进度事件
    1. 没用过
17. 储存事件
    1. `storage`用过
18. 更新事件
    1. 没用过
19. 值变化事件
    1. 就用过`readystatechange`欸
20. 未分类事件
    1. 没用过

## 一些基础知识

### 事件委托

- 就是孩子的事件也会被父级监听到
- 俗称冒泡

### 怎么阻止事件冒泡

- `e.stopPropagation();`
- 一般来说不是特别需要都是阻止冒泡的

### 怎么阻止默认动作

- `e.preventDefault();`

### 方便你理解

```javascript
/**
 * 现在要实现一个功能
 *点击item1就在控制台打印出item1 以此类推...
 *正常来想的话
 *三个dom每个上面绑一个onclick然后打印出innerText么好了
 */

item1.onclick = e => {
  console.log(e.target.innerText);
};
item2.onclick = e => {
  console.log(e.target.innerText);
};
item3.onclick = e => {
  console.log(e.target.innerText);
};
/**
 *搞定
 *不过JS还提供一种姿势
 *就是反正你点孩子身上也就是点到他们爸爸上面嘛
 *如果能在他爸爸上绑一个事件可以完成需求的话
 *写起来功夫也少点
 *实际内存也消耗的少点
 */
baba.onclick = e => {
  console.log(e.target.innerText);
};
/**
*这个就是事件委托

*但是有一天产品经理突然又闹了
*说是item1的时候要打印出item4
*怎么办？
*方法有2种
*baba的里面设分歧 如果是item1的话xxx
*item1的onclick取消对baba的事件委托 然后写新需求
*/
item1.onclick = e => {
  e.stopPropagation();
  console.log(`item4`);
};
/**
*这个就是取消冒泡

*oh 栗子举得不是很好
*还有个知识点就是 默认事件
*有一些DOM因为历史原因会有默认事件
*就是自带的 我们明明没写但是有的事件
*然后好死不死的居然看不到..俗称隐性
*比如表单里的submit
*可以用preventDefault();来阻止
*/
submit.onclick = e => {
  e.preventDefault();
};
//完
```
