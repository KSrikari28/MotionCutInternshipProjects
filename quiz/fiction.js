const questions = [
    {
        question:" What is the name of the magical school in the Harry Potter series?",
        answers:[
            {text:"Ilvermorny",correct:false},
            {text:"Beauxbatons Academy of Magic",correct:false},
            {text:"Durmstrang Institute",correct:false},
            {text:"Hogwarts School of Witchcraft and Wizardry",correct:true},
        ]

    },

    {
        question:" Which character in The Mortal Instruments series is known as the Warlock Child of the Endarkened Downworlders?",
        answers:[
            {text:"Jace Herondale",correct:false},
            {text:"Clary Fray",correct:false},
            {text:"Magnus Bane",correct:true}, 
            {text:"Isabelle Lightwood",correct:false},
        ]

    },

    {
        question:" Which book in The Chronicles of Narnia series features the character Eustace Scrubb transformed into a dragon?",
        answers:[
            {text:"The Lion, the Witch and the Wardrobe",correct:false},
            {text:"The Voyage of the Dawn Treader",correct:true},
            {text:"The Silver Chair",correct:false},
            {text:"The Horse and His Boy",correct:false},
        ]

    },

    {
        question:" Who is the primary antagonist in The Infernal Devices series by Cassandra Clare?",
        answers:[
            {text:"Jem Carstairs",correct:false},
            {text:"Will Herondale",correct:false},
            {text:" Tessa Gray",correct:false},
            {text:" Mortmain",correct:true},
        ]

    },

    {
        question:" Which author is best known for creating the Vampire Diaries series?",
        answers:[
            {text:"Anne Rice",correct:false},
            {text:"Charlaine Harris",correct:false},
            {text:"L.J. Smith",correct:true},
            {text:"Stephenie Meyer",correct:false},
        ]

    }
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