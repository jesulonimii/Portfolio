  //fetch catgories
  var column = document.querySelectorAll(".column");
  var logo = document.querySelectorAll(".logo");
  var web = document.querySelectorAll(".web");
  var android = document.querySelectorAll(".android");


  //fetch all filter buttons
  var filterBtn = document.querySelector(".filter-btn");

  //fetch each filter buttons
  var allFilterBtn = document.querySelector(".all-filter-btn");
  var websiteFilterBtn = document.querySelector(".website-filter-btn");
  var brandingFilterBtn = document.querySelector(".branding-filter-btn");
  var androidFilterBtn = document.querySelector(".android-filter-btn");



filterSelection("all");



function filterSelection(type){
   

    if (type == 'all'){

       for (let i = 0; i < column.length; i++) {
           column[i].style.display = "block";
           
       }
        
       //remove active styling from filter btn
       removeActiveStylingFromBtn()
       
        //add active class to selected btn
       allFilterBtn.classList.add("active");

    }

    else if (type == 'branding'){

        //hide all
        for (let i = 0; i < column.length; i++) {
            column[i].style.display = "none"
        }

        //hide branding category only
        for (let i = 0; i < logo.length; i++) {
            logo[i].style.display = "block"
        }

        //remove active styling from filter btn
       removeActiveStylingFromBtn()
       
       //add active class to selected btn
       brandingFilterBtn.classList.add("active");

    }

    else if (type == 'website'){

        //hide all
        for (let i = 0; i < column.length; i++) {
            column[i].style.display = "none"
            
            
        }

        //show web category only
        for (let i = 0; i < web.length; i++) {
            web[i].style.display = "block"
            
        }
    
        //remove active styling from filter btn
       removeActiveStylingFromBtn()
       
       //add active class to selected btn
        websiteFilterBtn.classList.add("active");
        

    }

    else if (type == 'android'){

        //hide all
        for (let i = 0; i < column.length; i++) {
            column[i].style.display = "none"
            
            
        }

        //show android category only
        for (let i = 0; i < android.length; i++) {
            android[i].style.display = "block"
            
        }

        //remove active styling from filter btn
       removeActiveStylingFromBtn()
       
       //add active class to selected btn
        androidFilterBtn.classList.add("active");
        

    }

}


// this is a function to remove the active button stylings from all filter buttons
function removeActiveStylingFromBtn() {



    allFilterBtn.classList.remove("active");
    websiteFilterBtn.classList.remove("active");
    brandingFilterBtn.classList.remove("active");
    androidFilterBtn.classList.remove("active");
    
}