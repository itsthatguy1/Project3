/**
 *   @author Sean Stock (sstock6829@gmail.com)
 *   @version 0.0.1
 *   @summary Project 2 Looping Logic || created: 10.2.17
 *   @todo Prompt user to rate movies until the user decides to quit
 */

"use strict";
const PROMPT = require('readline-sync');

let rating, averageRating;
let movieTitle;
let promptContinue;

const MIN_RATING = 0, MAX_RATING = 5;

/**
 * @method
 * @desc The main dispatch method
 */
function main() {
    setPromptContinue();
    while(promptContinue === 1) {
        displayReadMe();
        setMovieTitle();
        setRating();
        setAverageRating();
        displayAverage();
        setPromptContinue();
    }
}

main();

/**
 * @method
 * @desc Asks the user if they want to continue. Repeats the program if yes, ends the program if no.
 */
function setPromptContinue() {
    if (promptContinue === 1 || promptContinue === 0) {
        promptContinue = Number(PROMPT.question(`\nDo you wish to continue? [1 = Yes 0 = No] `));
        while (promptContinue !== 0 && promptContinue !== 1) {
            console.log(`That is an incorrect value. Please try again. `);
            promptContinue = Number(PROMPT.question(`\nDo you wish to continue? [1 = Yes 0 = No] `));
        }
    } else {
        promptContinue = 1;
    }
}

/**
 * @method
 * @desc Lets the user know that they can only enter a value of 1-5
 */
function displayReadMe(){
    process.stdout.write('\x1Bc');
    console.log(`Please enter ratings of 0-5 stars.`);
}

/**
 * @method
 * @desc Mutates the movieTitle variable
 */
function setMovieTitle(){
    movieTitle = PROMPT.question(`\nPlease enter the movie title: `);
}

/**
 * @method
 * @desc Mutates the rating variable
 */
function setRating(){
    let tries = 1;
    const MAX_TRIES = 3;
    rating = PROMPT.question(`\nHow many stars do you give "${movieTitle}"? `);
    while (rating < MIN_RATING || rating > MAX_RATING && tries <= MAX_TRIES){
        console.log(`"${rating}" is an incorrect value. Please try again.`);
        rating = PROMPT.question(`\nHow many stars do you give ${movieTitle}? `);
        tries++;
    }
    if (tries > MAX_TRIES){
        process.stdout.write('\x1Bc');
        console.log(`I'm sorry, you have entered an incorrect value too many times.`);
    }
}

/**
 * @method
 * @desc Creates a random average rating for the movie
 */
function setAverageRating(){
    averageRating = Math.floor(Math.random() * 5);
}

/**
 * @method
 * @desc Displays the average rating for the movie
 */
function displayAverage(){
    console.log(`\nThe average rating for "${movieTitle}" is ${averageRating} star(s). `);
}
