const mysql2 = require("mysql2")

let db = mysql2.createConnection({
    host: "",
    port: "3306",
    database: "",
    user: "root",
    password: ""
})

module.exports = db