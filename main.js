const koa = require("koa")
const Router = require("koa-router")
const static = require("koa-static")

const app = new koa()
const router = new Router()


router.get("/", (ctx) => {
    // console.log("hello")
    ctx.render("index.html")
})


app.use(static("client"))
app.use(router.routes())

app.listen(8000, () => {
    console.log("http://localhost:8000")
})