const Koa = require("koa")
const Router = require("koa-router")
const KoaStatic = require("koa-static-cache")
const koaBody = require("koa-body")
const jsonWebToken = require("jsonwebtoken")
// const koaJwt = require("koa-jwt")

// const cors = require('@koa/cors');

const db = require("./models/M_main")

// 实例化app和router
const server = new Koa()
const router = new Router()
// CORS 跨域处理
// server.use(cors());

// Custom 401 handling if you don't want to expose koa-jwt errors to users
// server.use(function (ctx, next) {
//     return next().catch((err) => {
//         if (401 == err.status) {
//             ctx.status = 401;
//             ctx.body = 'Protected resource, use Authorization header to get access\n';
//         } else {
//             throw err;
//         }
//     });
// });

// // Unprotected middleware
// server.use(koaJwt({
//     secret: 'hgw',
//     passthrough: true
// }).unless({
//     path: ['/', '/login', "/getAPageData", "post", "/loginHandle"]
// }));


server.use(KoaStatic("./public", {
    prefix: "/public",
    dynamic: true
}))

server.use(koaBody())

// 获取所有博客(index)
router.get("/getAPageData", async ctx => { // console.log(" query.page ", ctx.query.page);
    let [posts] = await db.getAllPosts()

    let onePage = 4; // 一页显示的数量4个
    let currentPage = ctx.query.page || 1; // 当前页 客户端传 | 默认1

    let start = (currentPage - 1) * onePage; // 本页开始的下标 (当前页数 - 1) * 一页显示的数量
    let end = start + onePage; // 本页结束的下标，就是开始下标 + 结束下标

    let pagesCount = Math.ceil(posts.length / onePage) // 总共有多少页 数组长度 / 一页显示的数量
    let onePageData = posts.slice(start, end) // 本页应该渲染的数据
    ctx.body = { // posts: posts,
        onePage: onePage,
        pagesCount: pagesCount,
        onePageData: onePageData,
        currentPage: currentPage
    }
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
    // console.log(aPost[0].contenthtml);
    ctx.body = aPost[0].contenthtml;
})

router.get("/login", async ctx => {
    ctx.redirect("http://localhost:80/static/views/login.html");
})
router.post("/loginHandle", async (ctx, next) => {
    let data = ctx.request.body;
    data = JSON.parse(data)
    console.log(data);
    let [user] = await db.getAUser(data.username, data.password);

    if (user.length === 0) {
        ctx.body = {
            msg: "fail"
        }
    } else {
        let id = user[0].id;
        let token = jsonWebToken.sign({
            username: data.username,
            password: data.password
        }, 'hgw');

        db.addAToken(token, id);
        ctx.set("authorization", token)

        ctx.body = {
            msg: "success",
            id: id,
            username: data.username
        }
        // ctx.redirect("http://localhost:80/static/views/publish.html")
    }
})

// 发布时验证是否登录，如果没有登录则跳转到登录界面
router.post("/verify", async (ctx) => { // ctx.body = fs.readFileSync("")
    // console.log(ctx.request.body);
    let data = JSON.parse(ctx.request.body);
    // console.log(data);
    // console.log(ctx.req);
    // ctx.redirect("http://localhost:80/static/views/publish.html");
    let username = data.username;
    let [sqlToken] = await db.getAToken(username);
    if (sqlToken.length !== 0) {
        sqlToken = sqlToken[0].token;
        let token = data.token;
        if (sqlToken === token) {
            // ctx.redirect("http://localhost:80/static/views/publish.html");
            ctx.body = "verify ok";
        } else if (sqlToken !== token) {
            // ctx.redirect("http://localhost:80/static/views/login.html");
            ctx.body = "verify err";
        }
    } else {
        ctx.body = "verify err"
    }
    console.log(sqlToken);
    // console.log(1, token);
    // console.log(2, ctx.request.body);

})
// 路由中间件
server.use(router.routes())

server.listen(8080, () => {
    console.log("http://localhost:8080")
})