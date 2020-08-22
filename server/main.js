const Koa = require("koa")
const Router = require("koa-router")
const KoaStatic = require("koa-static-cache")
const koaBody = require("koa-body")

const db = require("./models/M_main")

// 实例化app和router
const server = new Koa()
const router = new Router()

// CORS 跨域处理
server.use(async (ctx, next) => {
    // let requestOrigin = ctx.header.origin;
    ctx.set('Access-Control-Allow-Origin', 'http://localhost');
    await next();
})
server.use(KoaStatic("./public", {
    prefix: "/public",
    dynamic: true
}))

server.use(koaBody())

// 获取所有博客(index)
router.get("/getAllPosts", async ctx => {
    let [posts] = await db.getAllPosts()
    // console.log(posts);
    ctx.body = posts
})
// 添加一条博客（publish）
router.post("/addAPost", async ctx => {
    let time = new Date()
    let data = ctx.request.body
    await db.addAPost(data.contentmd, data.contenthtml, time)
    ctx.body = {
        code: 1,
        msg: "success"
    }
})
// 获取一条博客的详情(detail)
router.get("/post/:id", async ctx => {

    let id = ctx.url.split("/")[2]
    let [aPost] = await db.getAPostById(id)
    console.log(aPost[0].contenthtml);
    ctx.body = aPost[0].contenthtml
})
// 路由中间件
server.use(router.routes())

server.listen(8080, () => {
    console.log("http://localhost:8080")
})