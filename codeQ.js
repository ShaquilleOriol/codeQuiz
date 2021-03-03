let questionTextEl = document.querySelector(".questionText");
let buttonListEl = document.querySelector(".answerButtons");
let startButtonEl = document.querySelector(".startButton")
let startButton = document.createElement("button");
let correctText = document.querySelector(".correctText");
let timer = document.querySelector(".timer");
let quesNumber = 0;
let ansButton;
let secondsLeft = 80;

let instructions = "Give your best answer to the following code related questions within the time limit. All incorrect answers will deduct your score/time by ten seconds!"

let allQuestions = [
    {
        question: "_______ is the process of finding errors and fixing them within a program.",
        answers: {
            a: "Exucting",
            b: "Compiling",
            c: "Debugging",
            d: "Scanning"
        },
        correctAnswer: 'c'
    },
    {
        question: "What does HTML stand for?",
        answers: {
            a: "HipText Madeup Lingo",
            b: "HypedTone Markup Language",
            c: "Hypertext Markup Language",
            d: "None of the Above"
        }, 
        correctAnswer: 'c'
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        answers: {
            a: "numbers and strings",
            b: "booleans",
            c: "other arrays",
            d: "all of the above"
        },
        correctAnswer: 'd'
    },
    {
        question: "What does CSS stand for?",
        answers: {
            a: "Cascading Style Sheets",
            b: "Computerized Stlye Sheets",
            c: "Command Sheet Styles",
            d: "None of the Above"
        },
        correctAnswer: 'a'
    },
    {
        question: "If we want define style for an unique element, then which css selector will we use ?",
        answers: {
            a: "Name",
            b: "Text",
            c: "Class",
            d: "ID"
        },
        correctAnswer: 'd'
    }
]

function renderInstructions() {
    questionTextEl.textContent = instructions;
    startButtonEl.appendChild(startButton);
    startButton.textContent = "Start";
}

renderInstructions();

startButton.addEventListener("click", renderFirstQuestion);

function renderFirstQuestion() {
    startButtonEl.removeChild(startButton);
    renderQuestion();
    setTime();
}

function renderQuestion() {
        

        questionTextEl.textContent = allQuestions[quesNumber].question;

        for (letter in allQuestions[quesNumber].answers) {
            ansButton = document.createElement("button");
            ansButton.setAttribute("data-letter", letter);
            ansButton.textContent = (letter + ": " + allQuestions[quesNumber].answers[letter]);
            buttonListEl.appendChild(ansButton);
        }
    }
    buttonListEl.addEventListener("click", function (event) {

        if ($(event.target).attr("data-letter") == allQuestions[quesNumber].correctAnswer) {
            correctText.textContent = "Correct!";
            $(buttonListEl).empty();
        } else {
            secondsLeft = secondsLeft - 10;
            correctText.textContent = "Incorrect!";
            $(buttonListEl).empty();
        }

        quesNumber++;
        renderQuestion();

    })
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Timer: " + secondsLeft; 
      if (quesNumber > 4 || secondsLeft === 0) {
        clearInterval(timerInterval);
        showHighScore();
    }
    }, 1000);
  }

// Show high score screen
function showHighScore() {
    $(buttonListEl).empty();
    correctText.textContent = "";
    questionTextEl.textContent = "Your score is " + secondsLeft + ". Congratulations!";
}