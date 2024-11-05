/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//Phrase.js to create a Phrase class to handle the creation of phrases.

//Defines the Phrase class

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
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
}