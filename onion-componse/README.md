## compost传入参数的三种情况

compose函数会根据传入参数个数的不同, 做相应不同的处理.

### 传入零个参数

```
    if (funcs.length === 0) {
        return arg => arg
    }
```
当不传入参数时, 返回一个匿名函数, 这个匿名函数传入什么参数就输出什么参数.

此时, nextChain === next.

### 传入一个参数

传入一个参数(middleware) 返回该middleware, 传递参数的状态类似闭包的应用, 依次传递多个参数.

### 传入三(多)个参数

执行顺序:

我们在上面得知了 chain 最终是形如(...args) => fooMiddleware(barMiddleware(bazMiddleware(...args)))的函数。因此当传入 next 函数时，内部执行步骤可以分为下述几步：

第一步，执行 chain 函数（也即是 nextWrapper#2），从 compose 的函数组合从内至外，next 参数首先交由 bazMiddleware 函数执行，打印日志后，返回了函数 next_from_baz。

第二步，next_from_baz 立即传入 nextWrapper#1，返回了 fooMiddleware(barMiddleware(...args))。因此，barMiddleware 函数接收的期望 next 参数，其实并不是我们一开始的 next 函数了，而是 bazMiddleware 函数执行后返回的 next_from_baz。barMiddleware 收到 next 参数开始执行，打印日志后，返回了 next_from_bar 函数。

第三步，同理，fooMiddleware 函数接收的期望 next 参数是 barMiddleware 函数执行后返回的 next_from_bar。fooMiddleware 收到 next 参数开始执行，打印日志并返回了 next_from_foo 函数。
所以此时我们此时可知，运行完 chain 函数后，实际上 nextChain 函数就是 next_from_foo 函数。