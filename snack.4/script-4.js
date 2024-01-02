// Check
console.log('JS OK SNACK 3');

//! SCALETTA
// 1 Creiamo un input, button e un paragrafo
// 2 Recuperiamo gli elementi 
// 3 Creiamo un Array di nomi 
// 4 Evento al click
// 5 Recuperiamo valore utente
// 6 Creiamo un ciclo for 
    // 6b Creiamo un if
// 7 Stampiamo in pagina

const lastNameField = document.getElementById('lastName');
const sendButton = document.getElementById('send');
const paragraphElement = document.querySelector('.paragraph');

console.log(lastNameField, sendButton, paragraphElement);

const nameArray = ['Marco', 'Luigi', 'Alessandro', 'Marta', 'Beatrice'];

sendButton.addEventListener('click', function(){
    const recoveryName = lastNameField.value;
    console.log(recoveryName);

    for (let i = 0; i < nameArray.length; i++){    

        if (nameArray[i] === recoveryName) {
            paragraphElement.innerText += 'Acettato'
        } else {
            paragraphElement.innerText += 'Non acetatto'
        }

    }

})

//? Trovare il modo per bloccare la risposta appena trovato l'utente .. Servirebbe il FINCHE'