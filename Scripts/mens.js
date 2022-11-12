import { navbar, navbarSrc } from "../Components/navbar.js"

document.getElementById("navbar").insertAdjacentHTML("afterbegin",navbar())
navbarSrc()
    


    var swiper = new Swiper(".mySwiper", {

      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
      loop: true,
      loopFillGroupWithBlank: true,
    
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  

  let cut = document.querySelectorAll(".close")
  let star=document.querySelectorAll(".star_icon")
  let popup_div=document.querySelectorAll(".popup") 

  star.forEach((el)=>{
   el.addEventListener("click",(e)=>{
    // console.log(e.target.parentElement.parentElement.children[0])
    e.target.parentElement.parentElement.children[0].style.visibility="visible"
    e.target.parentElement.parentElement.children[1].style.visibility="hidden"
   })
  })
  cut.forEach((el)=>{
   el.addEventListener("click",(e)=>{
    
    
    e.target.parentElement.parentElement.children[0].style.visibility="hidden"
    e.target.parentElement.parentElement.children[1].style.visibility="visible"
    
   })
  }) 
// ---------------------add to bag----------
let bag = document.querySelectorAll(".addBag")
let arr1 = JSON.parse(localStorage.getItem("shoppingBag"))||[]
bag.forEach((el)=>{
el.addEventListener('click',(e)=>{
  console.log("y")
  let obj={
    image:e.path[2].children[2].children[0].currentSrc,
    name:e.path[2].children[2].children[1].innerText,
    price:e.path[2].children[2].children[2].innerText,
  }
  
  arr1.push(obj)
  localStorage.setItem("shoppingBag",JSON.stringify(arr1))
})
})
// ---------------------add to wishlist----------
let wl = document.querySelectorAll(".addWl")
let arr2 = JSON.parse(localStorage.getItem("lsDataKey"))||[]
wl.forEach((el)=>{
el.addEventListener('click',(e)=>{
  console.log(e.path[2].children[2].children)
  let obj={
    image:e.path[2].children[2].children[0].currentSrc,
    name:e.path[2].children[2].children[1].innerText,
    price:e.path[2].children[2].children[2].innerText,
  }
  
  arr2.push(obj)
  localStorage.setItem("lsDataKey",JSON.stringify(arr2))
 
})
})

  
  
  