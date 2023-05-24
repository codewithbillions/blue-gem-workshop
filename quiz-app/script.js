const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spanQtd = document.querySelector(".spanQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

// import questions from "questions.js"


const questions = [
    {
        question: " what is the current state governor of Rivers State?",
        answers: [
            {option: "beatrice dokubo", correct: false},
            {option: "tonye cole", correct: false},
            {option: "nyesome wike", correct: true},
        ],
    },
    {
        question: "who is the president Elect of Federal Republic of Nigeria?",
        answers: [
            {option: "Goodluck Jonathan", correct: false},
            {option: "Bola Ahmed Tinubu", correct: true},
            {option: "Peter Obi", correct: false},
        ],
    },

    {
        question: "what are the colors of the Nigerian flag",
        answers: [
            {option: "green white green", correct: false},
            {option: "blue white red", correct: true},
            {option: "black yellow white", correct: false},
        ],
    },

    {
        question: "what is the name of Nigerian Currency",
        answers: [
            {option: "dollars", correct: false},
            {option: "naira", correct: true},
            {option: "cedis", correct: false},
        ],
    },
    {
        question: "what is the fastest means of transportation",
        answers: [
            {option: "land", correct: false},
            {option: "sea", correct: false},
            {option: "air", correct: true},
        ],
    },
    
    {
        question: "How many children does wizkid have?",
        answers: [
            {option: "2", correct: false},
            {option: "4", correct: true},
            {option: "10", correct: false},
        ],
    },

    {
        question: "the organ for seeing is called ?",
        answers: [
            {option: "ear", correct: false},
            {option: "nose", correct: false},
            {option: "eye", correct: true},
        ],
    },

    {
        question: "what is the geo-political zone of Lagos",
        answers: [
            {option: "south-west", correct: true},
            {option: "north-east", correct: false},
            {option: "north-central", correct: false},
        ],
    },

    {
        question: "what is the gomycode building refered to?",
        answers: [
            {option: "community", correct: false},
            {option: "hackerspace", correct: false},
            {option: "trap house", correct: true},
        ],
    },
]

let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onclick = () => {
    content.style.display = "flex";
    contentFinish.style.display = "none";

    currentIndex = 0;
    questionsCorrect = 0;
    loadQuestion()
};


function nextQuestion(e) {
    if (e.target.getAttribute("data-correct") === "true") {
        questionsCorrect++;
    }
    if (currentIndex < questions.length - 1) {
        currentIndex++;
        loadQuestion()
    } else {
        finish();
    }
}

function finish() {
    textFinish.innerHTML = `you got ${questionsCorrect} out of ${questions.length}`;
        content.style.display = "none";
        contentFinish.style.display = "flex";
}

function loadQuestion() {
    spanQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
    const item = questions[currentIndex];

    answers.innerHTML = "";
    question.innerHTML = item.question;

    item.answers.forEach((answer) => {
        const div = document.createElement("div");

        div.innerHTML = `<button class="answer" data-correct="${answer.correct}">${answer.option}</button>`;

        answers.appendChild(div)
    });

    document.querySelectorAll(".answer").forEach((item) => {
        item.addEventListener("click", nextQuestion)
    })
}

loadQuestion()