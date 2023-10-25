const questions = [
    {
        question:" True or False: The Girl on the Train is narrated from multiple perspectives.",
        answers:[
            {text:"True",correct:true},
            {text:"False",correct:false},
            
        ]

    },

    {
        question:"What is the main theme of The Girl on the Train?",
        answers:[
            {text:" A quest for treasure",correct:false},
            {text:" Psychological thriller and suspense",correct:true},
            {text:"Historical romance",correct:false}, 
            {text:" Science fiction",correct:false},
        ]

    },

    {
        question:" What is the writing style of Gone Girl?",
        answers:[
            {text:"First-person narrative",correct:true},
            {text:"Third-person omniscient",correct:false},
            {text:"Second-person perspective",correct:false},
           
        ]

    },

    {
        question:" Who is the protagonist in The Reversal?",
        answers:[
            {text:" Robert Langdon",correct:false},
            {text:"Harry Bosch",correct:false},
            {text:"Mickey Haller",correct:true},
            {text:" Lisbeth Salander",correct:false},
        ]

    },

    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score =0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState(); //to reset the previous state and answer
    let currentQuestion =questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML= questionNo + "." + currentQuestion.question; 

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;          //adding the true or false condition for the answers that v gave above
        }
        button.addEventListener("click",selectAnswer);
        
    });
        
        
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);        //to remove all the previous answers 
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect= selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {          //once an answer is chosen, u cannot choose more than 1, so disabling the other options and also if chosen answer is wrong, it immediately highlights the correct answer

        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";

    

}


function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
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

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();             //function for the next button functionality
    }else{
        startQuiz();
    }

});

startQuiz();