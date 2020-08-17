const postsModel = require("../models/M_posts")

module.exports = {
    showposts: async (ctx, next) => {
        let res = await postsModel.getPosts()
        // console.log("showposts");
        console.log(res);
    },
    addpost: async (ctx) => {
        let title = ctx.request.body.title
        let profile = ctx.request.body.profile
        let content = ctx.request.body.content
        let time = new Date()
        let tags = ctx.request.body.tags
        // 把tags数组转成字符串存到数据库里
        tags = JSON.stringify(tags)
        let postData = [title, profile, content, time, tags]
        postsModel.addPost(postData)
        ctx.body = "添加成功"
    }
}