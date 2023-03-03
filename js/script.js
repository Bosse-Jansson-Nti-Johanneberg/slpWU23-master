let hamburger = document.getElementsByClassName("hamburger")[0];
let menu = document.getElementsByClassName("menu");

function openMenu(){
    menu.toggleClass(showmenu);
}   

hamburger.addEventListener("click", openMenu);