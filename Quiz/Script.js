const questions = [
    {
        "question": "What is the largest animal in the world?",
        answer: [
            {
                "text": "Blue whale", correct: true
            },
            {
                "text": "Shark", correct: false
            },
            {
                "text": "Elephant", correct: false
            },
            {
                "text": "Giraffe", correct: false
            }
        ]
    },
    {
        "question": "What is the largest planet in our solar system?",
        answer: [
            {
                "text": "Jupiter", correct: true
            },
            {
                "text": "Saturn", correct: false
            },
            {
                "text": "Uranus", correct: false
            },
            {
                "text": "Neptune", correct: false
            }
        ]
    },
    {
        "question": "What is the largest continent in the world?",
        answer: [
            {
                "text": "Asia", correct: true
            },
            {
                "text": "Africa", correct: false
            },
            {
                "text": "Europe", correct: false
            },
            {
                "text": "North America", correct: false
            }
        ]
    },
    {
        "question": "What is the coldest place on Earth?",
        answer: [
            {
                "text": "Antarctica", correct: true
            },
            {
                "text": "Arctic", correct: false
            },
            {
                "text": "Alaska", correct: false
            },
            {
                "text": "Greenland", correct: false
            }
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
const selectedBtn=e.target;
const isCorrect=selectedBtn.dataset.correct === "true";
if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
}else{
    selectedBtn.classList.add("incorrect");
}
Array.from(answerButton.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled=true;
});
nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();