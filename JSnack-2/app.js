/* L'utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/

let parola1 = prompt('inserisci la prima parola che ti viene in mente');
let parola2 = prompt('inserisci la seocnda parola che ti viene in mente');

//target html
let testo = document.getElementById('testo');

//controllo se sono parole valide, se si controllo lunghezza parole e stampo prima la corta e poi la lunga
if (isNaN(parola1) == false || parola1 == '' || isNaN(parola2) == false || parola2 == '') {
    alert('Attenzione, dati inseriti non validi');
} else if(parola1.length > parola2.length){
    testo.innerHTML = `La parola ${parola2} è più corta della parola ${parola1}`;
} else if(parola1.length < parola2.length){
    testo.innerHTML = `La parola ${parola1} è più corta della parola ${parola2}`;
} else {
    testo.innerHTML = `Che caso, le due parole sono lunghe uguali!`;
}