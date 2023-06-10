// top btn
let topButton = document.querySelector(".topBtn"); // get the btn

window.onscroll = function () { scrollFunction() }  // set the btn showed when scrolling down 100px from the top

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.classList.add("showTopBtn");
    } else {
        topButton.classList.remove("showTopBtn");
    }
}

// when topBtn be clicked, back to top!!
function topFunction() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // others
}