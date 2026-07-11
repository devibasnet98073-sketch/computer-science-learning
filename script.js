// Quiz Website Script
// Created by Shambhu Khatri

let score = 0;
let answeredQuestions = 0;
const totalQuestions = 25;

// Check Answer
function checkAnswer(button, isCorrect) {

    // एउटै प्रश्नमा दोहोर्याएर click हुन नदिने
    const parent = button.parentElement;

    if (parent.getAttribute("data-answered") === "true") {
        return;
    }

    parent.setAttribute("data-answered", "true");

    const buttons = parent.querySelectorAll("button");

    buttons.forEach(btn => {
        btn.disabled = true;
    });

    if (isCorrect) {
        button.style.backgroundColor = "green";
        score++;
    } else {
        button.style.backgroundColor = "red";

        buttons.forEach(btn => {
            if (btn.getAttribute("onclick").includes("true")) {
                btn.style.backgroundColor = "green";
            }
        });
    }

    answeredQuestions++;

    // Score Update
    const scoreBox = document.getElementById("score");
    if (scoreBox) {
        scoreBox.innerHTML = score;
    }
}

// Show Result
function showResult() {

    let percentage = (score / totalQuestions) * 100;

    let status = "";

    if (percentage >= 50) {
        status = "✅ PASS";
    } else {
        status = "❌ FAIL";
    }

    document.getElementById("finalResult").innerHTML = `
        <h2>Quiz Result</h2>
        <p><b>Score:</b> ${score} / ${totalQuestions}</p>
        <p><b>Percentage:</b> ${percentage.toFixed(2)}%</p>
        <p><b>Status:</b> ${status}</p>
    `;
}

// Restart Quiz
function restartQuiz() {
    location.reload();
}

// Timer
let timeLeft = 1500; // 25 Minutes

function updateTimer() {

    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    let timer = document.getElementById("timer");

    if (timer) {
        timer.innerHTML =
            minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        showResult();
    }

    timeLeft--;
}

const timerInterval = setInterval(updateTimer, 1000);
