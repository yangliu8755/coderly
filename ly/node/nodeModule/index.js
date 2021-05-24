// 浏览器环境中 全局 对象 是window 使用 var 变量会 自动  挂载 到 window中

// node 环境中 每个js 文件 都是一个 模块  每个 js 文件 都是 Module 类的 实例对象 使用 var 变量不会 挂载到 全局 global中
//  common js 是模块化 规范。 node 支持 commonjs 导出 模块化 代码 方便提供 接口 给 别人使用。
console.log(module);
// Module {
//     id: '.',
//     path: 'C:\\node\\nodeModule',
//     exports: {},
//     parent: null,
//     filename: 'C:\\node\\nodeModule\\index.js',
//     loaded: false,
//     children: [],
//     paths: [
//       'C:\\node\\nodeModule\\node_modules',
//       'C:\\node\\node_modules',
//       'C:\\node_modules'
//     ]
//   }
var  a = 3
console.log(global)
// Object [global] {
//     global: [Circular],
//     clearInterval: [Function: clearInterval],
//     clearTimeout: [Function: clearTimeout],
//     setInterval: [Function: setInterval],
//     setTimeout: [Function: setTimeout] {
//       [Symbol(nodejs.util.promisify.custom)]: [Function]
//     },
//     queueMicrotask: [Function: queueMicrotask],
//     clearImmediate: [Function: clearImmediate],
//     setImmediate: [Function: setImmediate] {
//       [Symbol(nodejs.util.promisify.custom)]: [Function]
//     }
//   }
let name = 'ly'
let sayName =  ()=>{

     console.log(name)
}
// exports 是 node 底层(c++)帮我们 提前 写好的 一个对象。在单独 js 文件 是一个 模块 中 module.exports= exports;在 代码最上层  实际上 返回的是 module.exports 
// exports 与 module.exports 存的 为 同一 对象的 引用值 

exports.sayName = sayName;
// 将 提前  保存在 module.exports 的对象 替换为 新的 引用 则 require 到的为 新对象
// module.exports = {
     
// }


// 验证module.exports= exports;在代码最上层
exports = 123;