// Make full article text appear by clicking on "Read more" button
const buttonSelect = document.querySelector(".article-read-more-button");
const moreSelect = document.getElementById("more");
const dotsSelect = document.getElementById("dots");

buttonSelect.addEventListener("click", function() {
    if (moreSelect.style.display = "none") {
        moreSelect.style.display = "contents";
        dotsSelect.style.display = "none";
        buttonSelect.style.display = "none";
    } 
}); 