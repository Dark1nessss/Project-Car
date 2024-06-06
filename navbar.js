const nav = document.querySelector(".nav container")
let lastScrollY = window.scrollY;

window.addEventListener("scroll",() =>{
    if (lastScrollY < window.scrollY){
        nav.classList.add("nav--hidden");
    } else {
        nav.classList.remove("nav--hidden");
    }
})