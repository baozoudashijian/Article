(function(graph) {
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
            require('./src/app.js')
        })({"./src/app.js":{"dependecies":{"./components/options.js":"./src/components/options.js"},"code":"\"use strict\";\n\nvar _options = _interopRequireDefault(require(\"./components/options.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// import './components/index.css'\nvar Animal = /*#__PURE__*/function () {\n  function Animal(options) {\n    _classCallCheck(this, Animal);\n\n    var name = options.name,\n        age = options.age,\n        gender = options.gender; // 姓名\n\n    this.name = name; // 年龄\n\n    this.age = age; // 性别\n\n    this.gender = gender;\n  }\n\n  _createClass(Animal, [{\n    key: \"getInfo\",\n    value: function getInfo() {\n      console.log(this.name);\n      console.log(this.age);\n      console.log(this.gender);\n    }\n  }]);\n\n  return Animal;\n}();\n\nnew Animal(_options[\"default\"]).getInfo();"},"./src/components/options.js":{"dependecies":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n// import options2 from './options2.js'\nvar _default = {\n  name: 'wang',\n  age: 18,\n  gender: '男'\n};\nexports[\"default\"] = _default;"}})