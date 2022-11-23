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

// Slideshow
let slideshowIndex = 0; 

slideshow();

function slideshow() {
    let i; 
    let slideshowItems = document.querySelectorAll(".slideshowItem");
    let circles = document.querySelectorAll(".circle");

    for (i = 0; i < circles.length; i++) {
        slideshowItems[i].style.display = "none";
    }
    slideshowIndex++;
    if (slideshowIndex > slideshowItems.length) {
        slideshowIndex = 1;
    }
    for (i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(" activeCircle", "");
    }
    slideshowItems[slideshowIndex-1].style.display = "block";
    circles[slideshowIndex-1].className += " activeCircle";
    setTimeout(slideshow, 3000);
} 


