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