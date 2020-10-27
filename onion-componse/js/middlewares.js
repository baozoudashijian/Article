
function next(action) {
    console.log("[next]", action);
}

function fooMiddleware(next) {
    console.log("[fooMiddleware] trigger")

    return function next_from_foo(action) {
        console.log("[fooMiddleware] before next")
        next(action)
        console.log("[fooMiddleware] after next")
    }
}

function barMiddleware(next) {
    console.log("[barMiddleware] triggle")

    return function next_from_bar(action) {
        console.log("[barMiddleware] before next")
        next(action)
        console.log("[barMiddleware] after next")
    }
}

function bazMiddleware(next) {
    console.log("[bazMiddleware] triggle")

    return function next_from_baz(action) {
        console.log("[bazMiddleware] before next")
        next(action)
        console.log("[bazMiddleware] after next")
    }
}