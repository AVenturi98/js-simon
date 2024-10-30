/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

BONUS:
- Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
- Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

Consigli del giorno:
- Pensate prima in italiano.
- Dividete in piccoli problemi la consegna.
- Individuate gli elementi di cui avete bisogno per realizzare il programma.
- Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"

*/

console.log('Simone says');

// prendo le mie variabili dalla pagina html
const countDown = document.getElementById('countdown');
const instructionForGame = document.getElementById('instructions');
const formForInputClient = document.getElementById('answers-form');
const listNumberGuess = document.getElementById('numbers-list');

// set dei numeri min e max e timer pre partita
const guessNumber = 5;
const maxValue = 20;
const minValue = 1;
let timerForPlay = 3;


// inserisco il countdown in pagina
countDown.innerText = timerForPlay

const countDownFunction = setInterval(function () {

    timerForPlay = timerForPlay - 1;
    countDown.innerHTML = timerForPlay;

    if (timerForPlay === 0) {
        clearInterval(countDownFunction);
        instructionForGame.classList.add('d-none');
        instructionForGame.innerText = 'Inserisci i numeri che hai visto';
        formForInputClient.classList.remove('d-none')
    }

}, 1000)

// rendo visibili i numeri random durante il timer attivo

function elementNumberGuessForAppendToPage(a, b) {

    const newElemntShadow = document.createDocumentFragment();

    for (let i = 0; i < b.length; i++) {

        const numberRandomPC = b[i];

        const newElementOnPage = document.createElement('div');

        newElementOnPage.innerHTML = numberRandomPC;

        newElemntShadow.appendChild(newElementOnPage);

    }
    
    a.appendChild(newElemntShadow)
}
elementNumberGuessForAppendToPage(listNumberGuess, setToContainerNumber)




//genero 5 numeri random  ---------------------------------------------------------|
function getRandomIntInclusive(min, max) {

    const minCeiled = Math.ceil(min);

    const maxFloored = Math.floor(max);

    const number = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive

    return number
}
const randomizeNumber = getRandomIntInclusive(minValue, maxValue);


function numberOnArray(length, minValue, maxValue) {

    const containerRandomNumber = []

    while (containerRandomNumber.length < length) {

        const numberRandomPC = getRandomIntInclusive(minValue, maxValue);

        if (!containerRandomNumber.includes(numberRandomPC)) {
            containerRandomNumber.push(numberRandomPC)
        }

    }

    return containerRandomNumber
}
const setToContainerNumber = numberOnArray(guessNumber, minValue, maxValue);
//genero 5 numeri random  ---------------------------------------------------------^


// ritardo la comparsa dei miei numeri
function breakP() {
    console.log(setToContainerNumber);
}

// setTimeout(breakP, 1000);
// -----------------


// verifico che i numeri inseriti dell'utente eguaglino quelli del PC
function inputUS() {

    for (let i = 0; i < setToContainerNumber.length; i++) {

        const containerNumber = setToContainerNumber[i]

        const immetti = '5'//prompt('numberss');

        let verify = ''

        if (immetti.includes(containerNumber)) {
            verify = 'ok'
        } else verify = 'not'
        console.log(verify)
    }
}

setTimeout(inputUS, 3000);




