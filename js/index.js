// En Scroll function der gør at når du scroller over 0px af Y aksen akitiveres og 
// tilføjes "affix" classen med sort baggrund.

window.addEventListener("scroll", () => {
    var nav = document.querySelector("#nav");
    nav.classList.toggle("scroll", window.scrollY > 0);
})

function menuShow() {
document.getElementById("menu").classList.toggle("show");
}
