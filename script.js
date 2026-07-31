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

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answers");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");
const currentElement = document.getElementById("currentQuestion");
const totalElement = document.getElementById("totalQuestion");

if(totalElement){
totalElement.innerText = questions.length;
}