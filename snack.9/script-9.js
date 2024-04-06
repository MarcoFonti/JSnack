// Check
console.log('JS OK SNACK 9');

//! SCALETTA
// 1 Creiamo un Array
// 2 Creiamo una Variabli con valore 0
// 3 Creaimo un for
    // 3b facciamo la somma
// 3 Facciamo la media
// 4 Stampiamo 


/* CREO ARRAY  */
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


/* CREO UNA VARIBILE DA MANIPOLARE NELLA CONDIZIONE */
let sum = 0;


/* CICLO FOR PER LA LUNGHEZZA DELL'AARAY INCREMENTANDO DI 1 OGNI GIRO */
for (let i = 0; i < number.length; i++){
    
    /* ALLA VARIBILE SUM AGGIUNGO I NUMERI DEL MIO ARRAY IN MO DA FARE LA SOMMA */
    sum += number [i];

}


/* CREO UNA VARIBILE PER FARE LA DIVISIONE DELLA SOMMA / LA LUNGHEZZA DEL ARRAY (10) */
const average = sum / number.length;


/* CONTROLLO RISPOSTE */
console.log ('SOMMA: ' + sum);
console.log('MEDIA: ' + average);
