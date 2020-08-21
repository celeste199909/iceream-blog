const mysql2 = require("mysql2")

let db = mysql2.createConnection({
    host: "112.124.18.251",
    port: "3306",
    database: "mysite",
    user: "root",
    password: "mysql1099"
    // host: "localhost",
    // port: "3306",
    // database: "mysite",
    // user: "root",
    // password: ""
})

module.exports = db