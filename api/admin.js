// 管理员相关的路由
// 该路由需要用到的nodejs内置模块需要在该文件引入，而中间件只要在mian.js引入一次即可
const fs = require("fs")
const Router = require("koa-router")
const router = new Router()

// 管理员，登录
router.get("/login", async (ctx) => {
    // await ctx.res.write("/admin/login.html")
    // ctx.body = "kk"
    ctx.res.setHeader("Content-type", "text/html;charset=utf-8")
    let content = fs.readFileSync(__dirname + "/../client/admin/login.html")
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
// 当用户登录出错是跳转到错误页面
router.get("/error", (ctx) => {
    ctx.res.setHeader("Content-type", "text/html;charset=utf-8")
    let content = fs.readFileSync(__dirname + "/../client/admin/error.html")
    ctx.body = content
})
// 当密码输入正确时进入管理页
router.get("/manage", (ctx) => {
    // 登录成功 ==》使用cookie记录登录状态 ==》判断是登录状态则进入管理页面
    // 以此避免用户之间修改url进入管理页
    let loginStatus = ctx.cookies.get("isLogin")
    if (loginStatus === "Yes") {
        // 是登陆状态 ==》进入登录页
        ctx.res.setHeader("Content-type", "text/html;charset=utf-8")
        let content = fs.readFileSync(__dirname + "/../client/admin/manage.html")
        ctx.body = content
    } else {
        // 不是登录状态，则重定向到登录页
        ctx.redirect("/login")
    }
})

module.exports = router