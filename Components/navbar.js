const navbar = () => {
  return `<div id="topline">
  <div id="topline-left">
    <p>WOMEN</p>
    <p>MEN</p>
    <p>KIDS</p>
    <p>LIFE</p>
  </div>

  <div id="topline-right">
    <p id="signup">Signup for Newsletter</p>
    <p>My account</p>
    <p>My wishlist</p>
    <p>Malaysia | English</p>
  </div>
</div>

<div id="logo">
  <img
    src="http://drive.google.com/uc?export=view&id=1_NvKfRYvh3sC942R0_2SIZayRbMbtxej"
    alt=""
  />
</div>

<div id="bottomline">
  <div id="bottomline-left">
    <p>NEW ARRIVALS</p>
    <p>DESIGNERS</p>
    <p>CLOTHING</p>
    <p>SHOES</p>
    <p>BAGS</p>
    <p>ACCESSORIES</p>
    <p>JEWELRY</p>

    <p>SALE</p>
  </div>

  <div id="bottomline-right">
    <p>Search for...</p>
    <svg
      id="search"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
      <path
        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"
      />
    </svg>
  </div>
</div>

<hr id="hr" />
    <div id="changeText">
      <p id="elem">Get 10% off your first order when you spend over €600</p>
    </div>`;
};

const navbarSrc = () => {
  let elem = document.getElementById("elem");
  setInterval(change, 6000);

  function change() {
    elem.classList.add("hide");
    setTimeout(function () {
      elem.innerText =
        elem.innerText ===
        "Get 10% off your first order when you spend over €600"
          ? "Use code WELCOME10 for 10% off selected full-price items"
          : "Get 10% off your first order when you spend over €600";
      elem.classList.remove("hide");
    }, 500);
  }
};

export { navbar, navbarSrc };
