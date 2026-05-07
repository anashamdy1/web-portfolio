let btnMenu = document.getElementById("btnmenu");
let NavLinks = document.querySelector(".links");

btnMenu.onclick = function () {
    btnMenu.classList.toggle("fa-times");
    NavLinks.classList.toggle("active");
}