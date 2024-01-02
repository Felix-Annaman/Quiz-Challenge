var questions = [
    { question: "What is the correct way to declare a variable in JavaScript?"
    , choices: ["a) var x = 5;", "b) x = 5;", "c) let x = 5;"], answer: "let x = 5;" },
    
];

var timer;
var timeRemaining = 60;
var currentQuestionIndex = 0;
document.querySelector("#start-btn").addEventListener("click", startQuiz);

function startQuiz() {
    document.querySelector("#start-btn").style.display = 'none';
    timer = setInterval(function() {
        timeRemaining--;
        document.querySelector("#timeRemaining").textContent = timeRemaining;
        if (timeRemaining <= 0) endQuiz();
    }, 1000);
    showQuestion();
}

function showQuestion() {
    var question = questions[currentQuestionIndex];
    document.querySelector("#question").textContent = question.question;
    var choicesElement = document.querySelector("#choices");
    choicesElement.innerHTML = "";
    for (var i = 0; i < question.choices.length; i++) {
        var button = document.createElement("button");
        button.textContent = question.choices[i];
        button.addEventListener("click", function() {
            answerQuestion(this.textContent);
        });
        choicesElement.appendChild(button);
    }
}


function answerQuestion(choice) {
    if (choice === questions[currentQuestionIndex].answer) {
        currentQuestionIndex++;
        if (currentQuestionIndex === questions.length) {
            endQuiz();
        } else {
            showQuestion();
        }
    } else {
        timeRemaining -= 10;
    }
}


function endQuiz() {
    clearInterval(timer);
    var initials = prompt("Enter your initials:");
    var score = timeRemaining;
    localStorage.setItem("initials", initials);
    localStorage.setItem("score", score);
}
