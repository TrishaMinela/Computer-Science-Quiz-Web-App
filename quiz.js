//Changing the colors of each answer box
const colors = ['#38b6ff', '#c1ff72', '#7ed957', '#ffb168', '#ff6888', '#68b7ff', '#efdae9', '#cb6ce6', '#ffbd59', '#00bf63', '#5ce1e6', '#ff66c4', '#ff5757', '#ff914d'];

function setButtonColors(){
    const buttons = document.querySelectorAll('.answer');
    const randomColors = colors.sort(()=> 0.5 - Math.random());

    buttons.forEach((buttons, index) => {
        buttons.style.backgroundColor = randomColors[index % randomColors.length];
    });
}




//Random Questions
const questions = [
    {
        question: "What is the difference between '==' and '===' in JavaScript?",
        options: [
            { text: "'==' checks value and type, while '===' checks only value", correct: false },
            { text: "'==' checks only value, while '===' checks value and type", correct: true },
            { text: "Both are the same", correct: false },
            { text: "'==' is used for comparisons, '===' for assignments", correct: false }
        ]
    },
    {
        question: "Explain the concept of recursion. Can you provide an example?",
        options: [
            { text: "A function calling itself", correct: true },
            { text: "A loop structure", correct: false },
            { text: "A type of variable", correct: false },
            { text: "A method to handle exceptions", correct: false }
        ]
    },
    {
        question: "What is the purpose of a constructor in object-oriented programming?",
        options: [
            { text: "To define variables", correct: false },
            { text: "To initialize objects", correct: true },
            { text: "To create a function", correct: false },
            { text: "To handle errors", correct: false }
        ]
    },
    {
        question: "What is the difference between an array and an object in JavaScript?",
        options: [
            { text: "Arrays can hold only numbers, objects can hold anything", correct: false },
            { text: "Arrays are indexed by numbers, objects are key-value pairs", correct: true },
            { text: "Both are the same", correct: false },
            { text: "Objects are always mutable, arrays are not", correct: false }
        ]
    },
    {
        question: "What are RESTful APIs, and how do they work?",
        options: [
            { text: "They use SOAP for communication", correct: false },
            { text: "They allow communication over HTTP using standard methods", correct: true },
            { text: "They are not used in web development", correct: false },
            { text: "They are only for mobile applications", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.querySelector(".answers");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function Quiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    Question();
}

function Question(){
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = (currentQuestionIndex + 1) + ". " + currentQuestion.question;

    answerButtons.innerHTML = '';

    randomAnswers(currentQuestion.options);

    currentQuestion.options.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("answer", "btn");
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });

    setButtonColors();
}

Quiz();

//If answer is correct
function selectAnswer(answer) {
    const buttons = document.querySelectorAll('.answer');
    //User won't be able to click on other options
    buttons.forEach(button => {
        button.disabled = true;
    })

    const isCorrect = answer.correct;
    const selected = Array.from(buttons).find(button => button.innerHTML === answer.text);

    if(isCorrect){
        score++;
        selected.classList.add('correct');
    } else {
        selected.classList.add('incorrect');
    }

    nextButton.style.display = 'block';
}


// Randomizing answers

function randomAnswers(answers){
    for(let i = answers.length -1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[j]] =  [answers[j], answers[i]]
    }
}


// Event listener for the next button
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;

    if(currentQuestionIndex < questions.length){
        Question();
        nextButton.style.display = 'none';
    } else {
        //Reset Quiz for now
        Quiz();
    }
})