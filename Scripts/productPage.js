// let box = document.querySelector(" .cat_list i")
// let x;
// box.onclick=()=>{
//     checkbox()
// }
// function checkbox(){
   
//    box.style.backgroundColor="black" 
    
// }

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
        console.log(e)
        
    e.target.classList.value = "fa-square fa-solid"
        
    })
})
let checked = document.querySelector(".cat_list>i")
console.log(checked.length)
let uncheck = document.getElementById("uncheck")
uncheck.addEventListener("click",function(){
console.log("y")
})
