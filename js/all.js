// When the user scrolls down 20px from the top of the document, show the button
var btTopButton = document.querySelector(".back-to-top-btn")

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btTopButton.style.display = "block";
  } else {
    btTopButton.style.display = "none";
  }
}

function backToTop() {

     document.body.scrollTop = 0; // For Safari
     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera



}