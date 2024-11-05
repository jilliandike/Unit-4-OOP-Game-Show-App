/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//Game.js to create a Game class methods for starting and ending the game, handling
//interactions, getting a random phrase, checking for a win, and removing a life from the
//scoreboard.

//Defining the Game class

class Game {
    constructor(){
        this.missed = 0;
        this.phrases = [
            new Phrase('Im in the business of misery'),
            new Phrase('Whats my age again'),
            new Phrase('Do you have the time to listen to me whine'),
            new Phrase('Theres a place off Ocean Avenue where I used to sit and talk with you'),
            new Phrase('A loaded god complex cock it and pull it')
        ];
        this.activePhrase = null;
    }
    getRandomPhrase() {
        let randomNumber = Math.floor(Math.random()* this.phrases.length);
        const randomPhrase = this.phrases[randomNumber];
        return randomPhrase;
    }

    startGame(){
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = new Phrase (this.getRandomPhrase());
        this.activePhrase.addPhraseToDisplay();
    }
}