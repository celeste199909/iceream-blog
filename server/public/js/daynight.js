// // let isNight = "false";
// // localStorage.setItem("isNight", isNight)
// let btns = document.querySelectorAll(".day-night")
// let body = document.querySelector("body");
// let nav = document.querySelector("#nav");
// let main = document.querySelector("#main");
// // 手机Chrome浏览器上方变色
// let theme = document.querySelector("meta[name=theme-color]");
// // 菜单变色
// let menu = document.querySelector("#menu");
// // console.log(theme);
// let banner = document.querySelector(".banner");
// // console.log(banner);
// // 头
// let head = document.querySelector(".head")
// // 个人信息
// let profile = document.querySelector(".profile")
// // 
// let sidebarNav = document.querySelector(".sidebar-nav")


// // 左侧sidebar
// let sidebar = document.querySelector("#sidebar")
// window.onload = function () {
//     reload()
// }

// function reload() {
//     let isNight = localStorage.getItem("isNight");
//     if (isNight === "No") {
//         body.style.setProperty("color", "#000");
//         body.style.setProperty("background-color", "#eff3f6");
//         nav.style.setProperty("background-color", "#fff");
//         main.style.setProperty("background-color", "#fff");
//         // 手机Chrome浏览器上方变色
//         theme.setAttribute("content", "#fff");
//         // 菜单变色
//         menu.style.setProperty("background-color", "#fff");
//         // 白天，把头部变成灰色
//         head.style.setProperty("background-color", "#353d46");
//         // 
//     } else if (isNight === "Yes") {
//         body.style.setProperty("color", "#ddd");
//         sidebar.style.setProperty("color", "#000");
//         body.style.setProperty("background-color", "#708090");
//         nav.style.setProperty("background-color", "#353d46");
//         main.style.setProperty("background-color", "#353d46");
//         // 手机Chrome浏览器上方变色

//         theme.setAttribute("content", "#353d46");
//         // 菜单变色
//         menu.style.setProperty("background-color", "#353d46");
//         // banner背景图切换
//         // banner.style.setProperty("background-image", "url(../images/banner-night-min.jpg)");
//         // 白天，把头部变成灰色
//         head.style.setProperty("background-color", "#353d46");
//     }
// }

// // location.reload()
// function changeStyle() {
//     let isNight = localStorage.getItem("isNight");
//     if (isNight === "Yes") {
//         // 判断当前状态是夜晚，则点击时变成白天

//         body.style.setProperty("color", "#000");
//         body.style.setProperty("background-color", "#eff3f6");

//         nav.style.setProperty("background-color", "#fff");
//         main.style.setProperty("background-color", "#fff");

//         theme.setAttribute("content", "#fff");

//         menu.style.setProperty("background-color", "#fff");
//         // banner背景图切换
//         // banner.style.setProperty("background-image", "url(../images/banner-day-min.jpg)");

//         // 并且把状态改成白天
//         localStorage.setItem("isNight", "No")
//     } else if (isNight === "No" || isNight === null) {
//         // 判断当前状态不是夜晚，则点击时变成夜晚

//         body.style.setProperty("color", "#ddd");
//         body.style.setProperty("background-color", "#708090");
//         nav.style.setProperty("background-color", "#353d46");
//         main.style.setProperty("background-color", "#353d46");

//         theme.setAttribute("content", "#353d46");

//         menu.style.setProperty("background-color", "#353d46");

//         // menu.style.setProperty("background-color", "#353d46");
//         // banner背景图切换
//         // banner.style.setProperty("background-image", "url(../images/banner-night-min.jpg)");
//         // 并且把当前状态改成夜晚
//         localStorage.setItem("isNight", "Yes")
//     }
// }
// btns.forEach(btn => {
//     btn.onclick = () => {
//         changeStyle()
//     }
// })