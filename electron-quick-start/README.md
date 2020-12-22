# Electron打包react后台管理项目中遇到的问题

2020.12.22 上午技术总监提出需求, 将后台管理系统打包成exe.

## 配置打包环境

- electron 下载缓慢: 使用cnpm解决
- electron-win32-ai32下载缓慢: npm config set ELECTRON_MIRROR https://npm.taobao.org/mirrors/electron/

## 将React静态资源打包

- 文件路径问题: react项目packagejson添加HomePage:'.', 解决以相对路径加载文件
- electron加载react项目问题: mainWindow.loadFile('./build/index.html') [所有文件都加载完毕, 但是页面空白, 一时间不知所措]
- 路由问题: 页面空白是路由的问题, 将 BroswerRouter ---> HashRouter
