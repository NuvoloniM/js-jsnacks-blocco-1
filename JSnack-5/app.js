/*
Snacks 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array
*/

//creo un array vuoto
let list = [];

//chiedo di inserire un numero casuale
for (let i = 0; i < 6; i++) {
    numb = parseInt(prompt('Inserisci un numero casuale'));
    if (isNaN(numb) == true || numb == '') {
        alert('Ops! dato non valido')
    } else {
        //controllo se è dispari
        if (numb % 2 != 0) {
           list.push(numb);  
        }
    }
}

console.log(list);