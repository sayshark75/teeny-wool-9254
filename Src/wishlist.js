import { faIcons, bootStrap5 } from "../Scripts/headLinks.js";
import { navbar ,navbarSrc } from "../Components/navbar.js";
import { wishCard } from "../Components/wishCard.js";
document.head.insertAdjacentHTML("afterbegin", faIcons());
document.head.insertAdjacentHTML("afterbegin", bootStrap5());
document.getElementById("navbar").insertAdjacentHTML("afterbegin", navbar());

////////Hide the WishCards Block
document.getElementById("wishItems").style.display = "none";

////////navbar text Changer
navbarSrc();

////////filterEvents
