document.addEventListener('DOMContentLoaded', function() {
 // Mobile menu toggle functionality
 const menuToggle = document.querySelector('.menu-toggle');
 const mobileNavLinks = document.querySelector('.mobile-nav-links');

 menuToggle.addEventListener('click', function() {
  mobileNavLinks.classList.toggle('active');
  this.textContent = mobileNavLinks.classList.contains('active') ? '✕' : '☰';
 });

 // Close mobile menu when a link is clicked
 document.querySelectorAll('.mobile-nav-links a').forEach(link => {
  link.addEventListener('click', () => {
   mobileNavLinks.classList.remove('active');
   menuToggle.textContent = '☰';
  });
 });
});