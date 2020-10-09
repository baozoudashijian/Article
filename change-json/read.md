## 城市联动需求
###前言

接到需求选择城市联动, 提供的city.json文件不符合antd cascader格式为此我们需要转换.

###问题

本想通过fs.writeFile api去写一个文件, 但是写成的city1失败

###解决

使用webpack打包, 新建html文件引入webpack打包后的文件. 复制console的json文件

###亮点

使用递归去转换数据

转换一次 vs 转换两次