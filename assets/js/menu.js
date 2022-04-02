let show = true; 

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")
const bars = document.querySelector(".fa-bars")
const close = document.querySelector(".fa-xmark");
const nav = menuSection.querySelector("nav");
const body = document.querySelector("body");

menuToggle.addEventListener("click", () => {

    body.style.overflow = show ? "hidden" : "initial"      // tira a barra de rolagem

    menuSection.classList.toggle("on", show)               // colocando o show garante que o toggle não vai bugar
    show = !show;

    
    if(body.style.overflow === "initial" && window.matchMedia("(max-width: 600px)").matches) {
        bars.style.display = "block";
        close.style.display = "none";
    }

    else if (body.style.overflow === "hidden" && window.matchMedia("(max-width: 600px)").matches) {
        bars.style.display = "none";
        close.style.display = "block";
    }
})


