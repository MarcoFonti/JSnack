// Check
console.log('JS OK SNACK 2');

//! SCALETTA
// 1 Chiediamo 2 parole all'utente 
// 2 Recuperiamo i suoi valori
// 3 Facciamo la validazione
// 4 Creiamo un for 
    //4b Creiamo if 
// 5 Stampiamo 

const wordOneElement = prompt('Dammi una parola', 'Cane').trim();
const wordTwoElement = prompt('Dammi un\'altra parola', 'Pallone').trim();

console.log('1° parola: ' + wordOneElement,'2° parola: ' + wordTwoElement);

if(!wordOneElement || !wordTwoElement){
    alert('Ci sono campi non validi');
} else {

    for (let i = 0; i < wordOneElement.length; i++) {

        let message = 'Lunghezza uguale';

        if(wordOneElement > wordTwoElement) {
            message = 'La parola piu\' grande è ' + wordOneElement;
        } else if (wordOneElement < wordTwoElement) {
            message = 'La parola piu\' grande è '+ wordTwoElement;
        } 
        console.log(message);
    }
}