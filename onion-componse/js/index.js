
function compose(...funcs) {
    console.log(funcs, 'zrj')
    if (funcs.length === 0) {
        return arg => arg
    }

    if (funcs.length === 1) {
        return funcs[0]
    }

    return funcs.reduce(function reducer(a, b) {
        console.log(a, '123')
        console.log(b, '456')
        return function nextWrapper(...args) {
            return a(b(...args))
        }
    })
}
