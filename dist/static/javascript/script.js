// GETTING DOM ITEMS

//RUNNING CODE

const menu = document.getElementById("menu");
const mobileNavbar = document.getElementById("mobileNavbar")
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
})