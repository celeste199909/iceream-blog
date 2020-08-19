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
        // 使用展开运算符，确保tags一定是一个数组
        let tags = [];
        tags = [...tags, ...ctx.request.body.tags];
        console.log(tags);
        // 把tags数组转成字符串存到数据库里
        tags = JSON.stringify(tags)
        let postData = [title, content, time, tags]
        postsModel.addPost(postData)
        ctx.body = "添加成功"
    }
}