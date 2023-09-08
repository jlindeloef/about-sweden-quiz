// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

//document.addEventListener("DOMContentLoaded", function () {
//    let buttons = document.getElementsByTagName("button");

  //  for (let button of buttons) {
  //      button.addEventListener("click", function () {
  //          if (this.getAttribute("data-type") === "submit") {
  //              alert("You clicked Submit!");
  //          } else {
 //               let gameType = this.getAttribute("data-type");
  //              alert(`You clicked ${gameType}`);
 //           }
  //      });
  //  }
//});

const questions = [
  {
    question: 'Which is the main capitol of Sweden?',
    answers: [
      { text: 'Stockholm', correct: true },
      { text: 'Gotenburg', correct: false },
      { text: 'Copenhagen', correct: false },
      { text: 'Milano', correct: false },
    ]
  },
  {
    question: 'Who is the best YouTuber?',
    answers: [
      { text: 'Web Dev Simplified', correct: true },
      { text: 'Traversy Media', correct: true },
      { text: 'Dev Ed', correct: true },
      { text: 'Fun Fun Function', correct: true }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  }
]

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answerbuttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

//starting the game
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }
//Show questions and reset to next question
  function showQuestion() {
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion. question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
      });
  }

  function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) 
      answerButtons.removeChild(answerButtons.firstChild)
    }
  function selectAnswer() {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classlist.add("correct");
    }else{
        selectedBtn.classlist.add(incorrect);
    }
  }
    startQuiz()