
    
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

  // fetching data----------------

  const getmyData = async()=>{
    try {
        let res = await fetch("https://calm-beach-52240.herokuapp.com/womensData?_limit=8");
        let data = await res.json()
        console.log(data)
        append(data)
    } catch (error) {
        console.log(error) 
    }
} 
getmyData()

// append----------------
const append=async (data)=>{
   
  // let c = document.getElementsByClassName("swiper-wrapper")
  let container=document.getElementById("swiper_id")
  data.forEach((el)=>{
    // container.insertAdjacentHTML('afterbegin',slider_card())
    
      let {name,price,description,image}=el
      let div = document.getElementsByClassName(".swiper-slide")
   
      let img = document.createElement("img")
      
      img.src = image
      let brand_name = document.createElement("p")
      brand_name.innerText=name
      let brand_desc = document.createElement("p")
      brand_desc.innerText=description
      brand_desc.style.color="gray"
      let pro_price=document.createElement("p")
      pro_price.innerText= "$"+price
      pro_price.style.fontWeight="bold"
      
      
     
      
      div.append(img,brand_name,brand_desc,pro_price)
      container.append(div)
  })
}

 

  
  
  