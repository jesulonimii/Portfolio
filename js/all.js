
// handling scroll to top button

var btTopButton = document.querySelector(".back-to-top-btn")


//check if user scrolls
window.onscroll = function() {scrollFunction()};


//show back to top button
function scrollFunction() {
  if (document.documentElement.scrollTop > 300) {
    btTopButton.style.display = "block";
  } else {
    btTopButton.style.display = "none";
  }
}

function backToTop() {


     document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
      })



}


// handling scroll to top button end ***