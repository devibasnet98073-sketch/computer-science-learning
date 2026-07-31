// ==============================
// LOGIN SYSTEM
// Part 1
// ==============================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event){

event.preventDefault();

const username = document.getElementById("username").value.trim();

const password = document.getElementById("password").value.trim();

if(username === ""){

alert("Please enter your username.");

return;

}

if(password === ""){

alert("Please enter your password.");

return;

}

// Demo Login
// Firebase pachi add garne

if(username === "admin" && password === "12345"){

alert("Login Successful!");

localStorage.setItem("username", username);

window.location.href = "index.html";

}else{

alert("Invalid Username or Password!");

}

});
// ==============================
// LOGIN SYSTEM
// Part 2
// ==============================

// Remember Me

const rememberCheck = document.querySelector('input[type="checkbox"]');

if(localStorage.getItem("rememberUser") === "true"){

rememberCheck.checked = true;

}

loginForm.addEventListener("submit", function(){

if(rememberCheck.checked){

localStorage.setItem("rememberUser","true");

}else{

localStorage.removeItem("rememberUser");

}

});

// Welcome Message

const savedUser = localStorage.getItem("username");

if(savedUser){

console.log("Welcome " + savedUser);

}
// ==============================
// LOGIN SYSTEM
// Part 3
// ==============================

// Check if user is already logged in
window.addEventListener("load", function(){

const currentUser = localStorage.getItem("username");

if(currentUser){

console.log("Logged in as: " + currentUser);

}

});

// Logout Function
function logout(){

localStorage.removeItem("username");

window.location.href = "login.html";

}

// Future Firebase Ready
// Firebase Authentication will replace
// the demo login system later.
// This file is prepared for future updates.