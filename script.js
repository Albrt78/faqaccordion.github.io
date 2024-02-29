const acc = document.querySelectorAll(".accordion");
const panel = document.querySelectorAll(".panel");
const show = document.querySelectorAll("#show");

panel[0].style.maxHeight = panel[0].scrollHeight + "px";
show[0].src = "assets/images/icon-minus.svg";

for (let i = 0; i < acc.length; i++) {
    show[i].addEventListener("click", () => {
        if (panel[i].style.maxHeight) {
            panel[i].style.maxHeight = null;
            show[i].src = "assets/images/icon-plus.svg";
        } else {
            panel[i].style.maxHeight = panel[i].scrollHeight + "px";
            show[i].src = "assets/images/icon-minus.svg";
        }
    });
}
