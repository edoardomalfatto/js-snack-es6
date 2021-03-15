/*Snack 1)
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: 
nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

var biciCorsa = [{
        nome: "corsa scrausa",
        peso: 1
    },
    {
        nome: "corsa media",
        peso: 2
    },
    {
        nome: "corsa costosa",
        peso: 3
    },
    {
        nome: "da passeggio",
        peso: 4
    },

];


const [bici1, bici2, bici3, bici4] = biciCorsa;


biciCorsa.forEach((element) => {
    if (element.peso < 2) {
        console.log(`
    ${element.nome} is the lighter bike. Its wheigt is ${element.peso} kg
    `);
    }
});


//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.


var squadreCalcio = [{
        nome: "Milan",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Juve",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Lazio",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Roma",
        punti_fatti: 0,
        falli_subiti: 0
    },

];

//funzioni random

const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


squadreCalcio.forEach((element) => {
    element.punti_fatti = getRndInteger(1, 40);
    element.falli_subiti = getRndInteger(1, 10);
});
console.log(squadreCalcio);

//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti
// e stampiamo tutto in console. */

var nuovoArray = [];

squadreCalcio.forEach((element) => {
    const { nome, falli_subiti } = element;
    nuovoArray.push({ name: nome, falli_subiti: falli_subiti });
});
console.log(nuovoArray);