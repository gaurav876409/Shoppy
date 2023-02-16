const searchbtn = document.querySelector('#search_bt');
const input = document.querySelector('.in_search');
const searchicon = document.querySelector('.bt_search');
const navbar = document.querySelector('.container');
const sticky = navbar.offsetTop;
const cat = document.querySelector('.cat');
const more = document.querySelector('.more');
/*searchbtn.addEventListener('click',function()
{
   if(input.classList.contains('hidden'))
   {
        input.classList.remove('hidden');
        searchicon.classList.remove('fa-search');
        searchicon.classList.add('fa-close');

   }
   else
   {
    input.classList.add('hidden');
    searchicon.classList.remove('fa-close');
        searchicon.classList.add('fa-search');
   }
});
*/
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