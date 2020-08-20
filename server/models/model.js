const mysql2 = require("mysql2")

let db = mysql2.createConnection({
    // host: "localhost",
    // port: "3306",
    // database: "test",
    // user: "root",
    // password: ""
})

module.exports = db
