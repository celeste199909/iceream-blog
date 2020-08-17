const Koa = require("koa")
const Router = require("koa-router")
const KoaStatic = require("koa-static-cache")
const nunjucks = require("koa-nunjucks-2")
const koaBody = require("koa-body")
const mysql2 = require("mysql2")

// 控制器
const mainContronler = require("./controlers/main")
const postControler = require("./controlers/C_posts")
const usersControler = require("./controlers/C_users")

// 实例化app和router
const server = new Koa()
const router = new Router()

// 中间件
server.use(KoaStatic("./public", {
    prefix: "/public",
    dynamic: true
}))
server.use(nunjucks({
    ext: "html", // njk
    path: __dirname + "/views",
    nunjucksConfig: {
        trimblock: true // 防止xss漏洞
    }
}))
server.use(koaBody())


// 首页 路由
router.get("/", mainContronler.index)
router.get("/register", mainContronler.register)
router.get("/login", mainContronler.login)
router.get("/addpost", mainContronler.addpost)

// 查询
router.get("/showposts", postControler.showposts)
// 添加
router.post("/addpostHandle", postControler.addpost)

// 用户 路由
router.post("/registerHandle", usersControler.insert)
router.post("/loginHandle", usersControler.verify)


// 路由中间件
server.use(router.routes())

server.listen(80, () => {
    console.log("http://localhost:80")
})