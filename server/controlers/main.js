const postsModel = require("../models/M_posts")

// 事件戳转时间
function time(time = +new Date()) {
    var date = new Date(time + 8 * 3600 * 1000); // 增加8小时
    return date.toJSON().substr(0, 19).replace('T', ' ');
}

module.exports = {
    index: async (ctx, next) => {
        let posts = await postsModel.getPosts()
        posts = JSON.parse(JSON.stringify(posts))
        posts.forEach(element => {
            // 存进数据库的tags是字符串，所以要转成数组
            element.tags = JSON.parse(element.tags)
            element.time = new Date(element.time).getTime()
            element.time = time(element.time);
        });
        await ctx.render("index", {
            posts: posts
        })
    },

    login: async (ctx) => {
        await ctx.render("login")
    },

    register: async (ctx) => {
        await ctx.render("register")
    },

    addpost: async (ctx) => {
        await ctx.render("addpost")
    }

}