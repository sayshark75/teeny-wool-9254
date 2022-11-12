import { faIcons, bootStrap5 } from "../Scripts/headLinks.js";
import {navbar,navbarSrc} from "../Components/navbar.js";
import {footer} from "../Components/footer.js";
////////// Must be Imported to Every Page for any Bootstrap Work or Fa-Icons to Work
////////// Always use Free FA-Icons
document.head.insertAdjacentHTML("afterbegin",faIcons());
document.head.insertAdjacentHTML("afterbegin",bootStrap5());
document.getElementById("navbar").insertAdjacentHTML("afterbegin",navbar());
document.getElementById("lastEnd").insertAdjacentHTML("afterend",footer());

///////////Navbar Script
navbarSrc();





let newarrival = document.getElementById("womenpage")

newarrival.addEventListener("click",function(){
    locationchange()
})

const locationchange = ()=>{
    window.location.href="womenproduct.html"
}


  let designer= document.querySelectorAll(".designers")

  


designer.forEach(element => {
    element.onclick =() =>
        location.href="womenproduct.html"
});
