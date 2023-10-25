const questions = [
    {
        question:" True or False:Mistborn: The Final Empire is set in a world where a Dark Lord has won.",
        answers:[
            {text:"True",correct:true},
            {text:"False",correct:false},
            
        ]

    },

    {
        question:"What is the name of the protagonist in The Name of the Wind?",
        answers:[
            {text:" Kip",correct:false},
            {text:" Kelsier",correct:false},
            {text:"Kvothe",correct:true}, 
            {text:"Keladry",correct:false},
        ]

    },

    {
        question:" In which series does The Name of the Wind belong?",
        answers:[
            {text:"The Lord of the Rings",correct:false},
            {text:" Harry Potter",correct:false},
            {text:"The Kingkiller Chronicle",correct:true},
           
        ]

    },

    {
        question:" What type of creature is the protagonist of The Hobbit?",
        answers:[
            {text:"Hobbit",correct:true},
            {text:"Dwarf",correct:false},
            {text:"Elf",correct:false},
            {text:"Wizard",correct:false},
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