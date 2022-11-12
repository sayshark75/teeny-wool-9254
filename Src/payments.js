import { faIcons, bootStrap5 } from "../Scripts/headLinks.js";
import { navbar, navbarSrc } from "../Components/navbar.js";
import { footer } from "../Components/footer.js";

document.head.insertAdjacentHTML("afterbegin", faIcons());
document.head.insertAdjacentHTML("afterbegin", bootStrap5());
document.getElementById("navbar").insertAdjacentHTML("afterbegin", navbar());
document.getElementById("lastEnd").insertAdjacentHTML("afterend", footer());
navbarSrc();

///////Variabel Decalarions

let orderForm = document.getElementById("orderForm");

orderForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let emailAddr = orderForm.emailIp.value;

  ////////////Validation
  let isValidEmail = emailAddr.includes("@");

  if (isValidEmail) {
    localStorage.removeItem("lsDataKey");
    localStorage.removeItem("shoppingBag");
    alert("Payment Successful");
    location.href = "index.html";
  } else {
    alert("Please give a valid Email Address");
  }
});
