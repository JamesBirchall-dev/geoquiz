const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById ('question')
const answerButtonselement = document.getElementById('answer-buttons')
/* randomises questions whilst knowing index*/
let shuffledQuestion, currentQuestionIndex;


startButton.addEventListener('click', startGame);

function startGame() {
    console.log('Started')
    startButton.classList.add('hide') // hides the start button after clicking
    shuffledQuestion = question.sort(() => Math.random() - .5) // shuffles questions
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide') 
    setNextQuestion()
}


function setNextQuestion() {
    showQuestion(shuffledQuestion[currentQuestionIndex])
    
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function selectAnswer() {

}

const question = [
    {
        question: 'what is 2+2',
        answers: [
            { text: '4', correct: true},
            { text: '22', correct: false},
        ]
    }
]