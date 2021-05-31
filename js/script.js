// ESERCIZIO 1

var emailUtente = prompt('Inserisci la tua email');
var lista = ['ciao@gmail.com', 'bella@gmail.com', 'sole@gmail.com', 'fra@gmail.com', 'buba@gmail.com'];
var esitoRicerca = "Email non esistente";

for (var i = 0; i < lista.length; i++) {
    if (lista[i] == emailUtente) {
        esitoRicerca = "Email esistente";
    }    
}

document.getElementById('risultato').innerHTML = esitoRicerca;