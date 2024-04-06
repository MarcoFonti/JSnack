// Check
console.log('JS OK SNACK 2');

//! SCALETTA
// 1 Chiediamo 2 parole all'utente 
// 2 Recuperiamo i suoi valori
// 3 Facciamo la validazione
// 4 Creiamo un for 
    //4b Creiamo if 
// 5 Stampiamo 


/* METODO PROMPT PER CHIEDERE ALL'UTENTE */
const wordOneElement = prompt('Dammi una parola', 'Cane').trim();
const wordTwoElement = prompt('Dammi un\'altra parola', 'Pallone').trim();


/* CONTROLLO RISPOSTA */
console.log('1° parola: ' + wordOneElement,'2° parola: ' + wordTwoElement);

/* SE L'UTENTE NON METTE ANCHE SOLO UN CAMPO */
if(!wordOneElement || !wordTwoElement){

    /* ALERT */
    alert('Ci sono campi non validi');


    /* ALTRIMENTI */
} else {

    /* CICLO FOR PER VEDERE LA LUNGEZZA DI UNA DELLE DUE PAROLE */
    for (let i = 0; i < wordOneElement.length; i++) {


        /* CREO VARIBILE PER MANIPOLARLA ALL'INTERNO DELLA CONDIZIONE SE NECESSARIO */
        let message = 'Lunghezza uguale';


        /* SE LA PRIMA PAROLA E' PIU' LUNGA DELLA SECONDA */
        if(wordOneElement.length > wordTwoElement.length) {

            /* STAMPO */
            message = 'La parola piu\' grande è ' + wordOneElement;


            /* ALTRIMENTI SE LA PRIMA PAROLA E' MENO LUNGA */
        } else if (wordOneElement.length < wordTwoElement.length) {

            /* STAMPO */
            message = 'La parola piu\' grande è '+ wordTwoElement;

        } 


        /* CONTROLLO RISPOSTA */
        console.log(message);
    }
}