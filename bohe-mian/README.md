## Tips

+ 需要书写完整的路径名称,省略文件名后缀会打包失败
+ 需要在webpack.config.js中的module(一个文件即是一个模块)配置解析.jsx语法的规则
+ 设置webpack打包mode参数 webpack --mode development
+ webpack-cli 3.1.2和3.3.2目录结构不一样.

## 使用的Babel插件

这些东西都是干啥的?

+ @babel-core: 
+ @babel/plugin-transform-runtime
+ @babel/preset-env
+ @babel/preset-react
+ babel-loader

## 把打包好的scritp文件自动添加到index.html
我们打包文件好后需要手动引入打包后的bundle.js太麻烦。
```
html-webpack-plugin
配置打包后的模板: template属性.
    
```



## 控制台输入命令打包完成后,自动启动devServer
```
"start": "webpack --mode development && webpack-dev-server"
```

## webpack版本与webpack-dev-server版本不兼容

使用如下版本解决问题

```
"webpack": "4.44.2",
"webpack-cli": "3.3.12",
"webpack-dev-server": "^3.11.0"

```