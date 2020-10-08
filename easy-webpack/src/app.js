// const options = require('./components/options')
/*
* js和css都是一个模块, 都会保存其依赖的路径.
* */
import options from './components/options.js'
// import './components/index.css'

class Animal {

    constructor(options) {
        const { name, age, gender } = options

        // 姓名
        this.name = name;
        // 年龄
        this.age = age;
        // 性别
        this.gender = gender;
    }

    getInfo() {
        console.log(this.name)
        console.log(this.age)
        console.log(this.gender)
    }

}

new Animal(options).getInfo()