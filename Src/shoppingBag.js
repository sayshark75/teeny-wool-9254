import { faIcons, bootStrap5 } from "../Scripts/headLinks.js";
import { navbar, navbarSrc } from "../Components/navbar.js";
import { footer } from "../Components/footer.js";
////////// Must be Imported to Every Page for any Bootstrap Work or Fa-Icons to Work
////////// Always use Free FA-Icons
document.head.insertAdjacentHTML("afterbegin", faIcons());
document.head.insertAdjacentHTML("afterbegin", bootStrap5());
document.getElementById("navbar").insertAdjacentHTML("afterbegin", navbar());
document.getElementById("lastEnd").insertAdjacentHTML("afterend", footer());

///////////Navbar Script
navbarSrc();

//////////define Varibales
////////get LS Data
let lsData = JSON.parse(localStorage.getItem("shoppingBag")) || [];
console.log("lsData: ", lsData);
let sbCardsContainer = document.getElementById("sbAppendCards");
let totalPrice = 0;
let sbTotal = document.getElementById("sbTotal");
let sbGrandTotal = document.getElementById("sbGrandTotal");
let bagEmptyBtn = document.getElementById("bagEmptyBtn");
let sbCheckoutBtn = document.querySelectorAll(".sbCheckoutBtn");

//////////Events
bagEmptyBtn.addEventListener("click",() => {
  location.href = "womenproduct.html"
});

sbCheckoutBtn.forEach((el)=>{
  el.addEventListener("click",() => {
    if(localStorage.getItem("nameOfUser")!=null){
      location.href = "payments.html"
    }else{
      location.href = "auth.html"
    }
  });
});


////////Check LS Data is Empty sbTopData sbLastBtns
const checkLSData = () => {
  if (lsData.length != 0) {
    document.getElementById("sbLastBtns").style.display = "flex";
    document.getElementById("sbTopData").style.display = "block";
    document.getElementById("sbAppendCards").style.display = "block";
    document.getElementById("sbCalculationSection").style.display = "flex";
    document.getElementById("bagEmpty").style.display = "none";
  }else{
    document.getElementById("sbLastBtns").style.display = "none";
    document.getElementById("sbTopData").style.display = "none";
    document.getElementById("sbAppendCards").style.display = "none";
    document.getElementById("sbCalculationSection").style.display = "none";
    document.getElementById("bagEmpty").style.display = "flex";
  }
}
checkLSData();

const appendData = (myData) => {

  sbCardsContainer.innerHTML = null;
  totalPrice = 0;
  myData.forEach((el, i) => {
    let { name, image, description, price } = el;
    /////////Count Total Price
    totalPrice += +price;
    sbTotal.innerText = totalPrice;
    ///////CreateElements
    /////Divs
    let sbCards = document.createElement("div");
    let sbProdSection = document.createElement("div");
    let sbImgHolder = document.createElement("div");
    let sbDataHolder = document.createElement("div");
    let sbCalcSection = document.createElement("div");
    let emptyDiv = document.createElement("div");
    //////Elements
    let sbImg = document.createElement("img");
    let sbNameText = document.createElement("p");
    let sbDescText = document.createElement("p");
    let sbRemoveBtn = document.createElement("button");
    let sbPriceVal = document.createElement("h3");
    let newLine = document.createElement("hr");

    ////////Apply Classes
    sbCards.className = "sbCards";
    sbProdSection.className = "sbProdSection";
    sbImgHolder.className = "sbImgHolder";
    sbDataHolder.className = "sbDataHolder";
    sbCalcSection.className = "sbCalcSection";
    sbImg.className = "sbImg";
    sbNameText.className = "sbNameText";
    sbDescText.className = "sbDescText";
    sbRemoveBtn.className = "sbRemoveBtn";
    sbPriceVal.className = "sbPriceVal";

    ////////Add Data
    sbImg.src = image;
    sbNameText.innerText = name;
    sbDescText.innerText = description;
    sbRemoveBtn.innerHTML = `<i class="fa-regular fa-circle-xmark"></i> Remove Item`;
    sbPriceVal.innerText = `€ ${price}`;

    ////////Structurly Append With Divs
    sbImgHolder.append(sbImg);
    sbDataHolder.append(sbNameText, sbDescText, sbRemoveBtn);
    sbProdSection.append(sbImgHolder, sbDataHolder);
    sbCalcSection.append(emptyDiv, sbPriceVal);
    sbCards.append(sbProdSection, sbCalcSection);
    sbCardsContainer.append(sbCards, newLine);

    ////////Remove Event
    sbRemoveBtn.addEventListener("click", () => {
      removeProduct(i);
    });
  });
  sbGrandTotal.innerText = totalPrice + 20;
};

const removeProduct = (i) => {
  lsData.splice(i, 1);
  localStorage.setItem("shoppingBag", JSON.stringify(lsData));
  appendData(lsData);
  checkLSData();
};

appendData(lsData);
