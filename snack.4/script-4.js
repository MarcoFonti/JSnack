// Check
console.log('JS OK SNACK 4');

//! SCALETTA
// 1 Creiamo un input, button e un paragrafo
// 2 Recuperiamo gli elementi 
// 3 Creiamo un Array di nomi 
// 4 Evento al click
// 5 Recuperiamo valore utente
// 6 Creiamo un ciclo for 
    // 6b Creiamo un if
// 7 Stampiamo in pagina


/* RECUPERO ELEMENTI ID */
const lastNameField = document.getElementById('lastName');
const sendButton = document.getElementById('send');
/* RECUPERO ELEMENTO PER CLASSE */
const paragraphElement = document.querySelector('.paragraph');


/* CONTROLLO RISPOSTA */
console.log(lastNameField, sendButton, paragraphElement);


/* CREO UN ARAY */
const nameArray = ['Marco', 'Luigi', 'Alessandro', 'Marta', 'Beatrice'];

/* AL'EVENTO SUL CLICK DEL BOTTONE INVIA*/
sendButton.addEventListener('click', function(){

    
    /* RECUPERO INPUT FORNITO DALL'UTENTE */
    const recoveryName = lastNameField.value;


    /* CONTROLLO RISPOSTA */
    console.log(recoveryName);


    /* CREO FLAG DA MANIPOLARE DENTRO LA CONDIZIONE PER STOPPARE IL CICLO SE UTENTE VINE TROVATO */
    let flag = false;


    /* CICLO FOR PER LA LUNGHEZZA DELL'ARRAY */
    for (let i = 0; i < nameArray.length && !flag ; i++){    

        /* SE IL NOME DENTRO AL MIO ARRAY E INDENTICO A QUELLO FORNITO DALL'UTENTE */
        if (nameArray[i] === recoveryName) {

            /* STAMPO */
            paragraphElement.innerText += 'Acettato'

            flag = true;

            /* ALTRIMENTI */
        } else {

            /* STAMPO */
            paragraphElement.innerText += 'Non acetatto'
        }

    }

})

//? Trovare il modo per bloccare la risposta appena trovato l'utente .. Servirebbe il FINCHE'