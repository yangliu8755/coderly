 1 虚拟dom是什么？
 虚拟dom就是 普通的js对象
 2 为什么需要虚拟dom 
 通过render 函数生成的 vnode 就是一个 普通的js 对象如果直接操作dom 则 会引起重绘重排 浪费效率
 3 vnode 和 真实dom 直接如何建立联系
 vnode 中有一个属性记录真实dom 当加入响应式系统中的数据改变时 重新执行render 函数生成新的 vnode
 旧的 vnode 通过diff 算法  更改 少量需改动的 真实dom 即可
 4 template 模板和vnode 之间的联系
 template模板通过 compire 编译成 ast 最后ast 转换为 vnode  template 模板中的东西
 都是vnode 中的配置。