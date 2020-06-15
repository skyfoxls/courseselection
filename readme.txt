课程安排：
    第1个下午：搭建环境  express
    第2个下午：写后端代码
    第3个下午：前后端代码整合

目标：学生管理CMS 
    添加学生
    删除学生
    修改学生
    查询学生

感受一下后端是怎么是写的。
---------------------------------

前后端：
    前端： 
        有界面的一端:网页  Android  iOS  小程序  游戏
            web前端    web就是网页  
            html5前端   网页  app  小程序 .... 
            Android  out 
            iOS  out
            游戏  难
    后端：
        给前端提供数据的，需要数据库的配合。
            java     
            php    out  
            python     out  
                后端（没有明显优势）   
                运维（工资低）  
                爬虫（python的一个亮点）  
                人工智能（本科搞不了）
            c++   非常难 工资非常高   指针 
            go    非常火   公司中都是java php转到go
            .net  out 
            node  后端  通过js代码写代码 
            .... 
---------------------------------
js现在非常厉害：
    1）html5前端   核心就是js 
    2）app  js写的代码打包成android 和 ios 
    3）开发小程序  
    4）开发游戏  网页游戏  小程序里面的游戏 
    5）写后端  node  把js代码跑在node环境  就提供web服务
    ...
---------------------------------

数据库：
    mysql  入门难一点 
    oracle  大型公司才用  
    mongodb  简单  js    选这个

---------------------------------
我们是写后端：
    技术选型：node+express+mongodb+ejs

---------------------------------
node:
    就是JS的运行环境，我们的JS代码可以跑在node里面。

之前的JS的代码是运行在浏览器中的。浏览器是JS的运行环境，NODE也是。

怎么安装这个node环境：
    1）下载node安装包
    2）傻瓜式安装  

证明安装是否OK：
    1）win + r  输入cmd   打开一个cmd窗口
    2）输入node -v  如果弹出一个版本号  表示node安装成功了

安装完node，电脑上自带了一个工具，叫npm。

---------------------------------
安装mongodb数据：
    1）下载地址：https://www.mongodb.com/download-center/community

    大家按笔记安装就OK了

---------------------------------
客户端与服务器交互模型：  http 
    客户端：就是给服务器要数据的
        1）浏览器可以充当客户端
        2）手机上的app
        3）写的代码 
        ... 
    服务器：服务器就是给客户端提供数据  
        web服务器  提供网页服务器
        数据服务器 一台电脑上安装了mongodb 这个电脑就可以充当数据库服务器
        ...
上网的本质：就是数据在客户端和服务器之间进行流动。

---------------------------------
get/post:
    客户端是请求服务器的，最常用的请求方式有get和post。

    get更倾向于给服务器要数据。
    post更倾向于把数据扔给服务器。

---------------------------------
本地服务器都有一个特殊的IP地址：127.0.0.1  
这个特殊的IP地址对应的一个特殊的域名：localhost

---------------------------------
express:
    由于时间的关系，直接上框架，不讲Node基础。

    不习express就是手代码创建一个服务器，提供web服务。

使用express写项目的步骤：
    1） npm init -y    初始化一个配置文件
          初始结果：会在项目下创建一个package.json 
    2） 安装express模块 
          npm i express   需要网络比较好  此时就把这框架安装到项目中了
    3） 开始写代码
         在项目的根目录下面，创建app.js文件 
            let express = require("express")
            let app = express(); // 创建一台服务器

            // 处理客户端的请求 /  
            app.get("/",(req,res)=>{
                // res.send表示响应内容
                res.send("<h1>Hello 客户端~</h1>")
            })

            // 监听一个端口
            app.listen(3000,()=>{
                console.log("服务器启动了~")
            })

    4）运行代码  进入到项目中  通过node app.js 
         这样运行，每一次修改代码都需要重启服务器

         可以安装全局安装一个模块，叫nodemon
         npm i nodemon -g 

         再运行代码时，通过nodemon app.js  好处：修改代码不需要重启

---------------------------------
换源：
    通过npm i express 默认是去国外下载的  速度非常慢  需要把下载源换成国内

换源步骤：
    1）全局安装nrm模块   npm i nrm -g 
    2）通过nrm ls  查看都有哪些源
    3）换源  nrm use taobao  换成国内源   速度快一点 

    换源之后，再去安装，速度就快一点~

---------------------------------
工具有很多：npm  cnpm  yarn  无所谓

---------------------------------
遇到的问题：
    1）网络不给力  npm i nrm -g     ctrl+cc   重新来一次
    2）编码问题   保证你的编辑器使用的编码是utf-8   大陆程序员使用的编码基本上都是utf-8

---------------------------------
什么是静态资源：
    html  css  js  img 都是静态资源

使用express托管静态资源：
    app.use(express.static("public"))  需要把静态资源放到public下面

---------------------------------
MVC:
    M Model 是和数据打交道
    V View  视图  html文件（充当静态资源，也可以充当视图）
    C Controller 控制器  


---------------------------------
分层：
    不要把所有的代码都写在app.js中。 


---------------------------------
什么是模拟引擎：
    就是在html中放js代码，输入真实的数据

//bug
 var wherestr1= { "name":data1.name,"number":data1.number,"pwd":data1.pwd};
        dbo.collection("studentlogin").findOne(wherestr1,function (error,result) { // 返回集合中所有数据
            if (err)throw err;
            else if(result==null)
            {callback("-1")}
            // 把数据传递给控制器
           else{callback("1")}






















