// ==========================
// LOADING SCREEN
// ==========================

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

}, 600);

});

// ==========================
// AOS ANIMATION
// ==========================

AOS.init({

duration: 1000,

once: true,

offset: 100,

});

// ==========================
// TYPING EFFECT
// ==========================

new Typed("#typing", {

strings: [

"Computer Science Student",

"Frontend Developer",

"Web Designer",

"Creative Thinker"

],

typeSpeed: 70,

backSpeed: 45,

backDelay: 1500,

loop: true

});

// ==========================
// SCROLL PROGRESS BAR
// ==========================

window.addEventListener("scroll", () => {

const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

const scrolled = (winScroll / height) * 100;

document.getElementById("progressBar").style.width = scrolled + "%";

});

// ==========================
// BACK TO TOP BUTTON
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

if (window.scrollY > 300) {

topBtn.style.display = "block";

} else {

topBtn.style.display = "none";

}

});

topBtn.addEventListener("click", () => {

window.scrollTo({

top: 0,

behavior: "smooth"

});

});
// ==========================
// ANIMATED COUNTERS
// ==========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const updateCounter = () => {

const target = +counter.getAttribute("data-target");

const current = +counter.innerText;

const increment = Math.ceil(target / 100);

if (current < target) {

counter.innerText = current + increment;

setTimeout(updateCounter, 20);

} else {

counter.innerText = target;

}

};

updateCounter();

});

// ==========================
// MOBILE MENU
// ==========================

const menu = document.getElementById("menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {

navLinks.classList.toggle("active");

});

// ==========================
// CLOSE MENU AFTER CLICK
// ==========================

document.querySelectorAll(".nav-links a").forEach(link => {

link.addEventListener("click", () => {

navLinks.classList.remove("active");

});

});

// ==========================
// SMOOTH NAVIGATION
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e) {

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior: "smooth"

});

}

});

});

// ==========================
// CONTACT FORM
// ==========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you! Your message has been sent successfully.");

contactForm.reset();

});
// ==========================
// NAVBAR SHADOW ON SCROLL
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

if (window.scrollY > 50) {

header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";

} else {

header.style.boxShadow = "none";

}

});

// ==========================
// ACTIVE NAVIGATION
// ==========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 120;

if (pageYOffset >= sectionTop) {

current = section.getAttribute("id");

}

});

navItems.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href") === "#" + current) {

link.classList.add("active");

}

});

});

// ==========================
// FLOATING PARTICLES
// ==========================

tsParticles.load("particles", {

fullScreen: false,

background: {

color: {

value: "transparent"

}

},

particles: {

number: {

value: 35

},

color: {

value: "#d9d9d9"

},

shape: {

type: "circle"

},

opacity: {

value: 0.5

},

size: {

value: {

min: 2,

max: 5

}

},

move: {

enable: true,

speed: 1,

direction: "none",

outModes: {

default: "out"

}

},

links: {

enable: true,

distance: 150,

color: "#e5e5e5",

opacity: 0.5,

width: 1

}

}

});

// ==========================
// IMAGE HOVER EFFECT
// ==========================

const profileImage = document.querySelector(".hero-image img");

profileImage.addEventListener("mouseenter", () => {

profileImage.style.transform = "scale(1.05) rotate(2deg)";

});

profileImage.addEventListener("mouseleave", () => {

profileImage.style.transform = "scale(1) rotate(0deg)";

});

// ==========================
// CONSOLE MESSAGE
// ==========================

console.log("%cWelcome to Shambhu Khatri Portfolio",
"font-size:20px;font-weight:bold;color:#111;");