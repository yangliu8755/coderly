// 数据响应式原理
// 1 在mvvm原理中有写 通过Object.defineProperty() 将对象和数组进行深度检测
// 页面首次加载时 会执行 render 函数会渲染某一个组件 此时组件中的template 模板会 首次应用到该组件的data
// 数据 被首次应用的数据 会加载到 响应式 系统中 当这些数据 再次 变化时watcher 会派发更新 此时 将 
// watcher 加入到任务队列中 通过 nextTick 将watcher 加入到微任务队列中
// nextTick 伪代码
function nextTick (fun){

    Promise.resolve().then(fun)
}
// 主线程执行完毕后 会执行 微任务队列中的 代码 此时会执行 watcher watcher 中有 render 函数 
// 执行watcher 时，也就是执行了 render 函数 再次收集依赖时，当数据更新时 会进行派发更新 形成闭环

// 需要注意的点
// 1 对象深度检测的是 对本身和对象内的属性 vue 2.0 对象的 添加和 删除属性 不会 加到响应式系统中
// 2 数组检测的是数组本身,数组的 push pop 等不会加入到 响应式 系统中 但vue 重写了数组的原型  
// 3 重写的原型 指向了数组的原型 形成原型链





