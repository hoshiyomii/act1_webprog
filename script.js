let incorrectGuess = 0;
const maxIncorrectGuess = 3;
let currentQuestion = 0;
let points = 0;
let currentDifficulty = "easy";


const easyQuestions = [
    { question: 'Country in Asia that starts with J', answer: 'japan' },
    { question: 'Question 2', answer: 'crewmate' },
    { question: 'Question 3', answer: 'amog' },
    { question: 'Question 4', answer: 'asd' },
    { question: 'Question 5', answer: 'amogus' },
    { question: 'Question 6', answer: 'amgus' },
    { question: 'Question 7', answer: 'sus' },
    { question: 'Question 8', answer: 'sussus' },
    { question: 'Question 9', answer: 'sussusamogus' },
];

const mediumQuestions = [
    { question: 'med Country in Asia that starts with J', answer: 'japan' },
    { question: 'med Question 2', answer: 'crewmate' },
    { question: 'med Question 3', answer: 'amog' },
    { question: 'med Question 4', answer: 'asd' },
    { question: 'med Question 5', answer: 'amogus' },
    { question: 'med Question 6', answer: 'amgus' },
    { question: 'med Question 7', answer: 'sus' },
    { question: 'med Question 8', answer: 'sussus' },
    { question: 'med Question 9', answer: 'sussusamogus' },
];

const hardQuestions = [
    { question: 'hard Country in Asia that starts with J', answer: 'japan' },
    { question: 'hard Question 2', answer: 'crewmate' },
    { question: 'hard Question 3', answer: 'amog' },
    { question: 'hard Question 4', answer: 'asd' },
    { question: 'hard Question 5', answer: 'amogus' },
    { question: 'haRD Question 6', answer: 'amgus' },
    { question: 'mhardd Question 7', answer: 'sus' },
    { question: 'hard Question 8', answer: 'sussus' },
    { question: 'hard Question 9', answer: 'sussusamogus' },
];

// Array to keep track of used letters 
var usedLetters = [];

const alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];


document.addEventListener('DOMContentLoaded', () => {
    const alphabetButtonsContainer = document.getElementById('alphabet-buttons');

    let currentAnswer = easyQuestions[0].answer.toUpperCase(); //answer

    alphabet.forEach(letter => {
        const button = document.createElement('button');
        button.classList.add('button');
        button.textContent = letter;
        
        button.addEventListener('click', () => {
            //Button click logic

            if (usedLetters.includes(letter)) {
                console.log(`Letter ${letter} has been used.`);
                return;
            }

            usedLetters.push(letter); // Add the clicked letter to the usedLetters array
            

            if (currentAnswer.includes(letter)){
                console.log(`Letter ${letter} is in the answer.`);

                // Iterate through all occurrences of the letter in the answer
                for (let i = 0; i < currentAnswer.length; i++) {
                    if (currentAnswer[i] === letter) {
                        guessButtons[i].textContent = letter;
                    }
                }

                button.classList.add('correct');

                if (isGuessed()) {
                    console.log("The word has been fully guessed!");
                    nextQuestion();
                }
                
                } else {
                    button.disabled = true;
                    console.log(`Letter ${letter} is not in the answer.`);
                    incorrectGuess += 1;
                    checkIncorrect();
                }

            console.log(`Button ${letter} clicked! Incorrect guesses: ${incorrectGuess}`);
        });

        alphabetButtonsContainer.appendChild(button);
    });

    //questions
    let questionElement = document.getElementById('question');
    questionElement.textContent = easyQuestions[0].question;

    let guessesContainer = document.getElementById('guesses');
    let guessButtons = [];


    for (let i = 0; i < currentAnswer.length; i++) {
        let guess = document.createElement('button');
        guess.classList.add('guess');
        guess.textContent = ' ';
        guessesContainer.appendChild(guess);
        guessButtons.push(guess);
    }

    function isGuessed() {   //checks if the "button".guess may laman na letter 
        for (let i = 0; i < currentAnswer.length; i++) {
            if (guessButtons[i].textContent === ' ') {
                return false; 
            }
        }
        return true; 
    }

    function createButtons(word) {
        guessesContainer.innerHTML = '';
        for (let i = 0; i < word.length; i++) {
        let guess = document.createElement('button');
        guess.classList.add('guess');
        guess.textContent = ' ';
        guessesContainer.appendChild(guess);
        guessButtons.push(guess);
        }
    }

    function checkDifficultyCompletion() {
        let questionsSet;
        if (currentDifficulty === "easy") {
            questionsSet = easyQuestions;
        } else if (currentDifficulty === "medium") {
            questionsSet = mediumQuestions;
        } else if (currentDifficulty === "hard") {
            questionsSet = hardQuestions;
        }

        if (currentQuestion >= questionsSet.length) {
            if (currentDifficulty === "easy") {
                currentDifficulty = "medium";
            } else if (currentDifficulty === "medium") {
                currentDifficulty = "hard";
            } else if (currentDifficulty === "hard") {
                window.alert("You have won! congratulations. Press OK to play again");
                location.reload();
            }

            currentQuestion = 0; // Reset currentQuestion for the new difficulty
            // Display a message or perform any other action to indicate the change of difficulty
            console.log(`Difficulty changed to ${currentDifficulty}.`);
        }
    }

    function nextQuestion() {
        currentQuestion++; // Move to the next question
        checkDifficultyCompletion();

        while (guessesContainer.firstChild) {
            guessesContainer.removeChild(guessesContainer.firstChild);
        }
        
        guessButtons = []; // Reset the guessButtons array
        
        let questionsSet;   //pang set ng difficulty
        if (currentDifficulty === "easy") {
            questionsSet = easyQuestions;
        } else if (currentDifficulty === "medium") {
            questionsSet = mediumQuestions;
        } else if (currentDifficulty === "hard") {
            questionsSet = hardQuestions;
        }

        if (currentQuestion >= questionsSet.length) {
            if (currentDifficulty === "easy") {
                currentDifficulty = "medium";
            } else if (currentDifficulty === "medium") {
                currentDifficulty = "hard";
            } else if (currentDifficulty === "hard") {
                console.log("All questions have been answered.");
                return;
            }

            currentQuestion = 0; // Reset currentQuestion for the new difficulty
            // Display a message or perform any other action to indicate the change of difficulty
            console.log(`Difficulty changed to ${currentDifficulty}.`);
        }
    
    
        // Reset variables
        incorrectGuess = 0;
        usedLetters = [];
    
        points += 10; // Add points
        document.getElementById('score').textContent = `Points: ${points}`;
    
        guessButtons.forEach(guess => { // Reset the display
            guess.textContent = ' ';
            guess.disabled = false;
        });
    
        alphabetButtonsContainer.querySelectorAll('.button').forEach(button => {
            button.classList.remove('correct'); 
            button.disabled = false; 
        });
    
        questionElement.textContent = questionsSet[currentQuestion].question;
        currentAnswer = questionsSet[currentQuestion].answer.toUpperCase();

        createButtons(currentAnswer);
    }

    function checkIncorrect(){
        if (incorrectGuess === maxIncorrectGuess){
            alphabetButtonsContainer.querySelectorAll('.button').forEach(button => {
                button.disabled = true;
            });
            window.alert("You have ran out of lives, press OK to retry");
            location.reload();
        }
    } //pang check if 3 incorrect na

});
