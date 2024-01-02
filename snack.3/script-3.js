// Check
console.log('JS OK SNACK 3');

//! SCALETTA
// 1 Creiamo un Variabile che parte da 0
// 2 Creiamo un ciclo for 
// 3 Chiediamo 10 volte un numero all'utente 
// 4 Recuperiamo il valori
// 5 Facciamo la somma
// 6 Stampiamo 

let number = 0;


for (let i = 1; i <= 10; i++){

    let numberUser = parseInt(prompt( 'Dimmi '+ [i] + '° numero'));
    
    if(isNaN(numberUser) || !numberUser){
        alert ('Dati non validi');
    } else {
        console.log('Numero fornito: '+ numberUser);
        number += numberUser
    }

    console.log('Somma: '+ number);
}