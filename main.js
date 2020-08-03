const express = require('express')
// const exStatic = require("express-static");


const app = express();

app.get('/', (req, res) => {
    res.redirect('index.html')
})
app.get('/practices/water', (req, res) => {
    // res.redirect('index.html')
    res.redirect('water/index.html')
})

app.use(express.static('./client'));
// app.use(express.static('./practices'));

// app.use(exStatic('./practices'));

app.listen(80, () => {
    console.log("server is running! http://localhost:80");
})


