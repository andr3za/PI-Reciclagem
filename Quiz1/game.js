const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-prefix'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

const opc = document.getElementById("opcao1");
const opc2 = document.getElementById("opcao2");
const opc3 = document.getElementById("opcao3");
const opc4 = document.getElementById("opcao4");
const opc5 = document.getElementById("opcao5");

const image = document.getElementById("imgCentral");

const legend = document.getElementById("legenda");


let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Escolha a lixeira em que o item deve ser descartado adequadamente',
        choice1: opc,
        choice2: opc2,
        choice3: opc3,
        choice4: opc4,
        choice5: opc5,           
        answer: 3,
        image: 'imgQuiz1//colher.png',
        legend: 'COLHER'
    },
    {
        question: "Escolha a lixeira em que o item deve ser descartado adequadamente",
        choice1: opc,
        choice2: opc2,
        choice3: opc3,
        choice4: opc4,
        choice5: opc5,            
        answer: 1,
        image: 'imgQuiz1//plastico.png',
        legend: 'GARRAFA PET'
    },

    {
        question: "Escolha a lixeira em que o item deve ser descartado adequadamente",
        choice1: opc,
        choice2: opc2,
        choice3: opc3,
        choice4: opc4,
        choice5: opc5,        
        answer: 4,
        image: 'imgQuiz1//pote-de-geleia.png',
        legend: 'VIDRO DE CONSERVA'
    },
    {
        question: "Escolha a lixeira em que o item deve ser descartado adequadamente",
        choice1: opc,
        choice2: opc2,
        choice3: opc3,
        choice4: opc4,
        choice5: opc5,        
        answer: 5,
        image: 'imgQuiz1//maca.png',
        legend: 'MAÇA'
    },
    {
        question: "Escolha a lixeira em que o item deve ser descartado adequadamente",
        choice1: opc,
        choice2: opc2,
        choice3: opc3,
        choice4: opc4,  
        choice5: opc5,         
        answer: 2,
        image: 'imgQuiz1//sapato.png',
        legend: 'CAIXA DE SAPATO'
    },
    
]



const SCORE_POINTS = 1
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }
    
    questionCounter++    
    progressText.innerText = `Questão ${questionCounter} de ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question
    image.src = currentQuestion.image
    legend.innerText = currentQuestion.legend

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}


choices.forEach(choice =>{
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        console.log(e.target)

        acceptingAnswers = false
        
        let selectedChoice = e.target
        
        if (selectedChoice.tagName == 'P')
        {
            selectedChoice = document.getElementById(`imgopcao${selectedChoice.getAttribute("data-number")}`);
        }

        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'     
        
        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
                        
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()


