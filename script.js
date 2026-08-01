// ==========================
// COMPUTER SCIENCE QUIZ V2.0
// PART 1
// ==========================

let currentQuestion = 0;
let score = 0;
let timeLeft = 600; // 10 minutes

const questions = [

{
question:"What does CPU stand for?",
options:[
"Central Processing Unit",
"Computer Processing Unit",
"Central Program Unit",
"Control Processing Unit"
],
answer:0
},

{
question:"What does RAM stand for?",
options:[
"Random Access Memory",
"Read Access Memory",
"Run Access Memory",
"Random Area Memory"
],
answer:0
},

{
question:"Which language is used to create web pages?",
options:[
"HTML",
"Windows",
"MS Excel",
"Photoshop"
],
answer:0
},

{
question:"Which company developed Windows?",
options:[
"Microsoft",
"Google",
"Apple",
"Intel"
],
answer:0
},

{
question:"Which operating system is open source?",
options:[
"Linux",
"Windows",
"MS DOS",
"Mac Paint"
],
answer:0
},

{
question:"Which device is an input device?",
options:[
"Keyboard",
"Monitor",
"Printer",
"Speaker"
],
answer:0
},

{
question:"What does USB stand for?",
options:[
"Universal Serial Bus",
"Universal System Bus",
"User Serial Bus",
"United Serial Bus"
],
answer:0
},

{
question:"Which storage device is fastest?",
options:[
"SSD",
"CD",
"DVD",
"Floppy Disk"
],
answer:0
},

{
question:"Which language styles web pages?",
options:[
"CSS",
"Python",
"Java",
"C"
],
answer:0
},

{
question:"Which language makes websites interactive?",
options:[
"JavaScript",
"HTML",
"CSS",
"SQL"
],
answer:0
}

];
// ===============================
// LEVEL 2 QUESTIONS
// ===============================

{
question:"Which HTML tag is used to insert an image?",
options:["<img>","<image>","<picture>","<src>"],
answer:0,
level:2
},

{
question:"Which CSS property changes text color?",
options:["color","font-color","text-color","background"],
answer:0,
level:2
},

{
question:"JavaScript is mainly used for?",
options:[
"Making websites interactive",
"Creating hardware",
"Editing photos",
"Managing databases"
],
answer:0,
level:2
},

{
question:"Which company developed JavaScript?",
options:[
"Netscape",
"Microsoft",
"Google",
"Apple"
],
answer:0,
level:2
},

{
question:"Which symbol is used for comments in JavaScript?",
options:[
"//",
"<!-- -->",
"##",
"**"
],
answer:0,
level:2
},

{
question:"Which HTML tag creates a hyperlink?",
options:[
"<a>",
"<link>",
"<url>",
"<href>"
],
answer:0,
level:2
},

{
question:"Which CSS property makes text bold?",
options:[
"font-weight",
"font-style",
"text-bold",
"font-size"
],
answer:0,
level:2
},

{
question:"Which data type stores true or false?",
options:[
"Boolean",
"String",
"Integer",
"Float"
],
answer:0,
level:2
},

{
question:"Which JavaScript function displays a popup message?",
options:[
"alert()",
"print()",
"show()",
"popup()"
],
answer:0,
level:2
},

{
question:"What does URL stand for?",
options:[
"Uniform Resource Locator",
"Universal Resource Link",
"Unique Reference Locator",
"User Resource Link"
],
answer:0,
level:2
// ===============================
// LEVEL 3 QUESTIONS
// ===============================

{
question:"What does SQL stand for?",
options:[
"Structured Query Language",
"Simple Query Language",
"System Query Language",
"Standard Question Language"
],
answer:0,
level:3
},

{
question:"Which device connects different networks together?",
options:[
"Router",
"Switch",
"Hub",
"Repeater"
],
answer:0,
level:3
},

{
question:"Which protocol is mainly used to browse websites?",
options:[
"HTTP",
"FTP",
"SMTP",
"POP3"
],
answer:0,
level:3
},

{
question:"Which database command is used to display data?",
options:[
"SELECT",
"INSERT",
"UPDATE",
"DELETE"
],
answer:0,
level:3
},

{
question:"Which HTML tag is used to create a table row?",
options:[
"<tr>",
"<td>",
"<table>",
"<th>"
],
answer:0,
level:3
},

{
question:"Which CSS property is used to create rounded corners?",
options:[
"border-radius",
"corner-radius",
"radius",
"round-border"
],
answer:0,
level:3
},

{
question:"Which JavaScript keyword declares a constant variable?",
options:[
"const",
"var",
"let",
"constant"
],
answer:0,
level:3
},

{
question:"Which topology uses a central hub?",
options:[
"Star",
"Bus",
"Ring",
"Mesh"
],
answer:0,
level:3
},

{
question:"Which memory is temporary?",
options:[
"RAM",
"ROM",
"SSD",
"Hard Disk"
],
answer:0,
level:3
},

{
question:"Which language is mainly used for web page structure?",
options:[
"HTML",
"CSS",
"JavaScript",
"Python"
],
answer:0,
level:3
},
},

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answers");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");
const currentElement = document.getElementById("currentQuestion");
const totalElement = document.getElementById("totalQuestion");

if(totalElement){
totalElement.innerText = questions.length;
}
// ===============================
// DISPLAY QUESTIONS
// PART 2
// ===============================

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const questionNumber = document.getElementById("questionNumber");
const progressBar = document.getElementById("progressBar");

function loadQuestion(){

selectedAnswer=-1;

const q=questions[currentQuestion];

questionNumber.innerHTML=
`Question ${currentQuestion+1} / ${questions.length}`;

questionElement.innerHTML=q.question;

optionsElement.innerHTML="";

q.options.forEach((option,index)=>{

const button=document.createElement("button");

button.className="option";

button.innerHTML=option;

button.onclick=()=>selectAnswer(index,button);

optionsElement.appendChild(button);

});

updateProgress();

}

function selectAnswer(index,button){

selectedAnswer=index;

document.querySelectorAll(".option").forEach(btn=>{

btn.classList.remove("active");

});

button.classList.add("active");

}

function updateProgress(){

let progress=((currentQuestion)/questions.length)*100;

progressBar.style.width=progress+"%";

}

// ===============================
// NEXT BUTTON
// ===============================

document.getElementById("nextBtn").onclick=function(){

if(selectedAnswer==-1){

alert("Please select an answer.");

return;

}

if(selectedAnswer===questions[currentQuestion].answer){

score++;

}

currentQuestion++;

if(currentQuestion<questions.length){

loadQuestion();

}else{

showResult();

}

};

// ===============================
// PREVIOUS BUTTON
// ===============================

document.getElementById("prevBtn").onclick=function(){

if(currentQuestion>0){

currentQuestion--;

loadQuestion();

}

};

// ===============================
// TIMER
// ===============================

let timeLeft=600;

const timer=document.getElementById("timer");

const countdown=setInterval(()=>{

let minutes=Math.floor(timeLeft/60);

let seconds=timeLeft%60;

timer.innerHTML=

`${minutes}:${seconds<10?"0":""}${seconds}`;

timeLeft--;

if(timeLeft<0){

clearInterval(countdown);

showResult();

}

},1000);

loadQuestion();
// ===============================
// RESULT
// PART 3
// ===============================

function showResult(){

clearInterval(countdown);

document.querySelector(".quiz-card").style.display="none";

document.getElementById("resultCard").style.display="block";

document.getElementById("finalScore").innerHTML=
score+"/"+questions.length;

document.getElementById("correctAnswers").innerHTML=score;

document.getElementById("wrongAnswers").innerHTML=
questions.length-score;

let percentage=Math.round((score/questions.length)*100);

document.getElementById("percentage").innerHTML=
percentage+"%";

let grade="Fail";

if(percentage>=90){

grade="A+ Excellent";

}else if(percentage>=80){

grade="A Very Good";

}else if(percentage>=70){

grade="B Good";

}else if(percentage>=60){

grade="C Pass";

}else{

grade="Fail";

}

document.getElementById("grade").innerHTML=grade;

// Highest Score Save

let highScore=localStorage.getItem("highScore");

if(highScore==null || score>highScore){

localStorage.setItem("highScore",score);

}

// Level Unlock

if(percentage>=80){

document.getElementById("unlockMessage").innerHTML=

"<p class='badge gold'>🎉 Congratulations! Level 2 and Level 3 Unlocked.</p>";

document.getElementById("level2").classList.remove("locked");

document.getElementById("level3").classList.remove("locked");

}else if(percentage>=60){

document.getElementById("unlockMessage").innerHTML=

"<p class='badge silver'>🎉 Congratulations! Level 2 Unlocked.</p>";

document.getElementById("level2").classList.remove("locked");

}else{

document.getElementById("unlockMessage").innerHTML=

"<p class='badge bronze'>❌ Score 60% to unlock Level 2.</p>";

}

}

// ===============================
// RESTART QUIZ
// ===============================

function restartQuiz(){

location.reload();

}