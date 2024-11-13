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
 
    //Applies a random number to return a random phrase
    getRandomPhrase() {
        let randomNumber = Math.floor(Math.random()* this.phrases.length);
        const randomPhrase = this.phrases[randomNumber];
        return randomPhrase;
    }

    //When you click Start Game, this hides the start screen, returns a random phrase, 
    //and adds the phrase to the display
    startGame(){
        document.getElementById('overlay').style.display = 'none';
        let newRandomPhrase = this.getRandomPhrase();
        this.activePhrase = new Phrase (newRandomPhrase.phrase);
        this.activePhrase.addPhraseToDisplay();
    }  
    
    //Checks to see if all the letters are revealed and the game is won
    checkForWin(){
        if (document.getElementsByClassName('hide').length === 0){
            return true;
        } else {
            return false;
        }
    }
    
    //Removes a life by replacing blue hearts with gray hearts
    //Calls Game Over method when all hearts have been replaced
    removeLife(){
        this.missed += 1;
        document.getElementsByClassName('tries')[`${this.missed-1}`].firstElementChild.src = 'images/lostHeart.png';

        if(this.missed == 5){
            this.gameOver(false);
        }
    }
   
    //When the game ends with a win or a loss, this displays the correct messaging
    gameOver(gameWon){  
        let overlay = document.getElementById('overlay');
        let message = document.getElementById('game-over-message');
    
        overlay.style.display = '';

        if (!gameWon) {
            message.textContent = "Bummer, an All Time Low. Want to try again?";
            overlay.classList.add('lose');
        } else {
            message.textContent = "Congrats! You didn't Panic At The Disco and you won!";
            overlay.classList.add('win');
        }

        this.resetGame();
    }
    
    //Checks to see if button clicked matches the letter in the phrase and update the phrase and lives accordingly
    handleInteraction(selectedLetter) {
        const allKeys = document.getElementsByClassName("key");
        const keyArray = Array.from(allKeys);

        keyArray.forEach(key => {
            
            //If the button matches the letter, disable the button. 
            if (key.textContent === selectedLetter){
                key.disabled = true;
                
                /* 
                Check if the letter is in the phrase. 
                If it is, update the class to chosen, display the letter, and check to see if the player 
                won the game.
                If it isn't, updated the class to wrong and remove a life.
                */
                if(this.activePhrase.checkLetter(selectedLetter)){
                    key.classList.add('chosen');
                    this.activePhrase.showMatchedLetter(selectedLetter);
                    this.checkForWin();
                        if(this.checkForWin()){
                            this.gameOver(true)
                        }
                } else {
                    key.classList.add('wrong');
                    this.removeLife();
                }
            }    
        });
   }

   //Resets the gameboard so that a new game will start when clicking the Start Game button
   resetGame(){
        const ul = document.querySelector("#phrase ul");
        ul.innerHTML = '';
    
        const allKeys = document.getElementsByClassName("key");
        const keyArray = Array.from(allKeys);

        keyArray.forEach(key => {
            key.disabled = false;
            key.classList.add('key');
            key.classList.remove('wrong', 'chosen');
        });

        const hearts = document.getElementsByClassName('tries');
        const heartsArray = Array.from(hearts);

        heartsArray.forEach(heart => {
            heart.firstElementChild.src = 'images/liveHeart.png'
        });

        this.missed = 0;
   }

}