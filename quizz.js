const questions = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        answer: "Delhi"
    },
    {
        question: "Which is the largest planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Jupiter"
    },
    {
        question: "What is 5 + 3?",
        options: ["5", "7", "8", "10"],
        answer: "8"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;
    const optionsList = document.getElementById("options");
    optionsList.innerHTML = "";
    q.options.forEach(option => {
        const li = document.createElement("li");
        li.innerText = option;
        li.onclick = () => checkAnswer(option);
        optionsList.appendChild(li);
    });
}

function checkAnswer(selected) {
    const q = questions[currentQuestion];
    if (selected === q.answer) {
        score++;
    }
    document.getElementById("score").innerText = "Score: " + score;
    document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
        document.getElementById("next-btn").style.display = "none";
    } else {
        document.getElementById("quiz-box").innerHTML = `<h3>Quiz Completed!</h3><p>Final Score: ${score}</p>`;
    }
}

document.getElementById("next-btn").addEventListener("click", nextQuestion);

loadQuestion();
