// 初始化
// let url = "http://localhost:8080";

(function () {
    menuToggle();
    getAllPosts();
})();


// 获取所有博客数据
function getAllPosts() {
    let contentUl = document.querySelector(".content-ul")
    // console.log("all post");
    let xhr = new XMLHttpRequest();
    xhr.open("get", "http://localhost:8080/getAllPosts", true);

    xhr.onload = function () {
        let data = JSON.parse(xhr.responseText)
        // 渲染博客列表
        for (let i = 0; i < data.length; i++) {
            // console.log(result[i]);
            let li = document.createElement("li");
            li.innerHTML = `
                <a class="title" href="http://localhost:8080/post/${data[i].id}">${data[i].contentmd.slice(0,20)}</a>
                <p class="profile">
                    ${data[i].contentmd}
                    <a href="http://localhost:8080/post/${data[i].id}" class="dot">...</a>
                </p>
                <div class="foot">
                    <div class="foot-item">${data[i].time}</div>
                </div>`
            contentUl.appendChild(li)
        }
    };
    xhr.send();
}

// 菜单显示/隐藏
function menuToggle() {
    let menuBtn = document.querySelector(".menu-btn");
    let menu = document.querySelector("#menu");
    menuBtn.addEventListener("click", () => {
        let isShow = menu.style.getPropertyValue("display");

        if (isShow === "block")
            menu.style.display = "none";
        else
            menu.style.display = "block";
    })
}

// 分页
document.querySelector(".prev").onclick = function (e) {
    e.preventDefault()
    let current = document.querySelector(".current").innerHTML;
    current = Number(current)
    if (current > 1) {
        let pre = current - 1;
        window.location.href = `/?page=${pre}`;
    } else {
        console.log("没有上一页了");
    }
}
document.querySelector(".next").onclick = function (e) {
    e.preventDefault()
    let current = document.querySelector(".current").innerHTML;
    current = Number(current)

    let lists = document.querySelectorAll(".list-item");
    let limitNum = lists.length;

    if (current < limitNum) {
        let next = current + 1;
        window.location.href = `/?page=${next}`;
    } else {
        console.log("没有下一页了");
    }
}


// 事件戳转时间
// function time(time = +new Date()) {
//     var date = new Date(time + 8 * 3600 * 1000); // 增加8小时
//     return date.toJSON().substr(0, 19).replace('T', ' ');
// }

// module.exports = {
// showAllPosts: async (ctx, next) => {
//     let posts = await db.getPosts()
//     console.log(posts);
//     // posts = JSON.parse(JSON.stringify(posts))
//     // posts.forEach(element => {
//     //     // 存进数据库的tags是字符串，所以要转成数组
//     //     element.tags = JSON.parse(element.tags)
//     //     element.time = new Date(element.time).getTime()
//     //     element.time = time(element.time);
//     // });
//     // 分页 类似二维数组
//     // [
//     //     [1, 2, 3, 4, 5, 6, 7, 8]
//     //     [9, 10, 11]
//     // ]

//     // let onePage = 4; // 一页显示的数量4个
//     // let currentPage = ctx.query.page || 1; // 当前页 客户端传 | 默认1

//     // let start = (currentPage - 1) * onePage; // 本页开始的下标 (当前页数 - 1) * 一页显示的数量
//     // let end = start + onePage; // 本页结束的下标，就是开始下标 + 结束下标

//     // let pagesCount = Math.ceil(posts.length / onePage) // 总共有多少页 数组长度 / 一页显示的数量
//     // // console.log(pagesCount);
//     // let onePageData = posts.slice(start, end) // 本页应该渲染的数据
//     // // console.log(onePageData);
//     // await ctx.render("index", {
//     //     // posts: posts,
//     //     pagesCount: pagesCount,
//     //     onePageData: onePageData,
//     //     currentPage: currentPage
//     // })
//     ctx.body = ""
// },
// }