const db = require("./model")

module.exports = {
    getPosts() {
        return new Promise((reslove, reject) => {
            let sql = 'select * from posts'
            db.query(sql, (err, rs) => {
                if (err) {
                    reject(err)
                } else {
                    reslove(rs)
                }
            })
        })
    },
    addPost(postData) {
        return new Promise((resolve, reject) => {
            let sql = 'insert into posts (title,content,time,tags) values ( ?,?,?,?)'
            db.query(sql, postData, (err, rs) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(rs)
                }
            })
        })
    }
}