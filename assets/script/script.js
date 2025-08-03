// DOM Elements
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById ('question')
const answerButtonsElement = document.getElementById('answer-buttons')

/* randomises questions whilst tracking index*/
let shuffledQuestions, currentQuestionIndex

//starts the game on click
startButton.addEventListener('click', startGame)
// next question 
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

// function to start quiz
function startGame() {
    startButton.classList.add('hide') // hides the start button after clicking
    shuffledQuestions = questions.sort(() => Math.random() - .5) // shuffles questions
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide') 
    setNextQuestion()
}

// move the next question upon clicking 
function setNextQuestion() {
    resetState() /*resets question state*/
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
// displays question
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => { //creates buttons for answers
        const button = document.createElement ('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) { // marks the button when correct answer selected
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button) //adds to DOM
    })
}
// restart quiz function
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
// sets the status correct or wrong
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
if (shuffledQuestions.length > currentQuestionIndex +1) {
    nextButton.classList.remove('hide')
} else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
}
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        } else {
            element.classList.add('wrong')
        }
    }
//clears the statuus from element
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

// Question Array

const questions = [
    {
        question: 'what is 2+2',
        answers: [
            { text: '4', correct: true},
            { text: '22', correct: false},
        ]
    },
 {
        question: 'what is 3+2',
        answers: [
            { text: '4', correct: true},
            { text: '24', correct: false},
        ]
    },
 {
        question: 'what is 3x2',
        answers: [
            { text: '4', correct: true},
            { text: '52', correct: false},
        ]
    },
]