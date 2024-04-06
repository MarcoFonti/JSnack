// Check
console.log('JS OK SNACK 5');

//! SCALETTA
// 1 Creiamo un Array Vuoto
// 2 Creaiamo un for
// 3 Chiediamo all'utente per 6 volte un numero
// 4 Reuperiamo i valori
// 5 Creiamo un if
// 6 Stampiamo


/* CREO ARRAY VUOTO PER MANIPOLARLO NELLA CONDIZIONE */
const numberArray = []


/* CICLO FOR DA 0 A 6 INCREMENTO DI 1 PER GENERARARE 6 DOMANDE*/
for (let i = 0; i < 6; i++) {


    /* CHIEDO ALL'UTENTE CON IL METODO PROMPT */
    const numberUser = parseInt(prompt('Dimmi un numero'));


    /* CONTROLLO RISPOSTA */
    console.log (numberUser);


    /* CONDIZIONE SE IL NUMERO DELL'UTENTE NON E' MULTIPLO DI 2 */
    if (!(numberUser % 2 === 0)) {


        /* STAMPO A CONSOLE I NUMERI DISPARI */
        console.log('numeri dispari');


        /* AGGIUNGO ALL'ARRAY SOLO SE E' DISPARI */
        numberArray.push(numberUser);
        
    } 
}


/* CONTROLLO RISPOSTA */
console.table(numberArray);
