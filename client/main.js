const Koa = require("koa")
const Router = require("koa-router")
const KoaStatic = require("koa-static-cache")

const fs = require("fs")

const server = new Koa()
const router = new Router()

// 中间件
server.use(KoaStatic("./static", {
    prefix: "/static",
    dynamic: true
}))

// 路由
router.get("/", ctx => {
    ctx.body = fs.readFileSync("./static/views/index.html").toString()
})
server.use(router.routes())

server.listen(80, () => {
    console.log("http://localhost:80")
})