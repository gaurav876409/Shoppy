

/*****scroll bar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-85px";
  }
  prevScrollpos = currentScrollPos;
}



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
  if (slideIndex > tslides.length) {tslideIndex = 1}    
  for (i = 0; i < tslides.length; i++) {
    tslides[i].className = tslides[i].className.replace(" active", "");
  }
  tslides[tslideIndex-1].style.display = "block";  
  tslides[tslideIndex-1].className += " active";
  setTimeout(tshowSlides, 6000);
}


/****login form */
var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");
function register(){
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
}
function login(){
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
    }
/****logbtn */
const logbtn = document.querySelector('#user_bt');
const logclose = document.querySelector('#logclose');
const overlay = document.querySelector('.overlay');
const logpage = document.querySelector('.logup');
const body = document.querySelector('body'); 

logbtn.addEventListener('click',function()
{
  console.log('hello');
   if(overlay.classList.contains('hidden'))
   {
        body.classList.add('noscroll');
        overlay.classList.remove('hidden');
        logpage.classList.remove('hidden');
        logpage.classList.add('account-page_container');

   }
});
logclose.addEventListener('click',function()
{
    if(!overlay.classList.contains('hidden'))
   {
        body.classList.remove('noscroll');
        overlay.classList.add('hidden');
        logpage.classList.add('hidden');
        logpage.classList.remove('account-page_container');

   }
});
