"use strict"

console.clear();

/* Esercizio 1 - Palindromia 
    1 - Chiedere all’utente di inserire una parola
    2 - Creare una funzione per capire se la parola inserita è palindroma
*/
/*
// Il primo passaggio è creare una variabile di input in cui l'utente può inserire una parola 

const userInput = prompt("Inserire una parola");

// La varaibile della parola deve essere poi passata in una funzione per 
// determinarne l'eventuale palindromia

const userWord = userInput;
console.log(userWord);

const revWord = revertWord(userWord);
console.log(revWord);

// funziona anche con le parole con una lettera maiuscola?
if(revWord.toLowerCase() === userWord.toLowerCase()) { 
    console.log("La parola è palindroma")
} else {
    console.log("La parola non è palindroma")
}

// La funzione per 'spacchettare' la parola data e reinserirla invertita in una nuova stringa
/**
 * 
 * @param {string} word 
 * 
 * @abstract revert a string by adding its characters from the back to the top, using the indexes of the
 * string's characters
 */
/*function revertWord(word) {
    let reverted = "";
    //
    for(let i = word.length - 1; i >= 0; i--) {
        reverted += word[i];
    }
    return reverted;
}   
*/
/* ------------------------------------------------------------------------------------------- */

/* Esercizio 2 - Pari e Dispari 
    1 - L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    2 - Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    3 - Sommiamo i due numeri
    4 - Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    5 - Dichiariamo chi ha vinto.
*/

// Chiediamo all'utente di inserire un numero compreso tra 1 e 5;
// controlliamo sia un numero e nel range corretto

let userNumber;
let un_flag = true;   // variabile flag di user number per uscire dal ciclo while

while (un_flag) {
    userNumber = prompt("Insersici un numero tra 1 e 5");

    if(!isNaN(userNumber) && userNumber >= 1 && userNumber <= 5) {
        un_flag = false;
        console.log(userNumber);
    } else {
        console.log("Inserisci un numero tra 1 e 5");
    }    
} 

// Chidiamo all'utente di scegliere tra pari e dispari; controlliamo la validità dell'input

let userChoice;
let uc_flag = true;   // variabile flag di user choice per uscire dal ciclo while

while(uc_flag) {
    userChoice = prompt("Scegli pari o dispari");

    if(userChoice === "pari" || userChoice === "dispari") {
        uc_flag = false;
        console.log(userChoice);
    } else {
        console.log("Scegli pari o dispari");
    }
}


// Generiamo un numero randomico per il PC tra 1 e 5 con una funzione di RNG 
// da un minimo a un massimo (i parametri della funzione quando invocata)

let pcRandNum = randNumGen(1, 5);
console.log(pcRandNum);

// Somma delle giocate e dichiarazione del vincitore

let sum = parseInt(userNumber) + pcRandNum;
console.log(sum);
// le due condizoni di vittoria sono: ["pari" e somma pari o "dispari" e somma dispari]
if(userChoice === "pari" && isEven(sum) || userChoice === "dispari" && !isEven(sum)) {
    // la funzione isEven() restituisce un boolean; userChoice compara l'input con una stringa specifica
    console.log("Vince il giocatore");
} else {
    console.log("Vince la CPU. Riprova");
}



// Funzioni
// RNG

/**
 * 
 * @param {number} min 
 * @param {number} max 
 * 
 * Generates an integer from min to max (included);
 */
function randNumGen(min, max) {
    const rand = Math.floor(Math.random() * (max + min - 1)) + min;
    return rand;
}

// Is Even (bool)

/**
 * 
 * @param {num} num 
 * @returns boolean
 * 
 * @abstract Returns true if num is even, else return false
 */
function isEven(num) {
    return num % 2 === 0;
}