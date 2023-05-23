let nav = document.querySelector ('.header__nav');
let navtoggle = document.querySelector ('.navToggle');

navtoggle.addEventListener('click',() => {
    nav.classList.toggle('header__nav-show');
})

let header = document.querySelector ('.header');

window.addEventListener('scroll', function () {
    let showMeScroll = scrollY;

    if (showMeScroll > 810) {
        header.classList.add ('show');
    } else {
        header.classList.remove ('show');
    }

    console.log (showMeScroll);
})

console.log (header);

const anchors = document.querySelectorAll('a[href*="#"]');
 
for (let anchor of anchors) {

    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}
