const postsModel = require("../models/M_posts")
const moment = require("moment")

module.exports = {
    showposts: async (ctx, next) => {
        let res = await postsModel.getPosts()
        // console.log("showposts");
        console.log(res);
    },
    addpost: async (ctx) => {
        let title = ctx.request.body.title
        let content = ctx.request.body.content
        let time = moment(new Date()).format("YYYY-MM-DD HH-mm-ss")

        // 做判断，确保tags一定是一个数组
        let tags = ctx.request.body.tags;
        // console.log(tags);
        if (tags === undefined) {
            tags = []
        } else if (typeof tags === "string") {
            console.log(tags);
            tags = [tags]
        }
        // console.log(tags);
        // 把tags数组转成字符串存到数据库里
        tags = JSON.stringify(tags)
        let postData = [title, content, time, tags]
        postsModel.addPost(postData)
        ctx.body = "添加成功"
    },
    showdetail: async (ctx) => {
        // console.log(ctx.request.body);
        let id = ctx.url.split("/")[2]
        // console.log(ctx.url.split("/")[2]);
        let aPost = await postsModel.getDetailPosts(id)
        let post = JSON.parse(JSON.stringify(aPost))
        post = post[0]
        // 存进数据库的tags是字符串，所以要转成数组
        post.tags = JSON.parse(post.tags)
        // console.log(post);
        let contents = post.content.split("。")
        await ctx.render("detail", {
            post: post,
            contents: contents
        })
    }
}