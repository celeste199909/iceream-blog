const mysql2 = require("mysql2/promise")
let connection;

(async function () {
    connection = await mysql2.createConnection({
        // host: "112.124.18.251",
        // 本地数据库
        host: "localhost",
        port: "3306",
        database: "mysite",
        user: "root",
        password: "mysql1099"
    })
})();

let db = {
    // 获取所有数据，用于在首页展示(index.html)
    getAllPosts: async function () {
        return await connection.query("select * from posts")
    },
    // 添加一条数据到数据库中(publish.html)
    addAPost: async function (contentmd, contenthtml, time) {
        await connection.query("insert into posts (contentmd,contenthtml,time) values (?,?,?)", [contentmd, contenthtml, time])
    },
    // 按照指定id查找一条博客(detail.html)
    getAPostById: async function (id) {
        return await connection.query("select contenthtml from posts where id=(?)", [id])
    }
}

module.exports = db