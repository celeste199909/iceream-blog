const usersModel = require("../models/M_users")

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
        let res = await usersModel.verifyUser(username, password);
        if (res.length === 0) {
            ctx.body = "用户名或者密码错误"
        } else {
            ctx.body = "login success"
        }
    },
}