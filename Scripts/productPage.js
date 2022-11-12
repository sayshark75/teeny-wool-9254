import { navbar, navbarSrc } from "../Components/navbar.js"

document.getElementById("navbar").insertAdjacentHTML("afterbegin",navbar())
navbarSrc()

// for category--------------
let wrapp = document.getElementById("angledown")
let cat = document.getElementById("cat_sec")
let angleup = document.getElementById("angleup")
let cat_h6=document.getElementById("cat_h6")
angleup.onclick=()=>{
    wrapOn()
}
wrapp.onclick=()=>{
    wrap()
}
function wrap(){
    cat.style.display= "none"
    angleup.style.visibility="visible"
    cat_h6.style.visibility="visible"
}
function wrapOn(){
    cat.style.display= ""
    angleup.style.visibility="hidden"
    cat_h6.style.visibility="hidden"
}
// for designer--------------
let wrapp2 = document.getElementById("angledown2")
let cat2 = document.getElementById("cat_sec2")
let angleup2 = document.getElementById("angleup2")
let cat2_h6=document.getElementById("cat2_h6")
angleup2.onclick=()=>{
    wrapOn2()
}
wrapp2.onclick=()=>{
    wrap2()
}
function wrap2(){
    cat2.style.display= "none"
    angleup2.style.visibility="visible"
    cat2_h6.style.visibility="visible"
}
function wrapOn2(){
    cat2.style.display= ""
    angleup2.style.visibility="hidden"
    cat2_h6.style.visibility="hidden"
}
// for colours------------
let wrapp3 = document.getElementById("angledown3")
let cat3 = document.getElementById("cat_sec3")
let angleup3 = document.getElementById("angleup3")
let cat3_h6=document.getElementById("cat3_h6")
angleup3.onclick=()=>{
    wrapOn3()
}
wrapp3.onclick=()=>{
    wrap3()
}
function wrap3(){
    cat3.style.display= "none"
    angleup3.style.visibility="visible"
    cat3_h6.style.visibility="visible"
}
function wrapOn3(){
    cat3.style.display= ""
    angleup3.style.visibility="hidden"
    cat3_h6.style.visibility="hidden"
}
// patternes--------------------
let wrapp4 = document.getElementById("angledown4")
let cat4 = document.getElementById("cat_sec4")
let angleup4 = document.getElementById("angleup4")
let cat4_h6=document.getElementById("cat4_h6")
angleup4.onclick=()=>{
    wrapOn4()
}
wrapp4.onclick=()=>{
    wrap4()
}
function wrap4(){
    cat4.style.display= "none"
    angleup4.style.visibility="visible"
    cat4_h6.style.visibility="visible"
}
function wrapOn4(){
    cat4.style.display= ""
    angleup4.style.visibility="hidden"
    cat4_h6.style.visibility="hidden"
}

// fetching data----------
// https://calm-beach-52240.herokuapp.com/mensData
// filtering-----------------

let cate = document.querySelectorAll(".cat_list")
cate.forEach((el)=>{
    el.addEventListener('click',(e)=>{
        
        
    e.target.classList.value = "fa-square fa-solid"
    
    })
})


let uncheck = document.getElementById("uncheck")
uncheck.addEventListener("click",uncheckAll)
function uncheckAll(){
  window.location.reload()
}

// fetching data----------------
// appending data------------
const append=async (data)=>{
   
    let container = document.getElementById("right_product")
    data.forEach((el)=>{
        let {name,price,description,image,type}=el
        let div = document.createElement("div")
     
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
        let bag_btn = document.createElement("button")
        bag_btn.innerText="Add to bag"
        bag_btn.onclick=()=>{
            addToBag(el)
        }
        
        let wish_btn = document.createElement("button")
        wish_btn.innerText="Add to wishlist"
        wish_btn.onclick=()=>{
            addToWish(el)
        }
        
        div.append(img,brand_name,brand_desc,pro_price,bag_btn,wish_btn)
        container.append(div)
    })
}

// pagination----------------
let post = document.getElementById("right_product")
let btn_div = document.getElementById("bottom_page")
const getDATA = async(clicked_button,limit)=>{
    let res = await fetch(`https://calm-beach-52240.herokuapp.com/mensData`)
    let data = await res.json()
    
    createButtons(data.length,18)
    
    
}
const getpageDATA = async(clicked_button,limit)=>{
    post.innerHTML=null;
   
    let res = await fetch(`https://calm-beach-52240.herokuapp.com/mensData?_page=${clicked_button}&_limit=${limit}`)
    let data = await res.json()
    
    append(data,post)
    // clicked_button.style.color="blue"
    
    
}
getDATA()
getpageDATA(1,18)

const createButtons=(total_images,images_per_page)=>{
    const buttons = Math.ceil( total_images/images_per_page);
    for(let i =1;i<=buttons;i++){
        let btn = document.createElement("button");
        btn.id=i;
        btn.innerText=i;
        btn.onclick=()=>{
            getpageDATA(i,18)

        }
        btn_div.append(btn)
    }

}

// --------------add to bag------

let arr=JSON.parse(localStorage.getItem("shoppingBag"))||[]
function addToBag(el){
    
    
    
    
    arr.push(el)
    
    localStorage.setItem("shoppingBag",JSON.stringify(arr))
}

// ----------------add to wish----------
let arr2 = JSON.parse(localStorage.getItem("lsDataKey"))||[]
function addToWish(el){
    arr2.push(el)
    localStorage.setItem("lsDataKey",JSON.stringify(arr2))
}

// sorting--------------------

let select = document.getElementById("select")
select.onchange = lowToHigh;
function lowToHigh(){
    if(this.value === "lowh"){
       lh()
    }
    else if(this.value === "highl"){
       hl()
    }
    else if(this.value === "newl"){
        console.log("no")
    }
    else if(this.value === "default"){
        random()
    }
    
}
const lh=async()=>{
    post.innerHTML=null;
    let res = await fetch(`https://calm-beach-52240.herokuapp.com/mensData?_sort=price&_order=asc`)
    let data = await res.json()
    append(data)
}
const hl=async()=>{
    post.innerHTML=null;
    let res = await fetch(`https://calm-beach-52240.herokuapp.com/mensData?_sort=price&_order=desc`)
    let data = await res.json()
    append(data)
}
const random=async()=>{
    post.innerHTML=null;
    let res = await fetch(`https://calm-beach-52240.herokuapp.com/mensData`)
    let data = await res.json()
    append(data)
}

// filtering-----------------
let bag= document.getElementById("bags")
bag.onclick=()=>{
filterBag()
}
const filterBag=async()=>{
    console.log("y")
    post.innerHTML=null;
    let res = await fetch(`https://calm-beach-52240.herokuapp.com/mensData?type=bags`)
    let data = await res.json()
    append(data)
}

let cloth= document.getElementById("cloth")
cloth.onclick=()=>{
filterCloth()
}
const filterCloth=async()=>{
    console.log("y")
    post.innerHTML=null;
    let res = await fetch(`https://calm-beach-52240.herokuapp.com/mensData?type=cloths`)
    let data = await res.json()
    append(data)
}

let shoes= document.getElementById("shoes")
shoes.onclick=()=>{
filterShoes()
}
const filterShoes=async()=>{
    console.log("y")
    post.innerHTML=null;
    let res = await fetch(`https://calm-beach-52240.herokuapp.com/mensData?type=shoes`)
    let data = await res.json()
    append(data)
}

let acc= document.getElementById("filter_acc")
acc.onclick=()=>{
    filteracc()
}
const filteracc=async()=>{
    console.log("y")
    post.innerHTML=null;
    let res = await fetch(`https://calm-beach-52240.herokuapp.com/mensData?type=accessories`)
    let data = await res.json()
    append(data)
}

// ---------------animation-------
let timer1 = document.getElementById("timer1")
let timer2 = document.getElementById("timer2")

(function(){
    var words = [
        'My Fashion Cart. Become a member now',
        'Be the first to know'
    ],
    i=0;
    setInterval(function(){
        $('#words').fadeOut(function(){
            $(this).html(words[(i=(i+1)%words.length)]).fadeIn();
        })
    },2000)
})();
