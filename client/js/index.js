// localStorage.setItem("practices", JSON.stringify(practices));

console.log(practices)
// 渲染li
function renderPracticesList(practices) {
    let ul = document.querySelector(".content");
    ul.innerHTML = "";
    practices.forEach(item => {
        let li = document.createElement("li");
        li.classList.add("content-item");
        li.innerHTML = `
            <a class="title" href="${item.link}">${item.title}</a>
            <p class="profile">${item.profile}</p>
            <div class="foot">
            <div class="foot-item">${item.date}</div>
            <div class="foot-item tags">
                <span class="tag">${item.category}</span>
            </div>
        </div>
        `
        if (item.preview) {
            let img = document.createElement("img")
            img.classList.add("preview-img")
            img.src = item.preview
            li.innerHTML += `<p class="preview">
                                <img class="preview-img" src="${item.preview}" alt="">
                            </p>`
        }
        ul.appendChild(li)
    });
}

// 过滤器，根据分类过滤，得到一个新数组
function filterCate(practices, cate) {
    return practices.filter((item) => {
        return item.category === cate;
    })
}
// 触发点击事件，渲染过滤后的数组
// let cate = document.querySelector(".cate");
// cate.addEventListener("click", (e) => {
//     let category = e.target.innerText;
//     let newArr = filterCate(practices, category);
//     // console.log("hhh", newArr);
//     // localStorage.setItem("practices", JSON.stringify(newArr))
//     renderPracticesList(newArr);

// })
// 默认加载全部
// practices = JSON.parse(localStorage.getItem("practices"))
renderPracticesList(practices);






// console.log(JSON.parse(localStorage.getItem("newArr")));

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

// 判断是否有图片
// let previews = document.querySelectorAll(".preview")
// let previewImgs = document.querySelectorAll(".preview-img")
// previewImgs.forEach( item => {
//     let imgIsExist = item.getAttribute("src")
//     if (!imgIsExist) {
//         previews.forEach
//         preview.style.display = "none"
//     }
// })
// let imgIsExist = previewImg.getAttribute("src")
// console.log(previewImg.getAttribute("src"));
// if (!imgIsExist) {
//     preview.style.display = "none"
// }