## Modal结合Form组件使用

### 这两个Ant-Design组件结合使用的时候经常会出现一些奇怪的问题,故总结于此

+ initialValue直接不变化
+ 数据慢一拍问题
+ 使用Form InitialValue(官方推荐)和使用Form.Item InitialValue的问题

解决: 使用afterClose 和 visible && <Modal />

注: 此问题不再纠结, 直接使用现成案例. 

### 组件更新时不会更新props.

+ 子组件更新时不会更新props
+ 本组件的state没变话的state也是不会更新

注意: 目前项目中不知到是什么问题.

### 这是之前的方式解决问题

这个项目解决问题的方式是属于自己的解决方式(自己在antd中探索出的解决方式),目前个人认为不够优雅, 我决定以网友
北冥有鱼的项目重新架构一遍 
