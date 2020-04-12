# HTML 概论

1. 历史课

   1. 1990~老李创造了万维网
   2. `www = URL + HTTP + HTML`
   3. 从此用户通过输入`URL`就可以看到`HTML`了

2. 其他

   1. 历史的小知识

      - [有一天老李说"俺发明了 HTML"的博客](https://web.archive.org/web/20100131184344/http:/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)
      - 最初的 HTML 标签 18 个 现在还活着的有 11 个
      - 现在的 HTML 标签 大概 110 个
      - but 搜呀 `mdn` HTML5
      - `W3C` 老李创办的 标准制定者

   2. 中国的`H5`是指`手机页面`
   3. 关于默认样式
      - 为啥会存在这个东西？ -> 因为 HTML 比 CSS 先诞生
      - [干掉再说](https://gist.github.com/FrankFang/df5e57a0799823ed89a960a642b3a1e2)
      - 关于`*`老师认为是都市传说 所以用
   4. [网道 HTML 教程](https://wangdoc.com/html/index.html)

3. 关于 HTML5

   - 新标签新属性
   - 新的通信技术 `WebSockets` `WebRTC`(以前需要后台 现在可以直接靠前端搞定直播 不过不是很流行 老师说因为太新了)等
   - 离线存储技术 `LocalStorage` 断网检测
   - 多媒体技术 视频 音频
   - 图像技术 Canvas SVG WebGL(太高端了 这次不讲到时候自己去搜着玩)
   - 相关设备技术 摄像头触摸屏
   - 新的样式技术 CSS3 的 `Flex布局` `Grid布局` (感谢上苍)

4. 学习 HTML

- 标准制定者 `W3C`
- 语法
  - 注释 `ctrl ?`
  - DOCTYPE
    - <!DOCTYPE html> 告诉我们这个文件是啥语言 左边那个就是`html`
  - 有内容标签
    - 主要内容标签
      - ol li
      - ul li
      - dl dt dd
      - pre
      - hr
      - br
      - a
      - em
      - strong
      - code
      - q
      - blockquote
  - 无内容标签
  - 属性
    - 全局属性
      - id="xxx" 原来 xxx.直接可以拿 DOM！！好厉害
      - class
      - style
      - contenteditable 可以编辑！！任何元素！！
      - hidden 消失 css 提供的是`display none`
      - tabindex 按`Tab`键的时候的顺序
        - `1~` 按大小跳
        - `0` 是最后
        - `-1` 跳掉
      - title hover 时候会出现的字
    - 非全局属性
- SVG
