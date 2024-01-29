let incorrectGuess = 0;
const maxIncorrectGuess = 3;

const easyQuestions = [
    { question: 'Country in Asia that starts with J', answer: 'JAPAN' },
    // TEST CASE
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

    const currentAnswer = easyQuestions[0].answer.toUpperCase();

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
                
                } else {
                    button.disabled = true;
                    console.log(`Letter ${letter} is not in the answer.`);
                }

            console.log(`Button ${letter} clicked! Incorrect guesses: ${incorrectGuess}`);
        });

        alphabetButtonsContainer.appendChild(button);
    });

    const questionElement = document.getElementById('question');
    questionElement.textContent = easyQuestions[0].question;

    const guessesContainer = document.getElementById('guesses');
    const guessButtons = [];


    for (let i = 0; i < currentAnswer.length; i++) {
        const guess = document.createElement('button');
        guess.classList.add('guess');
        guess.textContent = ' ';
        guessesContainer.appendChild(guess);
        guessButtons.push(guess);
    }
});
