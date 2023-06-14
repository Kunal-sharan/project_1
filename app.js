const s2=document.querySelector(".review2");
const s1=document.querySelector(".review1");
const r=document.querySelector(".right");
const l=document.querySelector(".left");

function slideright(){
    s2.style.transform='translateX(0)';
    s1.style.transform='translateX(-100vw)';

}
r.addEventListener("click",slideright);
function slideleft(){
    s2.style.transform='translateX(100vw)';
    s2.style.transition='1s ease-out';
    s1.style.transform='translateX(0vw)';
    s1.style.transition='1s ease-out';
}
l.addEventListener("click",slideleft);

hamburger=document.querySelector(".hamburger");
navmiddle=document.querySelector(".navmiddle");
navright=document.querySelector(".navright");
navbar=document.querySelector(".navbar");
hamburger.addEventListener("click",()=>{
    navmiddle.classList.toggle('vclass');
    navright.classList.toggle('vclass');
    navbar.classList.toggle('hclass');
});
h=document.querySelector(".h");
dropdown=document.querySelector(".dropdown");
h.addEventListener("click",()=>{
    dropdown.classList.toggle('hide');
});
h1=document.querySelector(".h1");
dropdown1=document.querySelector(".dropdown1");
h1.addEventListener("click",()=>{
    dropdown1.classList.toggle('hide');
});
h2=document.querySelector(".h2");
dropdown2=document.querySelector(".dropdown2");
h2.addEventListener("click",()=>{
    dropdown2.classList.toggle('hide');
});
h3=document.querySelector(".h3");
dropdown3=document.querySelector(".dropdown3");
h3.addEventListener("click",()=>{
    dropdown3.classList.toggle('hide');
});
