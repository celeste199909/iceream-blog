const koa = require("koa")
const Router = require("koa-router")
const static = require("koa-static")
const fs = require("fs")
const app2 = require("./admin.js")

const app = new koa()
const router = new Router()


router.get("/", (ctx) => {
    // console.log("hello")
    ctx.render("index.html")
})
// router.get("/data/:name", (ctx) => {
//     console.log(ctx.url);
//     ctx.res.setHeader("Content-Type", "text/plain;charset=utf-8")
//     let practices = fs.readFileSync(__dirname + ctx.url).toString()
//     console.log(practices);
//     ctx.res.write(practices)
// })

// router.get("/detail/:name", (ctx) => {
//     // console.log("detail");
//     console.log(ctx.url);
//     // url = 
//     // ctx.render("detail.html")
//     ctx.redirect(`/practices/${name}`)
// })
// router2.get("/", (ctx) => {
//     ctx.body = 'Administrator'
// })

app.use(static(__dirname + "/client"))
app.use(static(__dirname + "/data"))

app.use(router.routes())

app.listen(80, () => {
    console.log("http://localhost:80")
})
