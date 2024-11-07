/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//Phrase.js to create a Phrase class to handle the creation of phrases.

//Defines the Phrase class

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
    
    //Adds letter placeholders to the display when the game starts
    addPhraseToDisplay(){
        const ul = document.querySelector("#phrase ul");
        let html = '';

        for (let i = 0; i < this.phrase.length; i ++){
            let letter = this.phrase.charAt(i);
            
            if (letter === ' '){
                html += `<li class="space"> </li>`
            } else {
                html += `<li class="hide letter">${letter}</li>`
            }
        }
        ul.innerHTML = html;
    }
    
    //Checks to see if the selected letter is in the displayed phrase
    checkLetter(letter){
        if(this.phrase.includes(letter)){
            return true;
        } else {
            return false;
        }
    }

    //If the selected letter is included in the displayed phrase, the letter is shown in its
    //placeholder in the phrase
    showMatchedLetter(letter){
        let allLetters = document.getElementsByClassName("letter");
        
        for (let i = 0; i < allLetters.length; i++){
            if (allLetters[i].innerHTML === letter){
                allLetters[i].classList.remove('hide');
                allLetters[i].classList.add('show');
            }
        }
    }

}
