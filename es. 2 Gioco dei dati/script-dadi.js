/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

/* Lacio dado dell'utente */
let dadoUtente = Math.floor(Math.random() * 6) + 1
console.log("Il tuo risultato è " + dadoUtente)

/* Lancio dado computer  */
let dadoComputer = Math.floor(Math.random() * 6) + 1
console.log("Il risultato del computer è " + dadoUtente)

/* Confonto riultato utente contro risultato computer */
let risultato
if (dadoUtente > dadoComputer) {
     risultato = "Hai Vinto!!!"
} else if (dadoUtente < dadoComputer) {
     risultato = "Hai perso!!!"
} else { 
    risultato = "Pareggio" 
}

/* Elezione del vincitore */
    console.log(risultato)