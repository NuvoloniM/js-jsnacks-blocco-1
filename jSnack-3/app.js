//Il software deve chiedere per 10 volte all'utente di inserire un numero
//Il programma stampa la somma di tutti i numeri inseriti.

//creo una variabile vuota
let sum = 0

//target html 
let somma = document.getElementById('somma');

//chiedo 10 volte 
for (let i = 0; i < 10; i++) {
    let x = parseInt(prompt('Inserisci un numero a piacere'))
    if (isNaN(x) == true || x=='') {
        alert('Attenzione, i dati inseriti non sono validi')
    } else {
        sum += x;
    }
}

somma.innerHTML= `la somma dei numeri inseriti è ${sum}`