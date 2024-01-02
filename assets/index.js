var questions = [
    { question: "What is the correct way to declare a variable in JavaScript?"
    , choices: ["a) var x = 5;", "b) x = 5;", "c) let x = 5;"], answer: "let x = 5;" },
    { question: "Which of the following is not a JavaScript conditional statement?"
    , choices: ["a) for", "b) if", "c) else"], answer: "for" },
    { question: "Which of the following is not a programming language??"
    , choices: ["a) HTML", "b) Chat GPT", "c) Python"], answer: "Chat GPT" },
    { question: "What is the correct CSS syntax to change the color of all paragraphs to red?"
    , choices: ["a) p {color: red;}", "b) p.color = red", "c) paragraph.color = red;"], answer: "p {color: red;}" },
    { question: " Which of the following is not a valid HTML tag?"
    , choices: ["a) <p>", "b) <div>", "c) <paragraph>"], answer: "<paragraph>" },
    
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
