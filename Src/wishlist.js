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
// let lsData = [
//   {
//     id: 1,
//     name: "THOM SWEENEY",
//     price: 299,
//     description: "Cashmere scarf",
//     type: "accessories",
//     image:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/3c/P00748956.jpg",
//     hoverImg1:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/3c/P00748956_b2.jpg",
//     hoverImg2:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/3c/P00748956_d2.jpg",
//   },
//   {
//     id: 2,
//     name: "AURALEE",
//     price: 379,
//     description: "Blouson denim jacket",
//     type: "cloths",
//     image:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/cb/P00690507.jpg",
//     hoverImg1:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/cb/P00690507_b2.jpg",
//     hoverImg2:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/cb/P00690507_d2.jpg",
//   },
//   {
//     id: 3,
//     name: "KENZO",
//     price: 1599,
//     description: "Shearling-trimmed leather jacket",
//     type: "cloths",
//     image:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/22/P00675270.jpg",
//     hoverImg1:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/22/P00675270_b2.jpg",
//     hoverImg2:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/22/P00675270_d2.jpg",
//   },
//   {
//     id: 4,
//     name: "OUR LEGACY",
//     price: 239,
//     description: "Box cotton shirt",
//     type: "cloths",
//     image:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/0a/P00706124.jpg",
//     hoverImg1:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/0a/P00706124_b2.jpg",
//     hoverImg2:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/0a/P00706124_d2.jpg",
//   },
//   {
//     id: 5,
//     name: "MAISON MARGIELA",
//     price: 439,
//     description: "Wool drawstring pants",
//     type: "cloths",
//     image:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/64/P00581441.jpg",
//     hoverImg1:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/64/P00581441_b2.jpg",
//     hoverImg2:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/64/P00581441_d2.jpg",
//   },
//   {
//     id: 6,
//     name: "GUCCI",
//     price: 315,
//     description: "GG Supreme Canvas belt",
//     type: "accessories",
//     image:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/53/P00737675.jpg",
//     hoverImg1:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/53/P00737675_b2.jpg",
//     hoverImg2:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/53/P00737675_d2.jpg",
//   },
//   {
//     id: 7,
//     name: "NANUSHKA",
//     price: 249,
//     description: "Bruna bio-plastic sunglasses",
//     type: "accessories",
//     image:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/b1/P00690709.jpg",
//     hoverImg1:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/b1/P00690709_b2.jpg",
//     hoverImg2:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/b1/P00690709_d2.jpg",
//   },
//   {
//     id: 8,
//     name: "MARNI",
//     price: 645,
//     description: "Striped mohair-blend sweater vest",
//     type: "cloths",
//     image:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/1b/P00701191.jpg",
//     hoverImg1:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/1b/P00701191_b2.jpg",
//     hoverImg2:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/1b/P00701191_d2.jpg",
//   },
//   {
//     id: 9,
//     name: "NANUSHKA",
//     price: 839,
//     description: "Elias cotton canvas jacket",
//     type: "cloths",
//     image:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/8f/P00690770.jpg",
//     hoverImg1:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/8f/P00690770_b2.jpg",
//     hoverImg2:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/8f/P00690770_d2.jpg",
//   },
//   {
//     id: 10,
//     name: "JIL SANDER",
//     price: 328,
//     description: "Logo cotton sweatshirt",
//     type: "cloths",
//     image:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/8d/P00683260.jpg",
//     hoverImg1:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/8d/P00683260_b2.jpg",
//     hoverImg2:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/8d/P00683260_d2.jpg",
//   },
//   {
//     id: 11,
//     name: "FRESCOBOL CARIOCA",
//     price: 225,
//     description: "Oscar straight linen chinos",
//     type: "cloths",
//     image:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/29/P00760454.jpg",
//     hoverImg1:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/29/P00760454_b2.jpg",
//     hoverImg2:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/29/P00760454_d2.jpg",
//   },
//   {
//     id: 12,
//     name: "NEW BALANCE",
//     price: 115,
//     description: "550 leather sneakers",
//     type: "shoes",
//     image:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/5d/P00767157.jpg",
//     hoverImg1:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/5d/P00767157_b2.jpg",
//     hoverImg2:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/5d/P00767157_d2.jpg",
//   },
//   {
//     id: 13,
//     name: "VALENTINO GARAVANI",
//     price: 275,
//     description: "VLogo chain bracelet",
//     type: "jewelry",
//     image:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/d0/P00734296.jpg",
//     hoverImg1:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/d0/P00734296_b2.jpg",
//     hoverImg2:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/d0/P00734296_d2.jpg",
//   },
//   {
//     id: 14,
//     name: "NANUSHKA",
//     price: 1098,
//     description: "Joren wool and silk coat",
//     type: "cloths",
//     image:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/7e/P00690762.jpg",
//     hoverImg1:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/7e/P00690762_b2.jpg",
//     hoverImg2:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/7e/P00690762_d2.jpg",
//   },
//   {
//     id: 15,
//     name: "KENZO",
//     price: 585,
//     description: "Printed denim jacket",
//     type: "cloths",
//     image:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/76/P00675283.jpg",
//     hoverImg1:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/76/P00675283_b2.jpg",
//     hoverImg2:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/76/P00675283_d2.jpg",
//   },
//   {
//     id: 16,
//     name: "NANUSHKA",
//     price: 195,
//     description: "Sazzo bio-plastic sunglasses",
//     type: "accessories",
//     image:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/5c/P00690714.jpg",
//     hoverImg1:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/5c/P00690714_b2.jpg",
//     hoverImg2:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/5c/P00690714_d2.jpg",
//   },
//   {
//     id: 17,
//     name: "AMI PARIS",
//     price: 325,
//     description: "Logo drill tote bag",
//     type: "bags",
//     image:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/0f/P00680843.jpg",
//     hoverImg1:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/0f/P00680843_b2.jpg",
//     hoverImg2:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/0f/P00680843_d2.jpg",
//   },
//   {
//     id: 18,
//     name: "KENZO",
//     price: 415,
//     description: "Printed straight jeans",
//     type: "cloths",
//     image:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/ec/P00675281.jpg",
//     hoverImg1:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/ec/P00675281_b2.jpg",
//     hoverImg2:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/ec/P00675281_d2.jpg",
//   },
//   {
//     id: 19,
//     name: "MARNI",
//     price: 1029,
//     description: "Intarsia mohair-blend cardigan",
//     type: "cloths",
//     image:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/74/P00701166.jpg",
//     hoverImg1:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/74/P00701166_b2.jpg",
//     hoverImg2:
//       "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/74/P00701166_d2.jpg",
//   },
// ];
// localStorage.setItem("lsDataKey",JSON.stringify(lsData));
let bagsSort = document.getElementById("bagsSort");
let accessoriesSort = document.getElementById("accessoriesSort");
let clothingSort = document.getElementById("clothingSort");
let shoesSort = document.getElementById("shoesSort");
let jewelrySort = document.getElementById("jewelrySort");

/////////LS Data Check and unHide Card And Filter
const checkLSData = () => {
  if (lsData.length != 0) {
    document.getElementById("wishItems").style.display = "grid";
    document.getElementById("wishFilter").style.display = "block";
    document.getElementById("wishEmpty").style.display = "none";
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

