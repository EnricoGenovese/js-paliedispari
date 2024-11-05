"use strict"

console.clear();

/* Esercizio 1 - Palidroma 
    1 - Chiedere all’utente di inserire una parola
    2 - Creare una funzione per capire se la parola inserita è palindroma
*/

// Il primo passaggio è creare una variabile di input in cui l'utente può inserire una parola 

// const userInput = prompt("Inserire una parola");

// La varaibile della parola deve essere poi passata in una funzione per 
// determinarne l'eventuale palindromia

const userWord = "otto";
console.log(userWord);

const revWord = revertWord(userWord);
console.log(revWord);

// if(reverted.toLowerCase() === word.toLowerCase()) {
//     console.log("La parola è palindroma")
// } else {
//     console.log("La parola non è palindroma")
// }

// La funzione per 'spacchettare' la parola data e reinserirla invertita in una nuova stringa
/**
 * 
 * @param {string} word 
 * 
 */
function revertWord(userWord) {
    let reverted = "";
    //
    for(let i = userWord.length - 1; i >= 0; i--) {
        reverted += word[i];
    }
    return reverted;
}   








/* Esercizio 2 - Pari e Dispari 
    1 - L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    2 - Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    3 - Sommiamo i due numeri
    4 - Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    5 - Dichiariamo chi ha vinto.
*/

