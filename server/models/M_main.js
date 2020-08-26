const mysql2 = require("mysql2/promise")
let connection;

(async function () {
    connection = await mysql2.createConnection({
        host: "localhost",
        port: "3306",
        database: "test",
        user: "root",
        password: "123"
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
    },
    // 获取用户名密码
    getAUser: async function (username, password) {
        return await connection.query("select * from admin where username=? and password=?", [username, password])
    },
    // 保存token
    addAToken: async function (token, id) {
        return await connection.query("update admin set token=? where id=?", [token, id])
    },
    // 查询token
    getAToken: async function (username) {
        return await connection.query("select token from admin where username=?", [username])
    }
}

module.exports = db