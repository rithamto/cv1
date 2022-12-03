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

let slideIndex1 = 1;
showSlides1(slideIndex1);

let slideIndex2 = 1;
showSlides2(slideIndex2);

let slideIndex3 = 1;
showSlides3(slideIndex3);

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

// Next/previous controls
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

// Next/previous controls
function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

// Thumbnail image controls
function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
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

function showSlides1(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  if (n > 4) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = 4}
  for (i = 0; i < 4; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex1-1].style.display = "block";
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  if (n > 4) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = 4}
  for (i = 0; i < 4; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex2-1].style.display = "block";
}
function showSlides3(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides3");
  if (n > 3) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = 3}
  for (i = 0; i < 3; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex3-1].style.display = "block";
}

//page en

let slideIndex4 = 1;
showSlides4(slideIndex4);

let slideIndex5 = 1;
showSlides5(slideIndex5);

let slideIndex6 = 1;
showSlides6(slideIndex6);

let slideIndex7 = 1;
showSlides7(slideIndex7);

let slideIndex8 = 1;
showSlides8(slideIndex8);

// Next/previous controls
function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}

// Next/previous controls
function plusSlides5(n) {
  showSlides5(slideIndex5 += n);
}

// Next/previous controls
function plusSlides6(n) {
  showSlides6(slideIndex6 += n);
}

// Next/previous controls
function plusSlides7(n) {
  showSlides7(slideIndex7 += n);
}

// Next/previous controls
function plusSlides8(n) {
  showSlides8(slideIndex8 += n);
}

function showSlides4(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides4");
  if (n > 5) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = 5}
  for (i = 0; i < 5; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex4-1].style.display = "block";
}

function showSlides5(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides5");
  if (n > 4) {slideIndex5 = 1}
  if (n < 1) {slideIndex5 = 4}
  for (i = 0; i < 4; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex5-1].style.display = "block";
}

function showSlides6(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides6");
  if (n > 4) {slideIndex6 = 1}
  if (n < 1) {slideIndex6 = 4}
  for (i = 0; i < 4; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex6-1].style.display = "block";
}

function showSlides7(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides7");
  if (n > 4) {slideIndex7 = 1}
  if (n < 1) {slideIndex7 = 4}
  for (i = 0; i < 4; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex7-1].style.display = "block";
}
function showSlides8(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides8");
  if (n > 3) {slideIndex8 = 1}
  if (n < 1) {slideIndex8 = 3}
  for (i = 0; i < 3; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex8-1].style.display = "block";
}