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
   if(logpage.classList.contains('hidden'))
   {
        body.classList.add('noscroll');
        overlay.classList.remove('hidden');
        logpage.classList.remove('hidden');
        logpage.classList.add('account-page_container');

   }
});
logclose.addEventListener('click',function()
{
    if(!logpage.classList.contains('hidden'))
   {
        body.classList.remove('noscroll');
        overlay.classList.add('hidden');
        logpage.classList.add('hidden');
        logpage.classList.remove('account-page_container');

   }
});
/********mobile menu */
const ham = document.querySelector('.menu');
const overlay2 = document.querySelector('.overlay2');
const m_nav = document.querySelector('.m_nav'); 

ham.addEventListener('click',function()
{
  console.log("hello");
  if(ham.classList.contains('open'))
  {
    ham.classList.remove('open');
    overlay2.classList.add('hidden');
    body.classList.remove('noscroll');
    m_nav.classList.add('hidden');
    
  }
  else{
    ham.classList.add('open');
    overlay2.classList.remove('hidden');
    body.classList.add('noscroll');
    m_nav.classList.remove('hidden');
  }
});

