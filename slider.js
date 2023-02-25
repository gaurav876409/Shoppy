
/****slide bar */
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("Slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < slides.length; i++) {
    slides[i].className = slides[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  slides[slideIndex-1].className += " active";
  setTimeout(showSlides, 6000);
}


/****testimonial slide */
let tslideIndex = 0;
tshowSlides();

function tshowSlides() {
  let i;
  let tslides = document.getElementsByClassName("T_Slides");
  for (i = 0; i < tslides.length; i++) {
    tslides[i].style.display = "none";  
  }
  tslideIndex++;
  if (tslideIndex > tslides.length) {tslideIndex = 1}    
  for (i = 0; i < tslides.length; i++) {
    tslides[i].className = tslides[i].className.replace(" active", "");
  }
  tslides[tslideIndex-1].style.display = "block";  
  tslides[tslideIndex-1].className += " active";
  setTimeout(tshowSlides, 6000);
}