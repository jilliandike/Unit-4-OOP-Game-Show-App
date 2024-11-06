/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//app.js to create a new instance of the `Game` class and add event listeners for the start
//button and onscreen keyboard buttons.

// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

// const game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
//     };
//     const game = new Game();
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());

// const game = new Game();
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

//Starts a new game and displays the hidden phrase when the Start Game button is clicked.
let game;

document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game()
    game.startGame();
});
