import { faIcons, bootStrap5 } from "../Scripts/headLinks.js"
import {navbar} from "../Components/navbar.js"
document.head.insertAdjacentHTML("afterbegin",faIcons());
document.head.insertAdjacentHTML("afterbegin",bootStrap5());
document.getElementById("navbar").insertAdjacentHTML("afterbegin",navbar());