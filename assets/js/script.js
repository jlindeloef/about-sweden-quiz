const questions = [
    {
        question: "Which is the capital of Sweden?",
        answers: [
            { text: 'Stockholm', correct: true },
            { text: 'Gotenburg', correct: false },
            { text: 'Copenhagen', correct: false },
            { text: 'Milano', correct: false },
        ]
    },
    {
        question: "Which is the local currency in Sweden?",
        answers: [
            { text: "Euro (EUR)", correct: false },
            { text: "Swedish Crowns (SEK)", correct: true },
            { text: "Scandinavian Pound (SCP)", correct: false },
            { text: "Swish (SWI)", correct: false }
        ]
    },
    {
        question: "What is the name of the King of Sweden?",
        answers: [
            { text: "Carl IXV Gustaf", correct: false },
            { text: "Calle", correct: false },
            { text: "Carl VIX Gustaf", correct: false },
            { text: "Carl XVI Gustaf", correct: true }
        ]
    },
    {
        question: "What do Swedes do when they meet for a fika?",
        answers: [
            { text: "Sports", correct: false },
            { text: "Handicrafts", correct: false },
            { text: "Having a coffee and maybe some pastry", correct: true },
            { text: "Go on cacation", correct: false }
        ]
    },
    {
        question: "What is Kebnekaise?",
        answers: [
            { text: "A foodchain", correct: false },
            { text: "Swedish national dish", correct: false },
            { text: "A popular pizza in Sweden", correct: false },
            { text: "Sweden’s highest mountain", correct: true }
        ]
    },
    {
        question: " Which one is a popular ABBA hit song?",
        answers: [
            { text: "The winter takes it all", correct: false },
            { text: "Waterloo", correct: true },
            { text: "The winner bakes it all", correct: false },
            { text: "Volvo-Vouz", correct: false }
        ]
    },
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answerbuttons');
const nextButton = document.getElementById('next-btn');
const startButton = document.getElementById('start-btn');

startButton.addEventListener('click', startQuiz);
let currentQuestionIndex = 0;
let score = 0;

startButton.addEventListener("click", () => {
    questionElement.classList.add("hide");
    answerButtons.classList.add("hide");
    initial();
});
//hide quiz and display start screen
window.onload = () => {
    questionElement.classList.remove("hide");
    answerButtons.classList.remove("hide");
};
//starting the game
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
//Show questions and reset to next question
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild)
        answerButtons.removeChild(answerButtons.firstChild);
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextbutton();
    } else {
        startQuiz();
    }

    function showScore() {
        resetState();
        questionElement.innerHTML = `Your score ${score} out of ${questions.length}!`;
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
    }
    function handleNextbutton() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    }

});
startQuiz();