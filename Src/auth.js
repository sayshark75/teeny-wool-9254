import { faIcons, bootStrap5 } from "../Scripts/headLinks.js";
import { navbar, navbarSrc } from "../Components/navbar.js";
import { footer } from "../Components/footer.js";
import { postData } from "../Scripts/requests.js";
import {lottieLoading} from "../Components/loadingLottie.js";

////////// Must be Imported to Every Page for any Bootstrap Work or Fa-Icons to Work
////////// Always use Free FA-Icons
document.head.insertAdjacentHTML("afterbegin", faIcons());
document.head.insertAdjacentHTML("afterbegin", bootStrap5());
document.getElementById("navbar").insertAdjacentHTML("afterbegin", navbar());
document.getElementById("lastEnd").insertAdjacentHTML("afterend", footer());

///////////Navbar Script
navbarSrc();

//////////Variable Declarations
let regApi = `https://calm-beach-52240.herokuapp.com/register`;
let authRegSubmitBtn = document.getElementById("authRegSubmitBtn");

let regForm = document.getElementById("authRegForm");
regForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let emailInfo = regForm.emailIp.value;
  let passInfo = regForm.passwordIp.value;
  let cpassInfo = regForm.cpasswordIp.value;
  let mobInfo = regForm.mobileIp.value;
  ///////Matching Password
  let isMatchCPass = passInfo == cpassInfo;
  ///////Validate Pass Length
  let isValid = passInfo.length >= 8;
  ///////mobileValidation
  let isMobileValid = mobInfo.length==10;
  ////////validate email
  let isEmailValid = emailInfo.includes("@");
  let sendData = {
    id:null,
    name:regForm.nameIp.value,
    username:regForm.userNameIp.value,
    password:passInfo,
    mobile:mobInfo,
    email:emailInfo,
  }
  if(isMatchCPass){
    if(isValid){
      if(isEmailValid){
        if(isMobileValid){
          ////////Post Request
          let data = postData(regApi,sendData);
          authRegSubmitBtn.innerHTML = lottieLoading(80,80);
          setTimeout(() => {
            location.reload();
          },4000)
        }else{
          alert("Mobile Number length not valid")
        }
      }else{
        alert("Invalid Email")
      }
    }else{
      alert("Password Length must be 8 or greater")
    }
  }else{
    alert("Password and Confirm Password does not match");
  }
});




