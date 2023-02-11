var bb=document.querySelector(".bb");
var career=document.querySelector("#career");
// window.addEventListener("load",()=>{
//     career.innerHTML="";
// });
var b11=document.querySelector(".b11");
var b12=document.querySelector(".b12");
var pinfo=document.querySelector("#pinfo");
var center=document.querySelector(".center");
const getColor=(e)=>{
    return window.getComputedStyle(e).backgroundColor;
}
const colorChanger=(e,color)=>{
           return e.addEventListener("mouseenter",()=>{
                  center.style.backgroundColor=color; 
           })           
}
colorChanger(b11,getColor(b11));
colorChanger(b12,getColor(b12));

b12.addEventListener("mouseenter",()=>{
    career.innerHTML="";
    career.innerHTML="personal info";
});
b11.addEventListener("mouseenter",()=>{
    career.innerHTML="";
    career.innerHTML="career";
});
bb.addEventListener("mouseenter",()=>{
    bb.style.backgroundColor="red";
});