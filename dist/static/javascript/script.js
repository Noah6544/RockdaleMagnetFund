//FUNCTIONS

const CheckItemInView = new IntersectionObserver((element) => { //figure out this issue and why it's not working
    console.log(element)
    if(element.isIntersecting){
      element.classList.add("onScrollView");
      console.log("added!s");
      return true;
    }
    else{
      console.log("asdf")
      return false;
    }
  ;
  
});


// GETTING DOM ITEMS
const onScrollItems = document.querySelectorAll(".onScrollHidden");
const menu = document.getElementById("menu");
const mobileNavbar = document.getElementById("mobileNavbar")

//RUNNING CODE
var isOpen = false;

menu.addEventListener("click", function(){
  mobileNavbar.classList.remove("opacity-0","pointer-events-none");

  if(isOpen){
    mobileNavbar.classList.add("opacity-0","pointer-events-none")
    isOpen = false;
  }
  else{
    mobileNavbar.classList.remove("opacity-0","pointer-events-none")
    isOpen = true;
  }
});

onScrollItems.forEach(element => CheckItemInView.observe(element));