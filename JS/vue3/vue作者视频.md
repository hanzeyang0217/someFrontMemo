# 关键词
## vue3 重要的新功能
1. composition API
   1. 逻辑组合
   2. vue底层的响应式的API暴露给了用户
   3. 其实vue2就有了 这次vue3暴露给用户了
2. 一个组件可以支持多个元素
3. 尺寸变小了
   1. 不用的不打包
4. 利用runtime和编译器做了很多优化?
## vite
## 别的
1. vue3用了现在浏览器的proxy取代了之前的Object.defineProperty
2. 现代浏览器都已经支持原生的ES module import
   1. 浏览器在使用 script type import equal module的tag去引用的时候 就当成一个module然后再去请求
   2. 好处是引用多少就在服务器端**编译**多少 开发效率会高
   3. 生产环境是用了rollup打包
3. 关于ts
   1. 没用官方编译器tsc
   2. 用了esbuild 是用go写的 比官方的快20倍左右
4. 改进vue2
   1. 以前每创造一个组件开销很大
      1. 需要在this上加很多东西
      2. 而且都是用Object.defineProperty去定义的
   2. 现在 没听懂 关键词proxy [1508有空复习](https://www.bilibili.com/video/BV1qC4y18721?from=search&seid=8037478132104591349)
   3. 虚拟dom的逻辑改善
5. vue-template-explorer
   1. https://github.com/vuejs/vue-template-explorer
   2. [vue3](https://vue-next-template-explorer.netlify.app/#%7B%22src%22%3A%22%3Cdiv%3EHello%20World!%3C%2Fdiv%3E%22%2C%22options%22%3A%7B%22mode%22%3A%22module%22%2C%22prefixIdentifiers%22%3Afalse%2C%22optimizeImports%22%3Afalse%2C%22hoistStatic%22%3Afalse%2C%22cacheHandlers%22%3Afalse%2C%22scopeId%22%3Anull%2C%22inline%22%3Afalse%2C%22ssrCssVars%22%3A%22%7B%20color%20%7D%22%2C%22bindingMetadata%22%3A%7B%22TestComponent%22%3A%22setup-const%22%2C%22setupRef%22%3A%22setup-ref%22%2C%22setupConst%22%3A%22setup-const%22%2C%22setupLet%22%3A%22setup-let%22%2C%22setupMaybeRef%22%3A%22setup-maybe-ref%22%2C%22setupProp%22%3A%22props%22%2C%22vMySetupDir%22%3A%22setup-const%22%7D%7D%7D)
6. SSR??
7. 虚拟节点转到buffer??
8. 最大化利用node的异步状态
9. 服务器端渲染代码 他写的很得意 很精简
## composition API
1. 内部方法 vue3 **reactive**
2. vue2 Vue.observable
3. 把对象给他 返回响应式的对象
4. vue2 里面的api监视用的 叫watch
5. vue3 **叫watchEffect**
6. vue3 里面传对象都没事儿 不过非对象需要用**ref**去包一下才能响应式
7. 总结
   1. 对象没事儿 非对象需要用ref包裹
   2. 包裹以后通过 内部的?reactive方法处理 返回响应式对象
   3. 通过watchEffect监听响应式对象做出反应
   4. 背后实现是proxy?
8. effect代码貌似很经典?
