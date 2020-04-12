# CSS 基础

1. 老李的同事[老赖发明的](https://www.w3.org/People/howcome/p/cascade.html)
2. CSS 基本概念
   1. 层叠样式表
   2. 盒模型
   3. `block`/`inline`/`inline-block`
   4. 文档流`Normal Flow`
3. 语法
   1. 样式语法
   2. `@`语法
4. 调试 `border`调试大法
5. 文档 `MDN`
6. 标准制定者 `w3c`
7. 学习方法 `CRM`
8. CSS 会有些坑 碰到了调查一下写一篇 blog 就好
   1. 文档流
   2. 古典`float`三件套
   3. `fixed`怕`transform`等等
   4. 层叠上下文
      1. 明明`z-index`比你大却在你下面的故事
      2. `z-index=9999`是菜 b
      3. 要学会管理`z-index`
      4. `-2/-1/0/1/2` 够用了
   5. `margin`合并
   6. `负margin`
   7. `移动端fixed`很多坑据说
9. 一些习惯
   1. 老手 CSS 从大写到小据说 果然俺是菜鸡 w
   2. 目前来说一个`flex布局`可以打天下了 用起来非常舒服
   3. 用`class`来改样式，尽量不要用`style.xxx=xxx`
   4. 实在没有设计稿就自己画
      1. `Figma`
      2. `Balsamiq`
      3. `Adobe XD`
      4. `墨刀`
10. 一些小技巧
    1. `Rendering>Paint flashing`
    2. `left:100%`
11. 走向大神的知识
    1. [渲染树构建，布局，以及绘制](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction)
    2. [JS 更新样式的时候的渲染原里 以及如何优化 google 写的 6 篇文章](https://developers.google.com/web/fundamentals/performance/rendering/)
    3. [CSSTriggers](https://csstriggers.com/)
       - 文章太长了 CSS 动画优化 简洁版
         - JS 优化
           - 用 requestAnimationFrame 代替 setTimeout 或 setInterval
         - CSS 优化
           - 使用 will-change 或 translate
    4. 浏览器内核
       1. `Webkit` 苹果谷歌
       2. `Blink` 谷歌 Opera
