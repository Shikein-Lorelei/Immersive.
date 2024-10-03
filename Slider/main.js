let slideIndex = 1;
let slides = document.getElementsByClassName("slide");
let prevButton = document.querySelector(".prev");
let nextButton = document.querySelector(".next");

function showSlide(n) {
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

function plusSlides(n) {
    showSlide(slideIndex += n);
}

prevButton.addEventListener("click", function() {
    plusSlides(-1);
});

nextButton.addEventListener("click", function() {
    plusSlides(1);
});

showSlide(slideIndex);