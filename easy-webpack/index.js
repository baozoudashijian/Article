const fs = require('fs')
const path = require('path')
// 使用它获取入口文件的AST
const parser = require('@babel/parser')
// 获取入口文件依赖的模块
const traverse = require('@babel/traverse').default
// 将AST语法树转换成浏览器可执行的代码.
const {transformFromAst} = require('@babel/core')
const options = require('./webpack.config')

const Parser = {
    getAst: path => {
        // 读取入口文件
        console.log(path)
        const content = fs.readFileSync(path, 'utf-8')
        // 将文件内容转化成AST抽象语法树.
        return parser.parse(content, {
            sourceType: 'module'
        })
    },
    getDependecies: (ast, filename) => {
        // 保存入口文件依赖的路径
        // {
        //     './components/options': './src\\components\\options',
        //     './components/index.css': './src\\components\\index.css'
        // }
        const dependecies = {}

        traverse(ast, {
            // 依赖模块的路径, 目前只针对import语句引入的模块, commonjs模块引入的不会保存.
            ImportDeclaration({ node }) {
                // node等于入口文件中每个import语句的AST语法枝.
                // console.log(node)
                // 获取了./src
                const dirname = path.dirname(filename)
                // 保存依赖模块的路径, 之后生成依赖关系图需要用到.
                const filepath = './' + path.join(dirname, node.source.value)
                dependecies[node.source.value] = filepath.split(path.sep).join('/')
            }
        })
        return dependecies
    },
    getCode: ast => {
        const { code } = transformFromAst(ast, null, {
            presets: ['@babel/preset-env']
        })
        return code
    }
}

class Compiler {
    constructor(options) {
        // webpack参数
        const {entry, output} = options;
        // 入口
        this.entry = entry;
        // 出口
        this.output = output;
        // 模块
        this.modules = [];
    }

    // 构建启动
    run() {
        const info = this.build(this.entry)
        this.modules.push(info)
        this.modules.forEach(({dependecies}) => {
            // console.log(dependecies)
            // 判断有依赖对象, 递归所有依赖项.
            if (dependecies) {
                for (const dependency in dependecies) {
                    this.modules.push(this.build(dependecies[dependency]))
                }
            }
        })
        // 生成依赖关系图
        const dependencyGraph = this.modules.reduce(
            (graph, item) => ({
                ...graph,
                [item.filename]: {
                    dependecies: item.dependecies,
                    code: item.code
                }
            }),
            {}
        );
        // console.log(dependencyGraph, '依赖关系图')
        this.generate(dependencyGraph)
    }

    build(filename) {
        const {getAst, getDependecies, getCode} = Parser
        const ast = getAst(filename)
        // console.log(ast)
        const dependecies = getDependecies(ast, filename)
        // console.log(dependecies)
        const code = getCode(ast)
        return {
            filename,
            dependecies,
            code
        }
    }

    // 重写require函数, 输出bundle
    generate(code) {
        // 输出文件路径
        const filePath = path.join(this.output.path, this.output.filename)

        const bundle = `(function(graph) {
            function require(module) {
                console.log(1)
                function localRequire(relativePath) {
                    return require(graph[module].dependecies[relativePath])
                }
                var exports = {};
                (function(require, exports, code) {
                    eval(code)
                })(localRequire, exports, graph[module].code)
                return exports;
            }
            require('${this.entry}')
        })(${JSON.stringify(code)})`
        // 文件内容写入到文件系统
        fs.writeFileSync(filePath, bundle, 'utf-8')
    }
}

new Compiler(options).run()