const en_div = document.querySelector('#en');
const vn_div = document.querySelector('#vn');
const vn_flag = document.querySelector('#en .resume .lang');
const en_flag = document.querySelector('#vn .resume .lang');
let lang = 'vn';

showCV = () => {
    if (lang == 'en'){
        en_div.classList.remove('hide');
        vn_div.classList.add('hide');
    } else {
        vn_div.classList.remove('hide');
        en_div.classList.add('hide');
    }
}

showCV();

vn_flag.addEventListener('click', () => {
    lang = 'vi';
    showCV();
});

en_flag.addEventListener('click', () => {
    lang = 'en';
    showCV();
});

let slideIndex = 1;
showSlides(slideIndex);

let slideIndexs = 1;
showSlidess(slideIndexs);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Next/previous controls
function plusSlidess(n) {
  showSlidess(slideIndexs += n);
}

// Thumbnail image controls
function currentSlides(n) {
  showSlidess(slideIndexs = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > 5) {slideIndex = 1}
  if (n < 1) {slideIndex = 5}
  for (i = 0; i < 5; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function showSlidess(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidess");
  if (n > 4) {slideIndexs = 1}
  if (n < 1) {slideIndexs = 4}
  for (i = 0; i < 4; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexs-1].style.display = "block";
}