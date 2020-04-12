//现在要实现一个功能
//点击item1就在控制台打印出item1 以此类推...
//正常来想的话
//三个dom每个上面绑一个onclick然后打印出innerText么好了
// item1.onclick = e => {
//   console.log(e.target.innerText);
// };
// item2.onclick = e => {
//   console.log(e.target.innerText);
// };
// item3.onclick = e => {
//   console.log(e.target.innerText);
// };
//搞定
//不过JS还提供一种姿势
//就是反正你点孩子身上也就是点到他们爸爸上面嘛
//如果能在他爸爸上绑一个事件可以完成需求的话
//写起来功夫也少点
//实际内存也消耗的少点
baba.onclick = e => {
  console.log(e.target.innerText);
};
//这个就是事件委托

//但是有一天产品经理突然又闹了
//说是item1的时候要打印出item4
//怎么办？
//方法有2种
//baba的里面设分歧 如果是item1的话xxx
//item1的onclick取消对baba的事件委托 然后写新需求
item1.onclick = e => {
  e.stopPropagation();
  console.log(`item4`);
};
//这个就是取消冒泡

//oh 栗子举得不是很好
//还有个知识点就是 默认事件
//有一些DOM因为历史原因会有默认事件
//就是自带的 我们明明没写但是有的事件
//然后好死不死的居然看不到..俗称隐性
//比如表单里的submit
//可以用preventDefault();来阻止
submit.onclick = e => {
  e.preventDefault();
};
