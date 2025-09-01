/* Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for. */

let listaInvitati = ["luigi@gmail.com", "michele@gmail.com", "mario@gmail.com", "michela@gmail.com", "alessia@gmail.com", "ottavio@gmail.com"]
 let mailUtente = prompt("Inserisci la tua mail")
/*  let trovato = false
 */
for (i = 0; i < listaInvitati.length; i++) {
  if (listaInvitati[i] === mailUtente) {
        console.log(`Complimenti ***${mailUtente}*** sei tra gli invitati`)
/*         trovato = true
 */        break;
    } else {
          console.log(`Mail ***${mailUtente}*** non trovata, non sei tra gli invitati`)
       break
      }
}