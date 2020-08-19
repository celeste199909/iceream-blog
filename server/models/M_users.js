const db = require("./model")

module.exports = {
    // 注册时检查用户名是否存在
    registerVerifyUser: function (username) {
        return new Promise((resolve, rejects) => {
            db.query(`select username from users where username=?`, [username], (err, res) => {
                if (err) {
                    rejects(err)
                } else {
                    resolve(res)
                }
            })
        })
    },
    // 注册时向用户表中插入用户名和密码
    insertUser: function (username, password) {
        return new Promise((resolve, rejects) => {
            db.query(`insert into users (username, password) values(?, ?)`, [username, password], (err, res) => {
                if (err) {
                    rejects(err)
                } else {
                    resolve(res)
                }
            })
        })
    },
    // 登录时查询用户名和密码与数据库中的数据是否匹配
    verifyUser: function (username) {
        return new Promise((resolve, rejects) => {
            db.query(`select identity,username,password from users where username=?`, [username], (err, res) => {
                if (err) {
                    rejects(err)
                } else {
                    resolve(res)
                }
            })
        })
    }
}