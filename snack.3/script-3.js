// Check
console.log('JS OK SNACK 3');

//! SCALETTA
// 1 Creiamo un Variabile che parte da 0
// 2 Creiamo un ciclo for 
// 3 Chiediamo 10 volte un numero all'utente 
// 4 Recuperiamo il valori
// 5 Facciamo la somma
// 6 Stampiamo 


/* CREO UNA VARIBILE DA MANIPOLARE DENTRO LA CONDIZIONE */
let number = 0;


/* CICLO FOR DA 1 A 10 E INCREMENTO DI 1 PER GENERARE 10 DOMANDE*/
for (let i = 1; i <= 10; i++){

    
    /* CREO VARIBILE IN CUI ASSEGNO IL VALORE CHE MI DA L'UTENTE */
    let numberUser = parseInt(prompt( 'Dimmi '+ [i] + '° numero'));
    

    /* VALIDAZIONE SE NON E' NUMERO E NON CE UN NUMERO */
    if(isNaN(numberUser) || !numberUser){

        /* ALERT */
        alert ('Dati non validi');


        /* ALTRIMENTI */
    } else {


        /* CONTROLLO RISPOSTA UTENTE */
        console.log('Numero fornito: '+ numberUser);


        /* AGGIUNGO ALLA MIA VARIBILE IL NUMERO FORNITO DALL'UTENTE PER FARE LA SOMMA */
        number += numberUser
    }


    /* CONTROLLO RISPOSTA */
    console.log('Somma: '+ number);
}