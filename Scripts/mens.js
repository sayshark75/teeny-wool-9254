

    // <!-- Initialize Swiper -->
    
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
    
      // popup function--------------
    //   let popup_div=document.querySelector(".popup")
    //   let star=document.querySelector(".star_icon")
      
    //   star.onclick=()=>{
    //     popup()
    // }
    // function popup(){
    //   console.log("y")
    //   popup_div.style.visibility="visible"
    //   star.style.visibility="hidden"
    // }
    // // close funnction-----------
    // let cut = document.querySelector(".close")
    // cut.onclick=()=>{
    //   close()
    // }
    // function close(){
    //   popup_div.style.visibility="hidden"
    //   star.style.visibility="visible"
    // }
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

   
  
    
    
    