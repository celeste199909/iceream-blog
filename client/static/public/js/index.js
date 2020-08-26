// 初始化
// let url = "http://localhost:8080";

(function () {
    // 三明治菜单按钮，显示或者隐藏菜单
    menuToggle();
    // 获取一页的数据
    getAPageData();
    // 上一页下一页按钮
    preNextBtn();
    // console.log(1);
})();

// 获取所有一页数据
function getAPageData(page = 1) {
    let xhr = new XMLHttpRequest();
    xhr.open("get", `/api/getAPageData?page=${page}`, true);
    xhr.onload = function () {
        let data = JSON.parse(xhr.responseText)
        let pagesCount = data.pagesCount,
            currentPage = data.currentPage;
        // 渲染博客列表
        renderAPage(xhr.responseText);
        // 渲染分页
        renderFenye(pagesCount, currentPage)
    }
    xhr.send();
}

// 菜单显示/隐藏
function menuToggle() {
    let menuBtn = document.querySelector(".menu-btn");
    let menuMoblie = document.querySelector("#menu-mobile");
    menuBtn.addEventListener("click", () => {
        let isShow = menuMoblie.style.getPropertyValue("display");
        if (isShow === "block")
            menuMoblie.style.display = "none";
        else
            menuMoblie.style.display = "block";
    })
}
// 上一页下一页按钮
function preNextBtn() {

    document.querySelector(".prev").onclick = function (e) {
        e.preventDefault()
        let current = document.querySelector(".current").innerHTML;
        current = Number(current)
        if (current > 1) {
            let pre = current - 1;
            let xhr = new XMLHttpRequest();
            xhr.open("get", `/api/getAPageData/?page=${pre}`, true)
            xhr.onload = function () {
                getAPageData(pre)
            }
            xhr.send()
        } else {
            console.log("没有上一页了");
        }
    }
    document.querySelector(".next").onclick = function (e) {
        e.preventDefault()
        let current = document.querySelector(".current").innerHTML;
        current = Number(current)
        let lists = document.querySelectorAll(".fenye-li");
        let limitNum = lists.length;
        if (current < limitNum) {
            let next = current + 1;
            getAPageData(next)
        } else {
            console.log("没有下一页了");
        }
    }
}

// 渲染一页
function renderAPage(responseText) {
    let contentUl = document.querySelector(".content-ul");
    let fenyeUl = document.querySelector(".fenye-ul");
    contentUl.innerHTML = ""
    fenyeUl.innerHTML = ""
    let data = JSON.parse(responseText)
    let onePageData = data.onePageData;
    for (let i = 0; i < onePageData.length; i++) {
        // 改变时间格式 2020-08-22T06:08:44.000Z
        let time = onePageData[i].time;
        time = time.split("T")[0] + " " + time.split("T")[1].split(".")[0]

        let contentmd = onePageData[i].contentmd;
        // console.log(contentmd);
        let id = onePageData[i].id;

        for (let i = 0; i < 30; i++) {
            contentmd = contentmd.replace('#', "")
            contentmd = contentmd.replace('*', "")
            contentmd = contentmd.replace('-', "")
            contentmd = contentmd.replace('[TOC]', "")
        }

        // 创建li并插到ul中
        let li = document.createElement("li");
        li.classList.add("content-li")
        li.innerHTML = `
            <a class="title" href="/static/views/detail.html?id=${id}">${contentmd.slice(0,15)}</a>
            <p class="profile">
                ${contentmd.slice(0,200)}
                <a href="/static/views/detail.html?id=${id}" class="dot">...</a>
            </p>
            <div class="foot">
                <div class="foot-item">${time}</div>
            </div>`
        contentUl.appendChild(li)
    }
}
// 分页list
function renderFenye(pagesCount, currentPage) {
    let contentUl = document.querySelector(".content-ul");
    let fenyeUl = document.querySelector(".fenye-ul");
    for (let i = 0; i < pagesCount; i++) {
        // console.log(pagesCount);
        let li = document.createElement("li");
        li.innerHTML = `<a >${i + 1}</a> `
        li.classList.add("fenye-li")

        if (currentPage == i + 1) {
            li.firstChild.classList.add("current")
        }
        li.addEventListener("click", (e) => {
            e.preventDefault()
            contentUl.innerHTML = "";
            fenyeUl.innerHTML = "";
            getAPageData(i + 1)
        })
        fenyeUl.appendChild(li)
    };
}
// 创建节点 菜单

let menuObj = {
    "主页-home": "/static/views/index.html",
    "关于-about": "/static/views/about.html",
    "归档-archive": "/static/views/archive.html",
    "发布-publish": "/static/views/publish.html"
}
let menuMoblieUl = document.querySelector(".menu-mobile-ul")
let menuPcUl = document.querySelector("#menu-pc");
for (let key in menuObj) {
    let name = key.split("-")

    let mli = document.createElement("li");
    mli.classList.add("menu-mobile-li");
    mli.innerHTML = `<img src="/static/public/images/menu/${name[1]}-1.png" class="sidebar-icon">
                    <a href="${menuObj[key]}">${name[0]}</a>`;
    menuMoblieUl.appendChild(mli);

    let pli = document.createElement("li");
    pli.classList.add("menu-pc-item");
    pli.innerHTML = `<img src="/static/public/images/menu/${name[1]}-1.png" class="sidebar-icon">
                    <a href="${menuObj[key]}">${name[0]}</a>`;

    menuPcUl.appendChild(pli);
}