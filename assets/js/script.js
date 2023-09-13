const questions = [
    {
        question: "Which is the capital of Sweden?",
        answers: [
            { text: "Stockholm", correct: true },
            { text: "Gotenburg", correct: false },
            { text: "Copenhagen", correct: false },
            { text: "Milano", correct: false },
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
            { text: "Go on vacation", correct: false }
        ]
    },
    {
        question: "What is Kebnekaise?",
        answers: [
            { text: "A foodchain", correct: false },
            { text: "Swedish national dish", correct: false },
            { text: "A popular pizza in Sweden", correct: false },
            { text: "Swedens highest mountain", correct: true }
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
    {
        question: "What is the name of the bridge between Sweden and Denmark?",
        answers: [
            { text: "Ölandsbron", correct: false },
            { text: "Malmöbron", correct: false },
            { text: "Öresundsbron", correct: true },
            { text: "Seabridge", correct: false }
        ]
    },
    {
        question: "What is the Swedish world-famous furniture making company called?",
        answers: [
            { text: "IKEA", correct: true },
            { text: "Nike", correct: false },
            { text: "IKAE", correct: false },
            { text: "AKEA", correct: false }
        ]
    },
    {
        question: " Who was the Swede who was the Secretary General of the United Nations from 1953 to 1961?",
        answers: [
            { text: "Olof Palme", correct: false },
            { text: "Dag Hammarskjöld", correct: true },
            { text: "Ingvar Kamprad", correct: false },
            { text: "Tage Erlander", correct: false }
        ]
    },
    {
        question: "Who was the prime minister who was assassinated in 1986?",
        answers: [
            { text: "Olof Palme", correct: true },
            { text: "Dag Hammarskjöld", correct: false },
            { text: "Ingvar Kamprad", correct: false },
            { text: "Tage Erlander", correct: false }
        ]
    }, 
    {
        question: "What is the name of the gulf that separates a great part of Sweden from Finland?",
        answers: [
            { text: "The mexican gulf", correct: false },
            { text: "The finish gulf", correct: false },
            { text: "Gulf of Bothnia", correct: true },
            { text: "Botniska sjön", correct: false }
        ]
    },
    {
        question: "Swedish is an official language in which other country besides Sweden?",
        answers: [
            { text: "Finland", correct: true },
            { text: "Norway", correct: false },
            { text: "Denmark", correct: false },
            { text: "Switzerland", correct: false }
        ]
    },
    {
        question: "What is the name of the biggest lake in Sweden?",
        answers: [
            { text: "Vänern", correct: true},
            { text: "Mälaren", correct: false},
            { text: "Vättern", correct: false},
            { text: "Ringsjön", correct: false}
        ]
    },
    {
        question: "What is the name of the famous fotballplayer whos was born in Malmö",
        answers: [
            { text: "Henrik Larsson", correct: false},
            { text: "Zlatan Ibrahimović", correct: true},
            { text: "Eric Zaade", correct: false},
            { text: "Björn Borg", correct: false}
        ]
    },
    {
        question: "Which Nordic countries have land borders with Sweden?",
        answers: [
            { text: "Norway and Finland", correct: true},
            { text: "Iceland, Norway and Finland", correct: false},
            { text: "Germany, Denmark and Finland", correct: false},
            { text: "Austria, Denmark and Norway", correct: false}
        ]
    },
    {
        question: "Which dramatist is considered Sweden's greatest literary figure?",
        answers: [
            { text: "Ibsen", correct: false},
            { text: "Chekhov", correct: false},
            { text: "Shakespeare", correct: false},
            { text: "Strindberg", correct: true}
        ]
    },
    {
        question: "Who is the current Prime Minister of Sweden who was elected in 2022?",
        answers: [
            { text: "Magdalena Andersson", correct: false},
            { text: "Annie Lööf", correct: false},
            { text: "Ulf Kristersson", correct: true},
            { text: " August Strindberg", correct: false}
        ]
    },
    {
        question: "On which date does Sweden celebrate its National Day?",
        answers: [
            { text: "December 6", correct: false},
            { text: "June 6", correct: true},
            { text: "July 6", correct: false},
            { text: "June 24", correct: false}
        ]
    },
    {
        question: "Sweden ruled over the land of Finland until which year?",
        answers: [
            { text: "1809", correct: true},
            { text: "1666", correct: false},
            { text: "1918", correct: false},
            { text: "1989", correct: false}
        ]
    },
    {
        question: "In which year did Sweden join the European Union?",
        answers: [
            { text: "1993", correct: false},
            { text: "2001", correct: false},
            { text: "1995", correct: true},
            { text: "2003", correct: false}
        ]
    },
    {
        question: "Sweden has never been involved in a war since...?",
        answers: [
            { text: "1814", correct: true},
            { text: "1666", correct: false},
            { text: "1914", correct: false},
            { text: "1939", correct: false}
        ]
    },
    
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answerbuttons');
const nextButton = document.getElementById('next-btn');
const startButton = document.getElementById('start-btn');
const startText = document.getElementById('starttext');

let shuffledQuestions, currentQuestionIndex;


//hide quiz and display start screen
window.onload = () => {
    questionElement.classList.add("hide");
    answerButtons.classList.add("hide");
};
startButton.addEventListener("click", () => {
    questionElement.classList.remove("hide");
    answerButtons.classList.remove("hide");
    startButton.classList.add("hide");
    startText.classList.add("hide");
    startQuiz();
});


//starting the game
function startQuiz() {
    shuffledQuestions = questions.sort(() => Math.random() - .5)
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