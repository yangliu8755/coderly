
// 使用 原生 创建 web 服务器
let http = require('http');

let app = http.createServer((req,res,next)=>{
     console.log(req)
     res.end('adasd')
     

})
app.listen(8000,'0.0.0.0',()=>{
    console.log('服务器 已经启动')

})