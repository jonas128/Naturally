// Make full article text appear by clicking on "Read more" button
const buttonSelect = document.querySelector(".article-read-more-button");
const moreSelect = document.getElementById("more");
const dotsSelect = document.getElementById("dots");

buttonSelect.addEventListener("click", function() {
    if (moreSelect.style.display = "none") {
        moreSelect.style.display = "block";
        dotsSelect.style.display = "none";
        buttonSelect.style.display = "none";
    } 
}); 

// Make menu appear or disappear by clicking on hamburger menu icon
const menuWrapperSelect = document.querySelector(".hamburger-menu-wrapper");
const menuButtonSelect = document.querySelector(".hamburger");

menuButtonSelect.addEventListener("click", function() {
        if (menuWrapperSelect.classList.contains("active")) {
            menuWrapperSelect.classList.remove("active");
        } else {
            menuWrapperSelect.classList.add("active");
        }
});

// Make desktop menu appear or disappear by clicking on "Products"
const deskstopMenuSelect = document.querySelector(".desktop-product-menu-wrapper");
const desktopMenuButtonSelect = document.querySelector(".products-select");

desktopMenuButtonSelect.addEventListener("click", function() {
    if (deskstopMenuSelect.classList.contains("desktop-menu-active")) {
        deskstopMenuSelect.classList.remove("desktop-menu-active");
    } else {
        deskstopMenuSelect.classList.add("desktop-menu-active");
    }
});