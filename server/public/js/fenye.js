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