import { faIcons, bootStrap5 } from "../Scripts/headLinks.js";
import { navbar, navbarSrc } from "../Components/navbar.js";
// import { wishCard } from "../Components/wishCard.js";
import { footer } from "../Components/footer.js";

document.head.insertAdjacentHTML("afterbegin", faIcons());
document.head.insertAdjacentHTML("afterbegin", bootStrap5());
document.getElementById("navbar").insertAdjacentHTML("afterbegin", navbar());
document
  .getElementById("endOfWishPage")
  .insertAdjacentHTML("afterend", footer());

////////Hide the WishCards Block
document.getElementById("wishItems").style.display = "none";
document.getElementById("wishFilter").style.display = "none";
////////navbar text Changer
navbarSrc();

/////////Variable Declarations
let lsData = JSON.parse(localStorage.getItem("lsDataKey")) || [];

let bagsSort = document.getElementById("bagsSort");
let accessoriesSort = document.getElementById("accessoriesSort");
let clothingSort = document.getElementById("clothingSort");
let shoesSort = document.getElementById("shoesSort");
let jewelrySort = document.getElementById("jewelrySort");
let wishEmptyBtn = document.getElementById("wishEmptyBtn");

/////////Events
wishEmptyBtn.addEventListener("click",() => {
  location.href = "womenproduct.html";
});

/////////LS Data Check and unHide Card And Filter
const checkLSData = () => {
  if (lsData.length != 0) {
    document.getElementById("wishItems").style.display = "grid";
    document.getElementById("wishFilter").style.display = "block";
    document.getElementById("wishEmpty").style.display = "none";
  }else{
    document.getElementById("wishItems").style.display = "none";
    document.getElementById("wishFilter").style.display = "none";
    document.getElementById("wishEmpty").style.display = "flex";
  }
}
checkLSData();

////////WishCard Creeation
const wishCard = (where, obj) => {
  let {image, name, description, price} = obj;
  let card = document.createElement("div");
  card.className = "wishCard";
  let cardTop = document.createElement("div");
  cardTop.className = "wishCardTop";
  let cross = document.createElement("i");
  cross.className = "fa-solid fa-xmark";

  let imgTag = document.createElement("img");
  imgTag.className = "wishCardImage";
  imgTag.src = image;
  let nameTag = document.createElement("p");
  nameTag.className = "wishCardName";
  nameTag.innerText = name;
  let descTag = document.createElement("p");
  descTag.className = "wishCardDesc";
  descTag.innerText = description;
  let priceTag = document.createElement("p");
  priceTag.className = "wishCardPrice";
  priceTag.innerText = "€ " + price;
  let moveTag = document.createElement("button");
  moveTag.innerText = "Move to Bag";
  moveTag.className = "wishCardMoveToBag";

  cardTop.append(cross);
  card.append(cardTop, imgTag, nameTag, descTag, priceTag, moveTag);
  where.append(card);
  cross.addEventListener("click", (e) => {
    let myData = lsData.filter((elem) => {
      return elem.description!=description;
    });
    lsData = myData;
    localStorage.setItem("lsDataKey",JSON.stringify(lsData));
    checkLSData();
    appendData(lsData);

  });
  moveTag.addEventListener("click", (e) => {
    let myData = lsData.filter((elem) => {
      return elem.description!=description;
    });
    lsData = myData;
    localStorage.setItem("lsDataKey",JSON.stringify(lsData));
    let shopData = JSON.parse(localStorage.getItem("shoppingBag"))||[];
    shopData.push(obj);
    localStorage.setItem("shoppingBag",JSON.stringify(shopData));
    checkLSData();
    appendData(myData);

  });
};

//////////Append Cards in wish Items
const appendData = (myData) => {
  lsData = JSON.parse(localStorage.getItem("lsDataKey")) || [];
  document.getElementById("wishItems").innerHTML = null;
  myData.forEach((el) => {
    let wishItems = document.getElementById("wishItems");
    wishCard(wishItems, el);
  });
};

appendData(lsData);

//////////Sortby Type
const sortByType = (myData, type) => {
  let sortData = myData.filter((el) => {
    return el.type == type;
  });

  appendData(sortData);
};

////////Filter Enable-Disable Event
let filterBody = document.querySelectorAll(".wishFilterBody");
filterBody.forEach((el) => {
  el.addEventListener("click", (e) => {
    console.log(e.target.firstChild.classList[1]);
    e.target.firstChild.classList[1] == "fa-regular"
      ? (e.target.firstChild.classList.remove("fa-regular"),
        e.target.firstChild.classList.add("fa-solid"))
      : (e.target.firstChild.classList.remove("fa-solid"),
        e.target.firstChild.classList.add("fa-regular"));
  });
});

///////////FilterEvents
let toggle = [0, 0, 0, 0, 0];
bagsSort.addEventListener("click", () => {
  if (toggle[0] == 0) {
    toggle[0] = 1;
    console.log("bagEnable");
    sortByType(lsData, "bags");
  } else {
    toggle[0] = 0;
    console.log("bagDisable");
    appendData(lsData);
  }
});
accessoriesSort.addEventListener("click", () => {
  if (toggle[1] == 0) {
    toggle[1] = 1;
    console.log("accessoriesEnable");
    sortByType(lsData, "accessories");
  } else {
    toggle[1] = 0;
    console.log("accessoriesDisable");
    appendData(lsData);
  }
});
clothingSort.addEventListener("click", () => {
  if (toggle[2] == 0) {
    toggle[2] = 1;
    console.log("clothsEnable");
    sortByType(lsData, "cloths");
  } else {
    toggle[2] = 0;
    console.log("clothsDisable");
    appendData(lsData);
  }
});
shoesSort.addEventListener("click", () => {
  if (toggle[3] == 0) {
    toggle[3] = 1;
    console.log("shoesEnable");
    sortByType(lsData, "shoes");
  } else {
    toggle[3] = 0;
    console.log("shoesDisable");
    appendData(lsData);
  }
});
jewelrySort.addEventListener("click", () => {
  if (toggle[4] == 0) {
    toggle[4] = 1;
    console.log("jewelryEnable");
    sortByType(lsData, "jewelry");
  } else {
    toggle[4] = 0;
    console.log("jewelryDisable");
    appendData(lsData);
  }
});

