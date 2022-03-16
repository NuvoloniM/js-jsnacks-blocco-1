//L'utente inserisce due numeri in successione, con due prompt.
//Il software stampa il maggiore

let num1 = parseInt(prompt('Inserisci un numero casuale'));
let num2 = parseInt(prompt('Inserisci un secondo numero casuale'));

//target div in html
let result = document.getElementById('numero_maggiore');

//Il software controlla se il numero inserito è valido, se passa il test stampa il maggiore.
if (isNaN(num1) == true || num1 == '' || isNaN(num2) == true || num2 == '' ) {
    alert('Attenzione, dati non validi')
} else if (num1 > num2){
    result.innerHTML = ` Tra i due numeri inseriti il maggiore è ${num1}`;
} else if (num1 < num2){
    result.innerHTML = `Tra i due numeri inseriti il maggiore è ${num2}`;
} else {
    result.innerHTML = "Hai per caso inserito due volte lo stesso numero?";
}