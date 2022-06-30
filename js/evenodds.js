/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto
s
Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Domande da farsi quando scriviamo una funzione*/
// ?1 - Come la chiamo?
// ?2 - Ho bisogno di parametri? (se si quali?)
// ?3 - Devo restituire qualcosa? (se si cosa? di che tipo?)
// ?4 OPZIONALE:  Qualcosa  potrebbe andare storto? (se si, cosa?).*/

/*
steps
0. chiediamo all'utente tramite prompt se preferisce pari o dispari (si potrebbe fare con due bottoni? al quale colleghiamo due event listener con prompt? da provare )
1. costruiamo una funzione che generi random number da uno a cinque per il cpu
1.1 a)come la chiamerò? 
b) avrò bisogno di alcui paramentri?
c) questa funzione mi deve restituire qualcosa(result)?
2. sommiamo i due numeri 
3. creiamo una funzione contenente il modulo di due del tipo "isEven
4. stampo in console il risultato"
*/

//0.
const userFirstChoise = prompt('Scegli pari o dispari', 'pari');
console.log("l'utente scelgie : " + userFirstChoise)
const userSecondChoise = parseInt(prompt('Scegli un numero da 1 a 5', '4'));
console.log("l'utente sceglie il numero : " + userSecondChoise)
//valido risposta utente
while (isNaN(userSecondChoise) || userSecondChoise < 1 || userSecondChoise > 5) {
    alert('devi inserire un numero per continuare. leggi attentamente e ritenta.')
    userSecondChoise = parseInt(prompt('inserisci un numero da 1 a 5', '2'))
}

//1. ; 1.1 a) b) c)
function getCpuRandomNumberFromOneToFive(min = 1, max = 5) {
    let number = Math.floor(Math.random() * (max + 1 - min)) + min;
    return number;
}
//1.2 invoco la funzione
const cpuNumber = getCpuRandomNumberFromOneToFive();
console.log('il computer pesca il numero: ' + cpuNumber)

//2. 
let sum = userSecondChoise + cpuNumber;
console.log('la somma dei due numeri è: ' + sum)

//3. creazione funzione che stabilisca se questo valore sia pari o dispari
function isEvenOrOdds() {
    let result = '';
    if (sum % 2 === 0) {
        result = 'pari';
    } else {

        result = 'dispari';
    }
    return result;
}
//3.2 invoco la funzione
const evenOrOdds = isEvenOrOdds()
console.log('la somma è: ' + evenOrOdds)

//4. dichiaro il vincitore
let message = "vince l'utente";
if (userFirstChoise !== evenOrOdds) {
    message = "hai perso. vince il computer"
}
console.log(message)

/* or 
if (userFirstChoise === evenOrOdds) {
    console.log("vince l'utente!")
} else {

    console.log("vince il computer")
}
meglio la prima. meno righe di codice
*/