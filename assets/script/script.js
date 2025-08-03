// DOM Elements
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById ('question')
const answerButtonsElement = document.getElementById('answer-buttons')

// randomises questions whilst tracking index
let shuffledQuestions, currentQuestionIndex

// Variable to track score 
let score = 0

//starts the game on click
startButton.addEventListener('click', startGame)
// next question 
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

// function to start quiz
function startGame() {

    score = 0 //Reset score upon start
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

    // ensures answers are shuffled 
    const shuffledAnswers = question.answers.sort(() => Math.random() - 0.5)
    
    shuffledAnswers.forEach(answer => { //creates buttons for answers
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


//tracks correct scores
    if (correct) {
        score++
    }

    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
if (shuffledQuestions.length > currentQuestionIndex +1) {
    nextButton.classList.remove('hide')
} else {
    // show results instead of question 
    showResults()
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
}
}
// adding show results function
function showResults() {
    resetState()
    questionElement.innerText = `You scored ${score} out of ${shuffledQuestions.length}!`
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
    question: 'What is the largest continent by area?',
    answers: [
      { text: 'Asia', correct: true },
      { text: 'Africa', correct: false },
      { text: 'Europe', correct: false },
      { text: 'North America', correct: false }
    ]
  },
  {
    question: 'Which country has the longest coastline in the world?',
    answers: [
      { text: 'Canada', correct: true },
      { text: 'Russia', correct: false },
      { text: 'Australia', correct: false },
      { text: 'Indonesia', correct: false }
    ]
  },
  {
    question: 'What is the capital city of Brazil?',
    answers: [
      { text: 'Brasília', correct: true },
      { text: 'Rio de Janeiro', correct: false },
      { text: 'São Paulo', correct: false },
      { text: 'Salvador', correct: false }
    ]
  },
  {
    question: 'The River Nile flows into which sea?',
    answers: [
      { text: 'Mediterranean Sea', correct: true },
      { text: 'Red Sea', correct: false },
      { text: 'Arabian Sea', correct: false },
      { text: 'Black Sea', correct: false }
    ]
  },
  {
    question: 'Mount Everest lies on the border between which two countries?',
    answers: [
      { text: 'Nepal and China', correct: true },
      { text: 'India and China', correct: false },
      { text: 'Bhutan and Nepal', correct: false },
      { text: 'Pakistan and India', correct: false }
    ]
  },
  {
    question: 'What is the smallest country in the world by area?',
    answers: [
      { text: 'Vatican City', correct: true },
      { text: 'Monaco', correct: false },
      { text: 'San Marino', correct: false },
      { text: 'Liechtenstein', correct: false }
    ]
  },
  {
    question: 'Which desert is the largest in the world (non-polar)?',
    answers: [
      { text: 'Sahara', correct: true },
      { text: 'Gobi', correct: false },
      { text: 'Kalahari', correct: false },
      { text: 'Thar', correct: false }
    ]
  },
  {
    question: 'What line divides the Earth into Northern and Southern Hemispheres?',
    answers: [
      { text: 'Equator', correct: true },
      { text: 'Tropic of Capricorn', correct: false },
      { text: 'Tropic of Cancer', correct: false },
      { text: 'Prime Meridian', correct: false }
    ]
  },
  {
    question: 'Which country has the most time zones (including overseas territories)?',
    answers: [
      { text: 'France', correct: true },
      { text: 'Russia', correct: false },
      { text: 'United States', correct: false },
      { text: 'China', correct: false }
    ]
  },
  {
    question: 'What is the name of the largest island in the world?',
    answers: [
      { text: 'Greenland', correct: true },
      { text: 'Borneo', correct: false },
      { text: 'New Guinea', correct: false },
      { text: 'Madagascar', correct: false }
    ]
  }
]