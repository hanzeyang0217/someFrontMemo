# 用NodeJS来感受一下HTTP

1. 前置条件

   - ☑ 安装 node.js 8+
   - ☑ 理解 IP 和端口
   - ☑ 理解 URL 路径和查询参数

2. 基本概念

   - 服务器就是没有屏幕的电脑
   - 前端代码一般运行在客户端
   - 后端代码一般运行在服务端

3. 如何发请求？

   - 浏览器 地址栏
   - curl 命令
   - 一个概念
     - 用户代理 `User-Agent`

4. 请求

   - 基本概念
     - `请求行`请求动词 GET 拿 / POST 上传 / 别的 `-X`
       - `curl -v -X POST --data '来啦弟弟' http://localhost:8888`
       - `curl -v -X GET http://localhost:8888` 貌似默认就是 GET 省略也 OK 的
     - `请求行`路径和查询函数 协议名/版本
       - `curl -v -X POST --data '来啦弟弟' http://localhost:8888/xxx/?jb=hi`
     - `请求头`Host: 域名 / IP 加端口
     - `请求头`Accept: 告诉服务器 想要返回的类型 `-H` //话说这个 H 是 Header 的意思吧 w
       - `curl -v -X POST --data '来啦弟弟' -H 'Accept:text/html' http://localhost:8888/xxx/?jb=hi`
     - `请求头`Content-Type: 请求体格式 //上传的时候用 GET 木有用 当然别的还没学也有可能有用
       - `curl -v -X POST --data '来啦弟弟' -H 'Content-Type:text/html' http://localhost:8888/xxx/?jb=hi`
     - 回车
     - `请求体` //上传的时候用 GET 木有用 当然别的还没学也有可能有用
       - `curl -v -X POST --data '来啦弟弟' http://localhost:8888`
   - 别的
     - 大小写不敏感

5. 响应

   - 基本概念
     - `状态行` 协议名/版本
       - 改不了
     - `状态行`状态码 状态字符串
       - `200` 成功
       - `404` 找不到
       - `response.statusCode`
     - `响应头`Content-Type: 响应体的格式
       - `response.setHeader("Content-Type", "text/html;charset=utf-8";`
     - `响应体`
       - `response.write(`内容`)`
       - `response.end();` //响应结束 返还给用户

6. 哪里查资料
   - [`node.js文档`](https://nodejs.org/zh-cn/docs/)
7. 标准制定者？
   - `RFC 2612`等
