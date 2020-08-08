const koa = require("koa")
const Router = require("koa-router")
const static = require("koa-static")
// const fs = require("fs")

const app = new koa()
const router = new Router()


router.get("/", (ctx) => {
    // console.log("hello")
    ctx.res.write(__dirname + "/login.html")
})

app.use(static(__dirname + "/admin"))
// app.use(static(__dirname + "/data"))

app.use(router.routes())

app.listen(1999, () => {
    console.log("http://localhost:1999")
})
