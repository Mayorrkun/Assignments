//main you know
 document.addEventListener("DOMContentLoaded", function (){

 });

window.addEventListener("scroll", function(){
 const mobileNav = document.getElementById("mobile-nav");
 const navBar = document.getElementById("navBar");
if(window.scrollY > 0){

 mobileNav.style.display = "sticky";
}
});

document.addEventListener("DOMContentLoaded", function (){
const navBtn= document.getElementById('navBtn');
const navList = document.getElementById('navList');

navBtn.addEventListener('click', function(){
 navList.classList.toggle('active');
 navList.style.maxHeight = navList.style.maxHeight ? null : navList.scrollHeight + 'px';

})
})