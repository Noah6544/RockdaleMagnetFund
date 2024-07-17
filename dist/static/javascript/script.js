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

//Selective Page Scripts
let currentPage = (((window.location.pathname).split('/'))).pop()

if (currentPage == 'index.html' || !currentPage ||  currentPage == ""){
  galleryWrapper = document.getElementsByClassName("gallerySnippetContainer")[0];
  var isMouseDown = false;
  var initialMouse = 0;
  var lastMovementPercentage = 0;

  galleryWrapper.addEventListener("mousedown", function(event){
    initialMouse = event.screenX;
    isMouseDown = true;
    galleryWrapper.style.cursor = "grab";
});

  window.addEventListener("mouseup", function(event){
    isMouseDown = false;
    lastMovementPercentage = nextMovementPercentage;
    initialMouse = event.screenX;
    galleryWrapper.style.cursor = "";
    console.log("Mouse Up");

  });
  galleryWrapper.addEventListener("mousemove", function(event){

    if (!isMouseDown) return;

    const mouseX = initialMouse - event.screenX;
    const galleryWidth = galleryWrapper.offsetWidth/1.4;
    movementPercentage = (mouseX) / galleryWidth * -100;
    nextMovementPercentage = movementPercentage + lastMovementPercentage;

    // if (nextMovementPercentage > 1) {
    //   nextMovementPercentage = 1;
    // }
    // else if (nextMovementPercentage < -55) {
    //   nextMovementPercentage = -55;
    // }
    if( !((nextMovementPercentage > 1) || (nextMovementPercentage < -55))) {
      // galleryWrapper.style.transform = `translateX(${nextMovementPercentage}%)`;
      keyframes =[{transform:`translateX(${nextMovementPercentage}%`}];
      console.log(nextMovementPercentage)

      galleryWrapper.animate(keyframes, { duration: 1200, fill: "forwards" });
      lastMovementPercentage = nextMovementPercentage;

  
    }
   



  });

  
 

}