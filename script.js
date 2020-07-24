let slideIndex = 1;
showSlides(slideIndex);

let quoteIndex = 1;
showQuotes(quoteIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function plusQuotes(n) {
    showQuotes(quoteIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function currentQuote(n) {
    showQuotes(quoteIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function showQuotes(n) {
    let i;
    let quotes = document.getElementsByClassName("quote");
    if (n > quotes.length) { quoteIndex = 1 }
    if (n < 1) { quoteIndex = quotes.length }
    for (i = 0; i < quotes.length; i++) {
        quotes[i].style.display = "none";
    }
    quotes[quoteIndex - 1].style.display = "block";
}