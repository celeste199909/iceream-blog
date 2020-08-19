const usersModel = require("../models/M_users");
const {
    JSON
} = require("mysql2/lib/constants/types");

module.exports = {
    // 用户注册 验证用户名 以及 插入用户信息
    insert: async (ctx) => {
        let username = ctx.request.body.username;
        let password = ctx.request.body.password;
        let res = await usersModel.registerVerifyUser(username)
        if (res.length === 0) {
            let res = await usersModel.insertUser(username, password)
            ctx.body = "注册成功"
        } else {
            ctx.body = "该用户已存在"
        }
    },
    // 用户登录验证
    verify: async (ctx) => {
        let username = ctx.request.body.username;
        let password = ctx.request.body.password;
        let res = await usersModel.verifyUser(username);
        console.log(res);
        // console.log(res[0]);
        // console.log(res[0].identity);

        if (res.length === 0) {
            ctx.body = "用户不存在"
        } else if (res[0].identity !== "administrator") {
            ctx.body = "非管理员，不可发布博客！"
        } else if (res[0].username === username) {
            if (res[0].password === password) {
                ctx.cookies.set(
                    'loginStatus',
                    'login', {
                        // domain: 'localhost', // 写cookie所在的域名
                        path: '/addpost', // 写cookie所在的路径
                        maxAge: 1000 * 60 * 60 * 60 * 2, // cookie有效时长 2 hours
                        overwrite: false // 是否允许重写
                    }
                )
                ctx.redirect("addpost")
            } else {
                ctx.body = "用户名或者密码错误"
            }
        }
    },
}