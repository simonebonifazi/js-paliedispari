/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Domande da farsi quando scriviamo una funzione*/
// ?1 - Come la chiamo?
// ?2 - Ho bisogno di parametri? (se si quali?)
// ?3 - Devo restituire qualcosa? (se si cosa? di che tipo?)
// ?4 OPZIONALE:  Qualcosa  potrebbe andare storto? (se si, cosa?)

//palindormo
/*
perscorso logico:
0. creo elemento e lo connetto al DOM dichiarando poi una variabile globale
1. chiedo tramite prompt di inserire una parola
2. creo la funziona per stabilire che la parola sia palindroma:
2.1 palindromo significa che sia leggibile da entrambe le direzioni, il che significa, tradotto
che gli le lettere della parola, trasformata la parola in array, devono essere uguali da destri a sinistra
2.2 per creare la funzione dobbiamo darle un nome, capire se ha bisogno di paramentri e se devee darci un result:
 'palindromeCheck';
 word come parametro;
 result sì
  */

//0.


//1. inizio a creare la mia funzione
function palindromeCheck(userWord) {
    //il mio default sarà false, poichè la maggior parte delle parole sono non palindrome.. anche se chiedendo all'utente la verifica di questo, non saprei
    let result = false;
    let word = '';
    for (let i = userWord.length - 1; i >= 0; i--) {
        word += userWord[i];
    }
    if (word == userWord) {
        result = true;
    }
    console.log(word)
    console.log(userWord)
    console.log(result)
}

//const finalResult = document.getElementById('palindrome-result');
const userWord = prompt('Inserisci qui una parola, il programma verificherà se sia palindroma o meno!', 'annanna');

const wordCheck = palindromeCheck(userWord);
// console.log(wordCheck)
