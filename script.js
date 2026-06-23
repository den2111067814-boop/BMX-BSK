const revealElements =
document.querySelectorAll(".reveal");

function reveal() {

revealElements.forEach(el => {

const top =
el.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

el.classList.add("active");

}

});

}

window.addEventListener("scroll", reveal);

reveal();

const bg =
document.querySelector(".parallax-bg");

window.addEventListener("scroll", () => {

const scroll =
window.pageYOffset;

bg.style.transform =
`translateY(${scroll * 0.4}px)`;

});
