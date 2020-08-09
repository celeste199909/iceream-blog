// 前端首页路由处理
const Router = require("koa-router")
const router = new Router()

router.get("/", (ctx) => {
    ctx.render("index.html")
})

module.exports = router