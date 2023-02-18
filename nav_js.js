const logbtn = document.getElementById('#user');
const overlay = document.getElementsByClassName('.overlay');
const logpage = document.getElementsByClassName('.login');

logbtn.addEventListener('click',function()
{
   if(overlay.classList.contains('hidden'))
   {
        overlay.classList.remove('hidden');
        logpage.classList.remove('hidden');
        logpage.classList.add('account-page_container');

   }
});
/*cat.addEventListener("mouseover",function()
{
     if(more.classList.contains('fa-angle-down'))
     {
          more.classList.remove('fa-angle-down');
          more.classList.add('fa-angle-up');
     }
     else{
          more.classList.add('fa-angle-down');
          more.classList.remove('fa-angle-up');
     }
});*/
/*window.onscroll = function(){myFunction()};
function myFunction()
{
     if (window.pageYOffset > sticky) {
         navbar.classList.add("sticky");
        } else {
         navbar.classList.remove("sticky");
        }
}*/
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