// Show or hide full article text by clicking "Read more" or "Read less" (mobile)
const buttonSelect = document.querySelector(".article-read-more-button");
const moreSelect = document.getElementById("more");
const dotsSelect = document.getElementById("dots");

buttonSelect.addEventListener("click", function() {
    if (moreSelect.classList.contains("moreHidden")) {
        buttonSelect.textContent = "Läs mindre";
        moreSelect.classList.remove("moreHidden");
        dotsSelect.classList.add("dotsHidden");
    } else {
        buttonSelect.textContent = "Läs mer"
        moreSelect.classList.add("moreHidden");
        dotsSelect.classList.remove("dotsHidden");
    }
});

// Show or hide full article text by clicking "Read more" or "Read less" (desktop)
const buttonSelectDesktop = document.querySelector(".article-read-more-button-desktop");
const moreSelectDesktop = document.getElementById("more-desktop");
const dotsSelectDesktop = document.getElementById("dots-desktop");

buttonSelectDesktop.addEventListener("click", function() {
    if (moreSelectDesktop.classList.contains("moreHiddenDesktop")) {
        buttonSelectDesktop.textContent = "Läs mindre";
        moreSelectDesktop.classList.remove("moreHiddenDesktop");
        dotsSelectDesktop.classList.add("dotsHiddenDesktop");
    } else {
        buttonSelectDesktop.textContent = "Läs mer"
        moreSelectDesktop.classList.add("moreHiddenDesktop");
        dotsSelectDesktop.classList.remove("dotsHiddenDesktop");
    }
});

// Show and hide hamburger menu by clicking menu icon
const menuWrapperSelect = document.querySelector(".hamburger-menu-wrapper");
const menuButtonSelect = document.querySelector(".hamburger");

menuButtonSelect.addEventListener("click", function() {
        if (menuWrapperSelect.classList.contains("active")) {
            menuWrapperSelect.classList.remove("active");
        } else {
            menuWrapperSelect.classList.add("active");
        }
});

// Show and hide products menu by clicking "Products"
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
    setTimeout(slideshow, 5000);
} 

// Change content sign-up button after user click
let signUpSectionButton = document.querySelector(".sign-up-section-button");

signUpSectionButton.addEventListener("click", function() {
    signUpSectionButton.textContent = "Registrerad!";
    signUpSectionButton.classList.add("signed-up");
});