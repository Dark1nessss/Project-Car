// Navbar Scroll Script
const nav1 = document.querySelector(".nav1")

let lastScrollTop = 0;

window.addEventListener(
    "scroll",
    () => {
        console.log("scroll")
        var { scrollY } = window;
        if ( scrollY > lastScrollTop ){
            // scroll down
            nav1.classList.remove("visible");
        } else if (scrollY < lastScrollTop ){
            // scroll up
            nav1.classList.add("visible");
        }
        lastScrollTop = 
        scrollY <= 0 ? 0 : scrollY;
    },
    { passive: true }
);

// DropdownMenu Script
let subMenu = document.getElementById("subMenu");

function toggleMenu(){
    subMenu.classList.toggle("open-menu");
};