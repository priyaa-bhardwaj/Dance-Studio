//time
function time() {
  document.getElementById("h1").innerHTML = "4-5 pm";
}
function time1() {
  document.getElementById("h2").innerHTML = "4-5 pm";
}
function time2() {
  document.getElementById("h3").innerHTML = "6-7 pm";
}
function time3() {
  document.getElementById("h4").innerHTML = "4-5 pm";
}
function time4() {
  document.getElementById("h5").innerHTML = "5-6 pm";
}
//mouseout
function hip() {
  document.getElementById("h1").innerHTML = "HIP HOP";
}
function hip1() {
  document.getElementById("h2").innerHTML = "K-POP";
}
function hip2() {
  document.getElementById("h3").innerHTML = "Bollywood";
}
function hip3() {
  document.getElementById("h4").innerHTML = "Free Style";
}

function hip4() {
  document.getElementById("h5").innerHTML = "Mom's Batch";
}
//
var slideIndex = 1;

function showImage(n) 
{

  "use strict";

  var slide = document.getElementsByClassName("slides"),
    dots = document.getElementsByClassName("dots"),
    i;

  if (n > slide.length) {

    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slide.length;
  }

  for (i = 0; i < slide.length; i++) 
  {

    slide[i].style.display = "none";
  }
  slide[slideIndex - 1].style.display = "block";

  for (i = 0; i < dots.length; i++) {

    dots[i].className = dots[i].className.replace(" active", "  ");
  }

  dots[slideIndex - 1].className += " active";
}

showImage(slideIndex);

function plusIndex(n) {
  // for Next & Prev Actions

  "use strict";

  showImage((slideIndex += n));
}

function currentSlide(n) {
  // for Slide Bullets Selection

  "use strict";

  showImage((slideIndex = n));
}
