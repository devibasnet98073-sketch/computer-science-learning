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
