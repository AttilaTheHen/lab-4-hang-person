/* exported loadWord, guess */
/* globals listOfWords */
'use strict';

// ### App

// Create a file `app.js` that exposes functions for running the game.
// Don't forget to include a script tag with `src` for this file.

// 1. Create a `loadWord` function that
//     1. Gets a random integer between 0 (inclusive) and length of word (exclusive)
//     1. Selects the word from the array with that index and stores for use by the guess function (word
//     will need to be scoped in way guess function can read.

var word = '';
function loadWord() {
    var index = getRandomIndex(listOfWords.length);
    word = listOfWords[index];
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


// 1. Create a `guess` function that
//     1. Is called by the click of the Guess Letter button
//     1. Reads the letter from the Guess Letter input
//     1. If '', alerts or messages user that letter is required
//     1. Checks against letters already guessed and alerts or messages user that letter has already
//     been guessed
//     1. Otherwise:
//         1. Letter is added to guessed letters
//         1. Guess count is incremented
//         1. Guess Letter input is set to ''
//         1. If word includes the letter (hint: string has an `includes` method):
//             1. Letter(s) are revealed in Word to Guess
//             1. Check for win condition (every letter of word is in guessed letters)
//         1. If word does not include the letter:
//             1. Add a body part to the gallows
//             1. Check for lose condition (guesses count is max number of body parts)
//         1. If win or lose condition:
//             1. message the user that they won or ~~died~~ lost
//             1. Disable the Guess Letter button (button.disabled = true)
var guessCount = 0;
var wordArray = word.split('');
var newWordArray = [...wordArray];

function guess() {
    var letterGuessed = document.getElementById('letter-input');
    var letter = letterGuessed.value;
    console.log('user guessed', letter);

    if(letter === '') {
        alert('Field blank, please type a letter.');
    }
    else if(word.includes(letter.toLowerCase())) {
        console.log('woo');
        // add letter to fill-in-the-blank (correct) section
        for(var j = 0; j < wordArray.length; j++) {
            if(letter === wordArray[j]) {
                document.getElementById('letter-' + j).textContent = letter;
                newWordArray.splice(j, 1);
                // check to see if word is complete and game is won!
                if(newWordArray.length === 0) {
                    // if won, say so
                    alert('YOU WON!!!!!!');
                }
            }  
        }
    }
    else {
        guessCount++;
        // add letter to guessed (wrong) section
        document.getElementById('wrong-' + j);

        // add body part to hang person
        //max guess is 6 (6 body parts)
        // check to see if hang person is complete and game is lost!
        if(guessCount === 6) {
            // if lost, say so
            alert('You lose :(');
        }
    }
}


// 1. Call 'loadWord()` to start things
loadWord();
console.log(word);