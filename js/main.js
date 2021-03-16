/*Snack 1)
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: 
nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

var biciCorsa = [{
        nome: "corsa scrausa",
        peso: 3
    },
    {
        nome: "corsa media",
        peso: 2
    },
    {
        nome: "corsa costosa",
        peso: 4
    },
    {
        nome: "da passeggio",
        peso: 1
    },

];


const [bici1, bici2, bici3, bici4] = biciCorsa;

var bicileggera = biciCorsa[0];
biciCorsa.forEach((element) => {
    if (element.peso < bicileggera.peso) {
        bicileggera = element;
    }
});
console.log(bicileggera);


console.log(`
    ${bicileggera.nome} is the lighter bike. Its wheigt is ${bicileggera.peso} kg
      `);




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
    let { nome, falli_subiti } = element;
    nuovoArray.push({ name: nome, falli_subiti: falli_subiti });
});
console.log(nuovoArray);



//5)
//Scrivi una funzione che accetti tre argomenti:
//un array e due numeri (“a” più piccolo di “b” e “b” grande al
//massimo quanto il numero di elementi dell’array).
/*
La funzione ritornerà un nuovo array con i valori che
hanno la posizione compresa tra “a” e “b” */

//Usiamo i nuovi metodi degli array foreach o filter



var arrayprova3 = [1, 2, 3, 4, 5, 6, 7, 8];

a = 3;
b = 5;

function slicedArray(array, num1, num2) {
    var arrayNuovo = [];
    if (num1 >= num2 || b > array.length) {
        return console.log("inserisci due numeri validi per estrarre i valori dell'array");
    } else {
        for (var i = 0; i < array.length; i++) {
            if (i >= num1 && i <= num2) {
                arrayNuovo.push(array[i]);
            };
        };
    };
    return arrayNuovo;
};

console.log(slicedArray(arrayprova3, a, b));

//UTILIZZO FOR EACH AL POSTO DI FOR

function slicedArray2(array, num1, num2) {
    var arrayNuovo = [];
    if (num1 >= num2 || b > array.length) {
        return console.log("inserisci due numeri validi per estrarre i valori dell'array");
    } else {
        array.forEach((element, index) => {
            if (index >= num1 && index <= num2) {
                arrayNuovo.push(element);
            };
        });
        return arrayNuovo;
    };
};


console.log(slicedArray2(arrayprova3, a, b));


//UTILIZZO FILTER AL POSTO DI FOR

function slicedArray3(array, num1, num2) {

    if (num1 >= num2 || b > array.length) {
        return console.log("inserisci due numeri validi per estrarre i valori dell'array");
    } else {
        return array.filter((element, index) => {
            return (index >= num1 && index <= num2)
        });
    }
};

console.log(slicedArray3(arrayprova3, a, b));