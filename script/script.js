const mobileNav = document.querySelector('.nav-links');
const burgerIcon = document.querySelector('.burger');



burgerIcon.addEventListener('click', function(){
    mobileNav.classList.toggle('active');
    burgerIcon.classList.toggle('active');
})
