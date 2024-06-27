// GETTING DOM ITEMS

//RUNNING CODE

const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar")
var isOpen = false;
console.log(window.innerWidth);


menu.addEventListener("click", function(){
  menu.classList.toggle("menu-open");

  if(isOpen){
    navbar.classList.remove("navbar")
    navbar.classList.add("navbar-hidden")
    isOpen = false;
  }
  else{
    navbar.classList.remove("navbar-hidden")
    navbar.classList.add("navbar")
    isOpen = true;
  }
}