/*Snacks 4
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa*/


//array invitati alla festa
let list = ["alessio","francesco","luigi","alex","matteo","chiara","sara","marta"]

//chiedo nome all'utente
let client = prompt('Inserisci qui il tuo nome');

//controllo, per ogni nome presente sulla lista, se combacia col nome utente 

let verified = false;

if (isNaN(client) == false || client == '') {
    alert('Scusa, non ho capito il tuo nome. Ricarica la pagina e ripeti')
} else {
    for (let i = 0; i < list.length; i++) {
    if (client == list[i]) {
        verified = true;
    };

    }
};

if (verified == false) {
    alert('Desolato, il tuo nome non è presente nella lista. Non puoi entrare')
} else {
    alert('Trovato! Entra pure.')
}