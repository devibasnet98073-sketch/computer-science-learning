let score = 0;

function checkAnswer(answer, correct) {
    if (answer === correct) {
        score++;
        alert("Correct Answer!");
    } else {
        alert("Wrong Answer!");
    }

    localStorage.setItem("score", score);
}
// Quiz Script

let score = 0;
let answered = false;

// Check Answer
function checkAnswer(button, correct) {

    if (answered) return;

    answered = true;

    if (correct) {
        button.style.background = "green";
        score++;
    } else {
        button.style.background = "red";
    }

    document.getElementById("score").innerHTML = score;
}

// Next Question
function nextQuestion() {
    alert("More questions will be added in the next update.");
    answered = false;
}

// Restart Quiz
function restartQuiz() {
    score = 0;
    answered = false;
    document.getElementById("score").innerHTML = score;
}

// Timer
let time = 60;

setInterval(function () {

    if (time > 0) {
        time--;
    }

    let timer = document.getElementById("timer");

    if (timer) {
        timer.innerHTML = time + " sec";
    }

}, 1000);
