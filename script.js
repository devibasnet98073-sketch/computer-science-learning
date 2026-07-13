// ===============================
// Computer Science Learning Website
// Created by Shambhu Khatri (Suprim)
// ===============================

let score = 0;
let answered = 0;

const scoreElement = document.getElementById("score");
const resultElement = document.getElementById("finalResult");

// Answer Checking Function
function checkAnswer(button, correct) {

    const question = button.parentElement;

    // Prevent answering same question twice
    if (question.getAttribute("data-answered") === "true") {
        return;
    }

    question.setAttribute("data-answered", "true");
    answered++;

    const buttons = question.querySelectorAll("button");

    buttons.forEach(btn => {

        btn.disabled = true;

        if (btn.getAttribute("onclick").includes("true")) {
            btn.style.background = "#22c55e";
            btn.style.color = "white";
        }

    });

    if (correct) {
        score++;
        button.style.background = "#22c55e";
        button.style.color = "white";
    } else {
        button.style.background = "#ef4444";
        button.style.color = "white";
    }

    if (scoreElement) {
        scoreElement.innerHTML = score;
    }

}
// ===============================
// Show Final Result
// ===============================

function showResult() {

    let totalQuestions = document.querySelectorAll(".question").length;

    let percentage = (score / totalQuestions) * 100;

    let grade = "";
    let status = "";

    if (percentage >= 90) {
        grade = "A+";
        status = "🎉 Outstanding!";
    }
    else if (percentage >= 80) {
        grade = "A";
        status = "🎉 Excellent!";
    }
    else if (percentage >= 70) {
        grade = "B";
        status = "✅ Very Good!";
    }
    else if (percentage >= 60) {
        grade = "C";
        status = "👍 Good!";
    }
    else if (percentage >= 40) {
        grade = "D";
        status = "🙂 Pass";
    }
    else {
        grade = "F";
        status = "❌ Fail";
    }

    resultElement.innerHTML = `
    <h2>🏆 Quiz Result</h2>

    <br>

    <p><b>Correct Answers:</b> ${score}</p>

    <p><b>Total Questions:</b> ${totalQuestions}</p>

    <p><b>Percentage:</b> ${percentage.toFixed(2)}%</p>

    <p><b>Grade:</b> ${grade}</p>

    <h2>${status}</h2>
    `;

}
// ===============================
// Restart Quiz
// ===============================

function restartQuiz() {
    location.reload();
}

// ===============================
// Timer
// ===============================

let timerElement = document.getElementById("timer");

let totalQuestions = document.querySelectorAll(".question").length;

// Computer Quiz = 35 Questions → 35 Minutes
// Science Quiz = 15 Questions → 15 Minutes

let timeLeft = (totalQuestions >= 30) ? 35 * 60 : 15 * 60;

function startTimer() {

    if (!timerElement) return;

    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    timerElement.innerHTML =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");

    if (timeLeft <= 0) {

        clearInterval(timer);

        showResult();

        alert("⏰ Time is up!");

        return;
    }

    timeLeft--;

}

let timer = setInterval(startTimer, 1000);

startTimer();

// ===============================
// End of Script
// ===============================