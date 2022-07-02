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
/**
 * 
 * @param {word} word la parola detta dall'utente
 * @returns se sia palindroma o meno
 */
function palindromeCheck(word) {
    //il mio default sarà false, poichè la maggior parte delle parole sono non palindrome.. anche se chiedendo all'utente la verifica di questo, non saprei
    let reverseWord = '';
    //inverto ogni lettera della parola
    for (let i = userWord.length - 1; i >= 0; i--) {
        reverseWord += userWord[i];
    }
    //sfrutto la proprietà degli operatori, per cui mi restituirà un valore di return vero o falso
    return userWord === reverseWord;
}
//creo variabile contenitore della parola inserita dall'utente
const userWord = prompt('Inserisci qui una parola, il programma verificherà se sia palindroma o meno!', 'annanna').trim();
const finalResult = document.getElementById('palindrome-result');
//costruisco il messaggio 
let message = `La parola ${userWord}`;
//sfrutto il ternario per far figurare un messaggio o l'altro in console, invocando direttamente qui la funzione
message += palindromeCheck(userWord) ? ' è palindroma!' : ' non è palindroma!'
console.log(message)

