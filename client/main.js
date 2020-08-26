const Koa = require("koa")
const Router = require("koa-router")
const KoaStatic = require("koa-static-cache")
const proxy = require('koa-server-http-proxy');

const fs = require("fs")

const server = new Koa()
const router = new Router()

// proxy
// webpack -> vue -> react
server.use(proxy('/api', {
    // http://localhost:9999/api/getPhotos

    target: 'http://localhost:8080',
    // http://localhost:8081/api/getPhotos
    pathRewrite: {
        // http://localhost:8081/getPhotos
        '^/api': ''
    }
}));
// 中间件
server.use(KoaStatic("./static", {
    prefix: "/static",
    dynamic: true
}))

// 路由
router.get("/", ctx => {
    ctx.redirect("/static/views/index.html");
    // ctx.body = fs.readFileSync("./static/views/index.html").toString();
})
server.use(router.routes())

server.listen(80, () => {
    console.log("http://localhost:80")
})