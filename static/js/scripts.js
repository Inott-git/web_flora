var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

function setImg(n) {
    var i
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n].style.display = "block";
}

function setMore() {
    var text_style = document.getElementsByClassName('more_button')[0].textContent
    let text = document.querySelector(".elm_p")
    let text_div = document.querySelector('.elm_descript')
    text.classList.toggle('more')
    text_div.classList.toggle('more')
    if (text_style == 'Подробнее') {
        document.getElementsByClassName('more_button')[0].textContent='Скрыть';
    }
    else {
        document.getElementsByClassName('more_button')[0].textContent='Подробнее';
    }
}

function setMore_feedbacks() {
    var text_style = document.getElementsByClassName('more_button_feed')[0].textContent
    let text = document.querySelector(".feedback_text_p")
    let text_div = document.querySelector(".feedbacks")
    let last_div = document.querySelector(".last_feedback")
    text_div.classList.toggle('more')
    last_div.classList.toggle('more')
    text.classList.toggle('more')
    if (text_style == 'Подробнее') {
        document.getElementsByClassName('more_button_feed')[0].textContent='Скрыть';
    }
    else {
        document.getElementsByClassName('more_button_feed')[0].textContent='Подробнее';
    }
}