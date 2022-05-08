
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


//handle phone nav button
function showNavPhone() {

  var navPhoneBar = document.querySelector(".nav-phone-bar");

  var checkBarDisplay = getComputedStyle(navPhoneBar).maxHeight;


  switch (checkBarDisplay){

    case "0px":
      navPhoneBar.style.maxHeight = "162px"
      break;
    case "162px":
      navPhoneBar.style.maxHeight = "0px"
      break;
  }

}