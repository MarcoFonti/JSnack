// Check
console.log('JS OK SNACK 9');

//! SCALETTA
// 1 Creiamo un Array
// 2 Creiamo una Variabli con valore 0
// 3 Creaimo un for
    // 3b facciamo la somma
// 3 Facciamo la media
// 4 Stampiamo 


const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

for (let i = 0; i < number.length; i++){
    
    sum += number [i];
}

const average = sum / number.length;

console.log ('SOMMA: ' + sum);
console.log('MEDIA: ' + average);
