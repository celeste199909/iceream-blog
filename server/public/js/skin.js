let btns = document.querySelectorAll(".day-night"),
    style = document.querySelector("#style"),
    github = document.querySelector(".github"),
    sidebarIcons = document.querySelectorAll(".sidebar-icon")

window.onload = function () {
    reload()
}

function reload() {
    let isNight = localStorage.getItem("isNight");
    if (isNight === "No") {
        style.setAttribute("href", "/public/css/index.css")
        // Github
        github.setAttribute("src", "/public/images/github-black.png")
        // sidebar menu img
        sidebarIcons[0].setAttribute("src", "/public/images/menu/home-black.png")
        sidebarIcons[1].setAttribute("src", "/public/images/menu/about-black.png")
        sidebarIcons[2].setAttribute("src", "/public/images/menu/tag-black.png")
        sidebarIcons[3].setAttribute("src", "/public/images/menu/search-black.png")
        sidebarIcons[4].setAttribute("src", "/public/images/menu/publish-black.png")
        sidebarIcons[5].setAttribute("src", "/public/images/menu/home-black.png")
        sidebarIcons[6].setAttribute("src", "/public/images/menu/about-black.png")
        sidebarIcons[7].setAttribute("src", "/public/images/menu/tag-black.png")
        sidebarIcons[8].setAttribute("src", "/public/images/menu/search-black.png")
        sidebarIcons[9].setAttribute("src", "/public/images/menu/publish-black.png")


    } else if (isNight === "Yes") {
        style.setAttribute("href", "/public/css/index-night.css")

        // Github
        github.setAttribute("src", "/public/images/github-white.png")
        // sidebar menu img
        sidebarIcons[0].setAttribute("src", "/public/images/menu/home-white.png")
        sidebarIcons[1].setAttribute("src", "/public/images/menu/about-white.png")
        sidebarIcons[2].setAttribute("src", "/public/images/menu/tag-white.png")
        sidebarIcons[3].setAttribute("src", "/public/images/menu/search-white.png")
        sidebarIcons[4].setAttribute("src", "/public/images/menu/publish-white.png")
        sidebarIcons[5].setAttribute("src", "/public/images/menu/home-white.png")
        sidebarIcons[6].setAttribute("src", "/public/images/menu/about-white.png")
        sidebarIcons[7].setAttribute("src", "/public/images/menu/tag-white.png")
        sidebarIcons[8].setAttribute("src", "/public/images/menu/search-white.png")
        sidebarIcons[9].setAttribute("src", "/public/images/menu/publish-white.png")


    }
}

function changeStyle() {
    let isNight = localStorage.getItem("isNight");
    if (isNight === "Yes") {
        style.setAttribute("href", "/public/css/index.css")

        github.setAttribute("src", "/public/images/github-black.png")
        // sidebar menu img
        sidebarIcons[0].setAttribute("src", "/public/images/menu/home-black.png")
        sidebarIcons[1].setAttribute("src", "/public/images/menu/about-black.png")
        sidebarIcons[2].setAttribute("src", "/public/images/menu/tag-black.png")
        sidebarIcons[3].setAttribute("src", "/public/images/menu/search-black.png")
        sidebarIcons[4].setAttribute("src", "/public/images/menu/publish-black.png")
        sidebarIcons[5].setAttribute("src", "/public/images/menu/home-black.png")
        sidebarIcons[6].setAttribute("src", "/public/images/menu/about-black.png")
        sidebarIcons[7].setAttribute("src", "/public/images/menu/tag-black.png")
        sidebarIcons[8].setAttribute("src", "/public/images/menu/search-black.png")
        sidebarIcons[9].setAttribute("src", "/public/images/menu/publish-black.png")

        // 并且把状态改成白天
        localStorage.setItem("isNight", "No")
    } else if (isNight === "No" || isNight === null) {
        style.setAttribute("href", "/public/css/index-night.css")

        // Github
        github.setAttribute("src", "/public/images/github-white.png")
        // sidebar menu img
        sidebarIcons[0].setAttribute("src", "/public/images/menu/home-white.png")
        sidebarIcons[1].setAttribute("src", "/public/images/menu/about-white.png")
        sidebarIcons[2].setAttribute("src", "/public/images/menu/tag-white.png")
        sidebarIcons[3].setAttribute("src", "/public/images/menu/search-white.png")
        sidebarIcons[4].setAttribute("src", "/public/images/menu/publish-white.png")
        sidebarIcons[5].setAttribute("src", "/public/images/menu/home-white.png")
        sidebarIcons[6].setAttribute("src", "/public/images/menu/about-white.png")
        sidebarIcons[7].setAttribute("src", "/public/images/menu/tag-white.png")
        sidebarIcons[8].setAttribute("src", "/public/images/menu/search-white.png")
        sidebarIcons[9].setAttribute("src", "/public/images/menu/publish-white.png")

        localStorage.setItem("isNight", "Yes")
    }
}
btns.forEach(btn => {
    btn.onclick = () => {
        changeStyle()
    }
})