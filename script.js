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

// Make menu appear or disappear by clicking hamburger menu icon
const menuWrapperSelect = document.querySelector(".hamburger-menu-wrapper");
const menuButtonSelect = document.querySelector(".hamburger");

menuButtonSelect.addEventListener("click", function() {
        if (menuWrapperSelect.classList.contains("active")) {
            menuWrapperSelect.classList.remove("active");
        } else {
            menuWrapperSelect.classList.add("active");
        }
});



