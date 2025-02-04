let red=document.querySelector(".bgred")

red.addEventListener("click",() => {
    red.style.backgroundColor="red"
})

let green =document.querySelector(".bggreen")

green.addEventListener("mouseenter",() => {
    green.style.backgroundColor="green"
})
let yellow=document.querySelector(".bgyellow")

yellow.addEventListener("mousedown",() => {
    yellow.style.backgroundColor="yellow"
})
let blue=document.querySelector(".blue")

blue.addEventListener("mousedown",() => {
    blue.style.color="blue"
})

let div=document.createElement("div")
// let att=document.createAttribute("Name")
// div.setAttributeNode(att)
blue.setAttribute("name","omar")

let obliquetext=document.querySelector(".oblique")
obliquetext.addEventListener("click",function(){
 if (green.style.fontStyle === "normal"){
    green.style.fontStyle = "oblique";
 } else {
    green.style.fontStyle = "normal"
 }
})
let italictext=document.querySelector(".italic") 
italictext.addEventListener("click",function(){
    if (red.style.fontStyle === "italic") {
        red.style.fontStyle = "normal";
      } else {
        red.style.fontStyle = "italic";
      }
});
let UpperCase=document.querySelector(".UpperCase") 
// UpperCase.addEventListener("click", () => {
//     yellow.style.textTransform = "uppercase"; 
// });

UpperCase.addEventListener("click",function(){
    if (yellow.style.textTransform === "uppercase") {
        yellow.style.textTransform = "normal";
      } else {
        yellow.style.textTransform = "uppercase";
      }
});
let LowerCase=document.querySelector(".LowerCase") 
LowerCase.addEventListener("click",function(){
    if (yellow.style.textTransform === "lowercase") {
        yellow.style.textTransform = "normal";
      } else {
        yellow.style.textTransform = "lowercase";
      }
});
const ClearText=document.querySelector(".ClearText") 
ClearText.addEventListener("click",function(){
    "use strict";
    red.classList.toggle("clear-red");
});

// bold.addEventListener("click", () => {
//     if (square.style.fontWeight === "bold") {
//         square.style.fontWeight = "normal";
//     } else {
//         square.style.fontWeight = "bold";
//     }
//   });
