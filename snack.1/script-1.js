// Check
console.log('JS OK SNACK 1');


//! SCALETTA
// 1 Chiediamo 2 numeri all'utente 
// 2 Recuperiamo i suoi valori
// 3 Facciamo la validazione
// 4 Creiamo un if 
// 5 Stampiamo 

/* METODO PROMPT PER CHIEDERE ALL'UTENTE */
const numberOneElement = parseInt(prompt('Dammi un numero', 5));
const numberTwoElement = parseInt(prompt('Dammi un\'altro numero', 10));


/* CONTROLLO RISPOSTA */
console.log('1° numero: ' + numberOneElement,'2° numero: ' + numberTwoElement);


/* VALIDAZIONE SE UTENTE NON HA MESSO UN NUMERO, E SE I NUMERI SONO MINORI DI 1 */
if (isNaN(numberOneElement) || isNaN(numberTwoElement) || numberOneElement < 1 || numberTwoElement < 1){

    /* ALERT */
    alert('Ci sono campi non validi');


    /* ALTRIMENTI */
} else {

    /* CREO VARIBILE DA MANIPOLARE DENTRO LA CONDIZIONE SOLO SE NECESSARIO*/
    let message = 'Numeri uguali';

    /* SE IL PRIMO NUMERO E MAGGIORE DEL SECONDO */
    if (numberOneElement > numberTwoElement) {

        /* STAMPO */
        message = 'Il Numero piu\' grande è ' + numberOneElement;

        /* ALTRIMENTI SE IL PRIMO NUEMRO E' MINORE DEL SECONDO  */
    } else if (numberOneElement < numberTwoElement) {

        /* STAMPO */
        message = 'Il Numero piu\' grande è ' + numberTwoElement;

    }


    /* CONTROLLO RISPOSTA */
    console.log(message);
}


