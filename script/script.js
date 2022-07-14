const mobileNav = document.querySelector('.nav-links');
const burgerIcon = document.querySelector('.burger');
const hideItem = document.querySelector(".home")


burgerIcon.addEventListener('click', function(){
    mobileNav.classList.toggle('active');
    burgerIcon.classList.toggle('active');
	hideItem.classList.toggle('hide')
})