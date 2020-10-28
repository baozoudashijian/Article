## 绘制九宫格

## handleClick传递参数

handleClick传递的实参,卧槽!

注: 实参和形参实际是在父组件定义的, 子组件其实就是个工具人(负责调用)

## 受控组件

Board组件完全控制了Square组件. 我们把 Square组件称之为 "受控组件".

## 创建数组的副本

squares.slice()

## 数据的不可变性

## "X" and "O" 轮替

类似开关

## concat

concat() 方法可能与你比较熟悉的push方法不同, 他把并不会改变原来的数组, 所以我们推荐concat()

## 状态提升
 
 状态提升中感觉最难的就是方法传递参数.
 
## map返回undefined

```$xslt
const moves = history.map((step, move) => {
        // move等于0的话就是回到初始状态.
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li>
                <button onClick={() => {
                }}>{desc}</button>
            </li>
        )
    })

``` 

## 时间返回

```$xslt
        
        const [stepNumber, setStepNumber] = useState(0)
        const historyCopy = history.slice(0, stepNumber + 1);
        const current = historyCopy[0, historyCopy.length - 1];

```

### Mission Complete