const koa = require("koa")
const Router = require("koa-router")
const static = require("koa-static")
const bodyParser = require("koa-bodyparser")
// 引入路由
const index = require("./api/index")
const admin = require("./api/admin")

// 实例化app和router
const app = new koa()
const router = new Router()

// 使用中间件
app.use(static(__dirname + "/client"))
app.use(bodyParser())
// 路由中间件，需要在最后面使用
// 中间件的栈结构还需要理解
app.use(index.routes())
app.use(admin.routes())
app.use(router.routes())

app.listen(80, () => {
    console.log("http://localhost:80")
})