// Check
console.log('JS OK SNACK 5');

//! SCALETTA
// 1 Creiamo un Array Vuoto
// 2 Creaiamo un for
// 3 Chiediamo all'utente per 6 volte un numero
// 4 Reuperiamo i valori
// 5 Creiamo un if
// 6 Stampiamo in pagina

const numberArray = []

for (let i = 0; i < 6; i++) {
    const numberUser = parseInt(prompt('Dimmi un numero'));
    console.log (numberUser);

    if (!(numberUser % 2 === 0)) {
        console.log('numeri dispari');
        numberArray.push (numberUser);
    } 
}

console.table(numberArray);
