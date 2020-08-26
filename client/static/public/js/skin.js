let btns = document.querySelectorAll(".style-btn");

let style = document.querySelector("#style");

let arr = ["home", "about", "archive", "publish"]

sidebarIcons = document.querySelectorAll(".sidebar-icon")

window.onload = function () {
    reloadStyle();
}

btns.forEach(btn => {
    btn.onclick = () => {
        // 根据路径选择加载css
        changeStyle(location.pathname);
    }
})

function changeStyle(pathname) {
    switch (pathname) {
        case "/static/views/index.html":
            index();
            break;
            // case "/static/views/detail.html":
            //     detail();
            //     break;
    }

    function index() {
        let styleStatus = localStorage.getItem("styleStatus");
        // 如果当前是黑夜
        if (styleStatus === "night") {
            // 设置白天模式
            style.setAttribute("href", "/static/public/css/index.css")
            setImgColor(styleStatus);
            // 并且把状态改成白天
            localStorage.setItem("styleStatus", "daytime")

            // 如果当前是白天或者null（即默认的白天）
        } else if (styleStatus === "daytime" || styleStatus === null) {
            // 那么点击时切换成黑夜
            style.setAttribute("href", "/static/public/css/index-night.css")
            setImgColor(styleStatus)
            // 并且把状态改成黑夜
            localStorage.setItem("styleStatus", "night")
        }
    }
}

function setImgColor(styleStatus) {
    if (styleStatus === "night") {
        for (let i = 0; i < arr.length; i++) {
            // console.log(i);
            sidebarIcons[i].setAttribute("src", `/static/public/images/menu/${arr[i]}-1.png`)
        }
    } else if (styleStatus === "daytime" || styleStatus === null) {
        for (let i = 0; i < arr.length; i++) {
            sidebarIcons[i].setAttribute("src", `/static/public/images/menu/${arr[i]}-0.png`)
        }
    }
}

function reloadStyle() {
    let styleStatus = localStorage.getItem("styleStatus");
    if (styleStatus === "daytime") {
        styleStatus = "night";
        style.setAttribute("href", "/static/public/css/index.css")
        setImgColor(styleStatus)
    } else if (styleStatus === "night") {
        styleStatus = "daytime";
        style.setAttribute("href", "/static/public/css/index-night.css")
        setImgColor(styleStatus)
    }
}