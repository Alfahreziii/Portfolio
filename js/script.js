//navbar scroll transparent
const navEl = document.querySelector('.navbar');
const toTop = document.querySelector('.scroll-top')
window.addEventListener('scroll', () => {
    if (window.scrollY > 19) {
        navEl.classList.add('navbar-scrolled');
    }else{
        navEl.classList.remove('navbar-scrolled');
    }
    if (window.scrollY >= 220) {
        toTop.classList.add('active-scroll');
    }else if (window.scrollY < 220) {
        toTop.classList.remove('active-scroll');
    }
});




//toggle class active

const navbarNav = document.querySelector('.navbar-nav');
const menu_btn = document.querySelector('.hamburger');

//ketika hamburger di click
document.querySelector('#hamburger-menu').
onclick = () => {
    navbarNav.classList.toggle('active');
    menu_btn.classList.toggle('is-active');
};

// const navbarNavex = document.querySelector('.navbar-exicon');

// //ketika hamburger di click
// document.querySelector('#hamburger-menu').
// onclick = () => {
//     navbarNavex.classList.toggle('actives');
// };

// const navbarExtra = document.querySelector('.navbar-extra #instagram, #email, #youtube');

// document.querySelector('#')

//klik diluar sidebar untuk mengilangkan sidebar

const hamburger = document.querySelector
('#hamburger-menu');

document .addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active');
    menu_btn.classList.remove('is-active')
    }

});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft - 2.30 ? "none" : "block";
    }

    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
    });


}
window.addEventListener("load", initSlider);