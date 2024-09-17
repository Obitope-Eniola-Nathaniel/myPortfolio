const backDrop = document.querySelector(".backdrop");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

const displayMobileNavBar = () => {
    backDrop.classList.toggle("open");
    mobileNav.classList.toggle("open");
}



toggleButton.addEventListener("click", displayMobileNavBar);
backDrop.addEventListener("click", displayMobileNavBar);