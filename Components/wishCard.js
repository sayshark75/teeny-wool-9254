const wishCard = (imgSrc,title,desc,price) => {
  return `<div class="wishCard">
  <div class="wishCardTop">
    <i class="fa-solid fa-xmark"></i>
  </div>
  <img class="wishCardImage" src=${imgSrc} alt="cardImg">
  <p class="wishCardName">${title}</p>
  <p class="wishCardDesc">${desc}</p>
  <p class="wishCardPrice">€ ${price}</p>
  <button class="wishCardMoveToBag">Move to Bag</button>
</div>`
}

export {wishCard};