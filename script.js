// ===========================
// Typing Animation
// ===========================

const typing = document.getElementById("typing");

const words = [
  "Frontend Developer",
  "Computer Science Student",
  "Web Designer",
  "AI Enthusiast",
  "Programmer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

  const currentWord = words[wordIndex];

  if (!deleting) {
    typing.textContent = currentWord.substring(0, charIndex++);
  } else {
    typing.textContent = currentWord.substring(0, charIndex--);
  }

  let speed = deleting ? 60 : 120;

  if (!deleting && charIndex === currentWord.length + 1) {
    deleting = true;
    speed = 1500;
  }

  if (deleting && charIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();


// ===========================
// Sticky Header
// ===========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 80) {
    header.style.background = "#020617";
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";
  } else {
    header.style.background = "rgba(15,23,42,.85)";
    header.style.boxShadow = "none";
  }

});


// ===========================
// Mobile Menu
// ===========================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

  nav.classList.toggle("active");

});


// ===========================
// Close Menu on Click
// ===========================

document.querySelectorAll("nav a").forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("active");

  });

});


// ===========================
// Reveal Animation
// ===========================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

document.querySelectorAll(".about,.skills,.projects,.contact,.card,.project-card").forEach((el)=>{

el.classList.add("hidden");

observer.observe(el);

});


// ===========================
// Scroll Button
// ===========================

const topBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.opacity="1";
topBtn.style.pointerEvents="auto";

}else{

topBtn.style.opacity="0";
topBtn.style.pointerEvents="none";

}

});


// ===========================
// Welcome Message
// ===========================

window.onload = () => {

console.log("Welcome to Shambhu Khatri Portfolio 🚀");

};
/* Mobile Menu */

nav.active{
display:block;
position:absolute;
top:80px;
left:0;
width:100%;
background:#0f172a;
padding:20px 0;
}

nav.active ul{
flex-direction:column;
align-items:center;
}

nav.active ul li{
margin:15px 0;
}

/* Animation */

.hidden{
opacity:0;
transform:translateY(60px);
transition:all .8s ease;
}

.show{
opacity:1;
transform:translateY(0);
}