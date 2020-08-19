// 菜单显示/隐藏
let menuBtn = document.querySelector(".menu-btn");
let menu2 = document.querySelector("#menu");
menuBtn.addEventListener("click", () => {
    let isShow = menu2.style.getPropertyValue("display");

    if (isShow === "block")
        menu2.style.display = "none";
    else
        menu2.style.display = "block";
})