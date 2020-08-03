// let isNight = "false";
// localStorage.setItem("isNight", isNight)
let btn = document.querySelector(".day-night")
let body = document.querySelector("body");
let nav = document.querySelector("#nav");
let main = document.querySelector("#main");

window.onload = function () {
    reload()
}
function reload() {
    let isNight = localStorage.getItem("isNight");
    if (isNight === "No") {
        body.style.setProperty("color", "#000");
        body.style.setProperty("background-color", "#eff3f6");
        nav.style.setProperty("background-color", "#fff");
        main.style.setProperty("background-color", "#fff");
    } else if (isNight === "Yes") {
        body.style.setProperty("color", "#ddd");
        body.style.setProperty("background-color", "#708090");
        nav.style.setProperty("background-color", "#353d46");
        main.style.setProperty("background-color", "#353d46");
    }
}

// location.reload()
function changeStyle() {
    let isNight = localStorage.getItem("isNight");
    if (isNight === "Yes" || isNight === null) {
        body.style.setProperty("color", "#000");
        body.style.setProperty("background-color", "#eff3f6");
        nav.style.setProperty("background-color", "#fff");
        main.style.setProperty("background-color", "#fff");
        localStorage.setItem("isNight", "No")
    } else if (isNight === "No") {
        body.style.setProperty("color", "#ddd");
        body.style.setProperty("background-color", "#708090");
        nav.style.setProperty("background-color", "#353d46");
        main.style.setProperty("background-color", "#353d46");
        localStorage.setItem("isNight", "Yes")
    }
}
btn.onclick = () => {
    changeStyle()
}
