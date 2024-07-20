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

//Selective Page Scripts
let currentPage = (((window.location.pathname).split('/'))).pop()

if (currentPage == 'index.html' || !currentPage ||  currentPage == ""){
  galleryWrapper = document.getElementsByClassName("gallerySnippetContainer")[0];
  var isMouseDown = false;
  var initialMouse = 0;
  var lastMovementPercentage = 0;
  var nextMovementPercentage = 0;

  galleryWrapper.addEventListener("touchstart", function(event){
    
    initialMouse = event.touches[0].screenX;
    isMouseDown = true;
    galleryWrapper.style.cursor = "grab";
    console.log("start")
});

  window.addEventListener("touchend", function(event){ //using window for mouseup becuase the user may leave the gallery div
    // isMouseDown = false;
    lastMovementPercentage = nextMovementPercentage;
    initialMouse = event.touches[0].screenX;
    galleryWrapper.style.cursor = "";
    console.log("end")

  });
  galleryWrapper.addEventListener("touchmove", function(event){
    // if (!isMouseDown) return;
    console.log(event.touches[0].screenX);
    const mouseX = initialMouse - event.touches[0].screenX;
    const galleryWidth = galleryWrapper.offsetWidth/2;
    movementPercentage = (mouseX) / galleryWidth * -100;
    nextMovementPercentage = movementPercentage + lastMovementPercentage;

    if (nextMovementPercentage > 1) {
      nextMovementPercentage = 1;
    }
    else if (nextMovementPercentage < -55) {
      nextMovementPercentage = -55;
    }
    if( !((nextMovementPercentage > 1) || (nextMovementPercentage < -55))) {
      // galleryWrapper.style.transform = `translateX(${nextMovementPercentage}%)`;
      keyframes =[{transform:`translateX(${nextMovementPercentage}%`}];

      galleryWrapper.animate(keyframes, { duration: 1400, fill: "forwards" });

  
    }
  });


}