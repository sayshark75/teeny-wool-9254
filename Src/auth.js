import { faIcons, bootStrap5 } from "../Scripts/headLinks.js";
import { navbar, navbarSrc } from "../Components/navbar.js";
import { footer } from "../Components/footer.js";
import { postData, getData } from "../Scripts/requests.js";
import { lottieLoading } from "../Components/loadingLottie.js";

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
let logInApi = `https://calm-beach-52240.herokuapp.com/loginData`;
let adminApi = `https://calm-beach-52240.herokuapp.com/adminData`;
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
  let isMobileValid = mobInfo.length == 10;
  ////////validate email
  let isEmailValid = emailInfo.includes("@");
  let sendData = {
    id: null,
    name: regForm.nameIp.value,

    password: passInfo,
    mobile: mobInfo,
    email: emailInfo,
  };
  let sendLoginData = {
    id: null,
    name: regForm.nameIp.value,
    username: regForm.userNameIp.value,
    password: passInfo,
  };
  if (isMatchCPass) {
    if (isValid) {
      if (isEmailValid) {
        if (isMobileValid) {
          ////////Post Request
          let data = postData(regApi, sendData);
          let logData = postData(logInApi, sendLoginData);
          authRegSubmitBtn.style.visibility = "hidden";
          setTimeout(() => {
            location.reload();
          }, 3000);
        } else {
          alert("Mobile Number length not valid");
        }
      } else {
        alert("Invalid Email");
      }
    } else {
      alert("Password Length must be 8 or greater");
    }
  } else {
    alert("Password and Confirm Password does not match");
  }
});

/////////Login Validation
let loginForm = document.getElementById("authLogForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("e: ", e);

  /////////get form Data
  let username = loginForm.authLogUser.value;
  console.log("username: ", username);
  let passInfo = loginForm.authLogPass.value;
  console.log("passInfo: ", passInfo);

  ///////Validate Pass Length
  let isValid = passInfo.length >= 8;
  console.log("isValid: ", isValid);
  console.log("e.submitter.value: ", e.submitter.value);

  if (e.submitter.value == "Login" && isValid) {
    checkLogInUser(username, passInfo);
  } else if (e.submitter.value == "Login as Admin" && isValid) {
    checkAdminUser(username, passInfo);
  } else {
    alert("Account not Found, please try again");
  }
});

const checkLogInUser = async (u, p) => {
  let loginData = await getData(logInApi);
  console.log("loginData: ", loginData);
  let nameLogger;
  let flag = loginData.every((el) => {
    if (el.username == u && el.password == p) {
      nameLogger = el.name;
      return false;
    }
    return true;
  });
  console.log("nameLogger", nameLogger);
  flag
    ? alert("Account Not Found, Please try again")
    : (alert("Logged in successfully"),
      localStorage.setItem("nameOfUser", nameLogger),
      (location.href = "index.html"));
};

const checkAdminUser = async (u, p) => {
  let authData = await getData(adminApi);
  let nameLogger;
  let flag = authData.every((el) => {
    if (el.username == u && el.password == p) {
      nameLogger = el.name;
      return false;
    }
    return true;
  });
  flag
    ? alert("Account Not Found, Please try again")
    : (alert("Logged in successfully"),
      localStorage.setItem("nameOfUser", nameLogger),
      (location.href = "admin.html"));
};
