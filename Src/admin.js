


/////////variable Declaration
let APIURL = `https://calm-beach-52240.herokuapp.com/`;
let addMen = document.getElementById("addMen");
// let addWomen = document.getElementById("addWomen");
let container = document.getElementById("adminContainer");
let updateBtn = document.getElementById("updateBtn");
let restoreBtn = document.getElementById("restoreData");
let userName = document.getElementById("userName");

////////////Set Username here
userName.innerText = localStorage.getItem("nameOfUser")||"Sayyed Sharuk"

/////////Events
restoreBtn.addEventListener("click",() => {
  restoreData();
});

addMen.addEventListener("click", () => {
  sendData("mensData");
});

// addWomen.addEventListener("click", () => {
//   sendData("womensData");
// });

//////Api Calls
const getServerData = async () => {
  let res = await fetch(APIURL + "womensData");
  let data = await res.json();
  console.log("data: ", data);
  appendData(data);
};
getServerData();

////////Post Data to server
const sendData = async (where) => {
  let nameVal = document.getElementById("name").value;
  let descVal = document.getElementById("description").value;
  let priceVal = document.getElementById("price").value;
  let typeVal = document.getElementById("type").value;
  let imgUrl = document.getElementById("image").value;
  let hImgUrl1 = imgUrl.replace(".jpg", "_b2.jpg");
  let hImgUrl2 = imgUrl.replace(".jpg", "_d2.jpg");

  let sendThisData = {
    id: null,
    name: nameVal,
    price: +priceVal,
    description: descVal,
    type: typeVal,
    image: imgUrl,
    hoverImg1: hImgUrl1,
    hoverImg2: hImgUrl2,
  };

  const res = await fetch(APIURL + where, {
    method: "POST",
    body: JSON.stringify(sendThisData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await res.json();
  console.log("Sent Data:", where, data);
  getServerData();
};

///////////Append Data
const appendData = (data) => {
  container.innerHTML = null;
  data.forEach((el) => {
    let { id, type, description, image, name, price } = el;

    let card = document.createElement("div");
    card.className = "item";
    let idTag = document.createElement("p");
    idTag.innerText = "ID " + id;
    let nameTag = document.createElement("h4");
    nameTag.innerText = "Name: " + name;
    let priceTag = document.createElement("p");
    priceTag.className = "product_price";
    priceTag.innerText = "Price: " + price + " €";
    let deliveryDate = document.createElement("p");
    deliveryDate.className = "product_delivery";
    deliveryDate.innerText = "Category: " + type;
    let desc = document.createElement("p");
    desc.innerText = "Description: " + description;
    let imgTag = document.createElement("img");
    imgTag.src = image;
    let updateBtn = document.createElement("button");
    updateBtn.innerText = "Update Price";
    updateBtn.addEventListener("click",() => {
      updateDataFun(id);
    })
    let removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove Item";
    removeBtn.addEventListener("click", () => {
      removeData(id);
    });
    card.append(
      imgTag,
      idTag,
      nameTag,
      priceTag,
      deliveryDate,
      desc,
      removeBtn,
      updateBtn,
    );
    container.append(card);
  });
};

//////////Remove Data
const removeData = async (id) => {
  let resp = await fetch(APIURL + "mensData/"+id);
  let recycleData = await resp.json();
  let lsData = JSON.parse(localStorage.getItem("recycleData")) || [];
  lsData.push(recycleData);
  localStorage.setItem("recycleData",JSON.stringify(lsData));

  let res = await fetch(APIURL + "mensData/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await res.json();
  console.log("Delete: ", data);
  getServerData();
};

////////updatePrice
const updateDataFun = async (id) => {
  let priceVal = prompt("Enter new Price Value");

  let sendThisData = {
    price: +priceVal,
  };

  let res = await fetch(APIURL + "mensData/" + id, {
    method: "PATCH",
    body: JSON.stringify(sendThisData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await res.json();
  console.log("posted: ", data);
  getServerData();
};

////////restoreData
const restoreData =async () => {
  let lsData = JSON.parse(localStorage.getItem("recycleData"))||[];
  lsData.forEach(async(elem) => {
    console.log(lsData);
    let res = await fetch(APIURL+"mensData",{
      method:"POST",
      body: JSON.stringify(elem),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    console.log('data: ', data);
    localStorage.removeItem("recycleData");
    getServerData();
  });
}