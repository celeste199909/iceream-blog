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
        // 分页 类似二维数组
        // [
        //     [1, 2, 3, 4, 5, 6, 7, 8]
        //     [9, 10, 11]
        // ]
        let onePage = 4; // 一页显示的数量4个
        let currentPage = ctx.query.page || 1; // 当前页 客户端传 | 默认1

        let start = (currentPage - 1) * onePage; // 本页开始的下标 (当前页数 - 1) * 一页显示的数量
        let end = start + onePage; // 本页结束的下标，就是开始下标 + 结束下标

        let pagesCount = Math.ceil(posts.length / onePage) // 总共有多少页 数组长度 / 一页显示的数量
        // console.log(pagesCount);
        let onePageData = posts.slice(start, end) // 本页应该渲染的数据
        // console.log(onePageData);
        await ctx.render("index", {
            // posts: posts,
            pagesCount: pagesCount,
            onePageData: onePageData,
            currentPage: currentPage
        })
    },

    login: async (ctx) => {
        await ctx.render("login")
    },

    register: async (ctx) => {
        await ctx.render("register")
    },

    addpost: async (ctx) => {
        let loginStatus = ctx.cookies.get('loginStatus')
        if (loginStatus === "login") {
            await ctx.render("addpost")
        } else {
            ctx.redirect("/login")
        }
    }

}