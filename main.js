const koa = require("koa")
const Router = require("koa-router")
const static = require("koa-static")
const bodyParser = require("koa-bodyparser")
const fs = require("fs")

const app = new koa()
const router = new Router()

router.get("/", (ctx) => {
    ctx.render("index.html")
})
// 管理员，登录
router.get("/login", async (ctx) => {
    // await ctx.res.write("/admin/login.html")
    ctx.body = "kk"
    ctx.res.setHeader("Content-type", "text/html;charset=utf-8")
    let content = fs.readFileSync(__dirname + "/client/admin/login.html")
    // console.log(content);
    // ctx.res.write(content)
    ctx.body = content

})
// 当表单提交时，处理表单，判断密码是否正确，正确则进入manage页面，否则进入error页面
router.post("/handlelogin", (ctx) => {
    if (ctx.request.body.password === "123") {
        console.log("密码正确");
        // 密码正确是设置cookie，存留60分钟
        ctx.cookies.set("isLogin", "Yes", {
            maxAge: 1000 * 60 * 60
        })
        ctx.redirect("/manage")
    } else {
        console.log("密码错误");
        ctx.redirect("/error")
    }
})
router.get("/error", (ctx) => {
    ctx.res.setHeader("Content-type", "text/html;charset=utf-8")
    let content = fs.readFileSync(__dirname + "/client/admin/error.html")
    ctx.body = content
})
router.get("/manage", (ctx) => {
    let loginStatus = ctx.cookies.get("isLogin")
    if (loginStatus === "Yes") {
        ctx.res.setHeader("Content-type", "text/html;charset=utf-8")
        let content = fs.readFileSync(__dirname + "/client/admin/manage.html")
        ctx.body = content
    } else {
        ctx.redirect("/login")
    }
})

app.use(static(__dirname + "/client"))

app.use(bodyParser())

app.use(router.routes())

app.listen(80, () => {
    console.log("http://localhost:80")
})
