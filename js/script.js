// ESERCIZIO 1

var emailUtente = prompt('Inserisci la tua email');
var lista = ['ciao@gmail.com', 'bella@gmail.com', 'sole@gmail.com', 'fra@gmail.com', 'buba@gmail.com'];
var esitoRicerca = "Email non esistente";

for (let i = 0; i < lista.length; i++) {
    if (lista[i] == emailUtente) {
        esitoRicerca = "Email esistente";
    }    
}

document.getElementById('risultato').innerHTML = esitoRicerca;



// ESERCIZIO 2

var listaCognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
cognomeUtente = prompt('Inserisci il tuo cognome');
cognomeUtente = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1);
listaCognomi.push(cognomeUtente);
console.log(listaCognomi);

for (let i = 0; i < listaCognomi.length; i++) {
    listaCognomi[i] = listaCognomi[i].charAt(0).toUpperCase() + listaCognomi[i].slice(1);
}

listaCognomi.sort();
console.log(listaCognomi);

var trovato = false;

for (let i = 0; i < listaCognomi.length && trovato == false; i++) {
    if (listaCognomi[i] == cognomeUtente) {
        console.log('La posizione del tuo cognome nella lista ordinata é ', i+1);
        trovato = true;
    }
}