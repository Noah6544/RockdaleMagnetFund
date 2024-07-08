//FUNCTIONS

const CheckItemInView = new IntersectionObserver((entries) => { //figure out this issue and why it's not working
  entries.forEach(element => {
    if(element.isIntersecting){
      element.target.classList.add("onScrollView"); //.TARGET makes it work, idk why
      return true;
    }
    else{
      return false;
    }
  });
  
});

function showMobileNavbarItems(show){ //DRY NOT WET
  if(show){
    var delay = 0;
    mobileNavbarItems.forEach(element => {
      delay += .08;
      element.style.cssText = "transition-delay: " + delay + "s;"
      element.classList.remove("mobileNavbarListHidden"); 
      element.classList.add("mobileNavbarListShow"); // spent 1 hour debugging but i forgot i had a '.classname'
    });
  }
  else{
    var delay = 0;
    mobileNavbarItems.forEach(element => {
      element.style.cssText = "transition-delay: " + delay + "s;"
      element.classList.remove("mobileNavbarListShow"); 
      element.classList.add("mobileNavbarListHidden"); 
      delay += .05;
      console.log(element);
    });
  }

}


// GETTING DOM ITEMS
const onScrollItems = document.querySelectorAll(".onScrollHidden");
const menu = document.getElementById("menu");
const mobileNavbar = document.getElementById("mobileNavbar");
const mobileNavbarItems = document.querySelectorAll('.mobileNavbarListHidden');

//RUNNING CODE
var isOpen = false;
menu.addEventListener("click", function(){
  mobileNavbar.classList.remove("opacity-0","pointer-events-none");
  showMobileNavbarItems(true);
  if(isOpen){
    mobileNavbar.classList.add("opacity-0","pointer-events-none");
    showMobileNavbarItems(false);
    isOpen = false;
  }
  else{
    mobileNavbar.classList.remove("opacity-0","pointer-events-none");
    isOpen = true;
  }
});


onScrollItems.forEach(element => CheckItemInView.observe(element));