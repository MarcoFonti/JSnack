// Check
console.log('JS OK SNACK 1');

//! SCALETTA
// 1 Chiediamo 2 numeri all'utente 
// 2 Recuperiamo i suoi valori
// 3 Facciamo la validazione
// 4 Creiamo un if 
// 5 Stampiamo 

const numberOneElement = parseInt(prompt('Dammi un numero', 5));
const numberTwoElement = parseInt(prompt('Dammi un\'altro numero', 10));

console.log('1° numero: ' + numberOneElement,'2° numero: ' + numberTwoElement);

if (isNaN(numberOneElement) || isNaN(numberTwoElement) || numberOneElement < 1 || numberTwoElement < 1){
    alert('Ci sono campi non validi');
} else {

    let message = 'Numeri uguali';

    if (numberOneElement > numberTwoElement) {
        message = 'Il Numero piu\' grande è ' + numberOneElement;
    } else if (numberOneElement < numberTwoElement) {
        message = 'Il Numero piu\' grande è ' + numberTwoElement;
    }

    console.log(message);
}


