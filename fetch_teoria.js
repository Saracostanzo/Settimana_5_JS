
// Fetch in JavaScript e Chiamate di Rete:

// Il metodo fetch in JavaScript è utilizzato per effettuare chiamate di rete e ottenere risorse da un server.
//  È un modo moderno e flessibile per effettuare richieste HTTP e gestire le risposte.

// Esempio di chiamata GET
//fetch accetta come argomento l'URL della risorsa che si desidera recuperare.
fetch('https://api.example.com/data')
//fetch restituisce una Promise che risolve in un oggetto Response rappresentante la risposta alla richiesta. 
//Per gestirne il sisultato usiamo then e catch
  .then(response => {
    // Gestisci la risposta (convertono in JSON se necessario)
    return response.json();
  })
  .then(data => {
    // Usa i dati ottenuti dalla chiamata
    console.log(data);
  })
  .catch(error => {
    // Gestisci eventuali errori durante la chiamata
    console.error('Errore durante la richiesta:', error);
  });

//   Considerazioni Importanti:
//   fetch non gestisce automaticamente gli errori. 

//   Pertanto, è necessario gestire manualmente i codici di stato HTTP e verificare la presenza di eventuali errori.

// 200: Status OK
// 301: Moved permanently
// 302: Moved temporarily
// 401: Unauthorized
// 403: Forbidden
// 404: Not Found
// 410: Gone
// 451: Unavailable for Legal Reasons
// 500: Internal Server Error
// 503: Service Unavailable
  
// fetch è quindi uno strumento potente per effettuare chiamate di rete in JavaScript.




// I quattro principali metodi HTTP utilizzati con fetch sono: GET, POST, PUT, e DELETE. 

// 1. Chiamata GET:
// Il metodo GET viene utilizzato per recuperare informazioni dal server.
//  È la chiamata più comune e viene solitamente utilizzata quando si desidera ottenere dati dal server.

// Esempio di chiamata GET con fetch:

fetch('https://api.example.com/dati')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Errore durante la richiesta:', error));


//   2. Chiamata POST:
// Il metodo POST viene utilizzato per inviare dati al server per creare risorse.
// Viene utilizzato per l'invio di dati.

// Esempio di chiamata POST con fetch:

const datiDaInviaree = {
    nome: 'Mario',
    cognome: 'Rossi'
  };
  
  fetch('https://api.example.com/nuovoUtente', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datiDaInviare)
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Errore durante la richiesta:', error));
  

    // 3. Chiamata PUT:
    // Il metodo PUT viene utilizzato per aggiornare una risorsa esistente sul server. 
    // Simile a POST, ma con l'intenzione specifica di aggiornare anziché creare.
    
    // Esempio di chiamata PUT con fetch:

    const datiAggiornati = {
        nome: 'Mario',
        cognome: 'Bianchi'
      };
      
      fetch('https://api.example.com/utente/123', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datiAggiornati)
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Errore durante la richiesta:', error));
      


// 4. Chiamata DELETE:
// Il metodo DELETE viene utilizzato per rimuovere una risorsa dal server.

// Esempio di chiamata DELETE con fetch:


fetch('https://api.example.com/utente/123', {
  method: 'DELETE'
})
  .then(response => {
    if (response.ok) {
      console.log('Risorsa eliminata con successo');
    } else {
      console.error('Errore durante l\'eliminazione:', response.status);
    }
  })
  .catch(error => console.error('Errore durante la richiesta:', error));



// 2. Formato JSON:



// JSON, acronimo di JavaScript Object Notation, è un modo di rappresentare i dati. 
// È facile da leggere per le persone e facile da interpretare per le macchine.
//  I dati in JSON sono organizzati in coppie chiave-valore, simili agli oggetti JavaScript.

// Esempio di dati JSON:

// {
//     "nome": "Mario",
//     "cognome": "Rossi",
//     "età": 30
//   }
  
//   3. Metodi JSON con Fetch:

// a. JSON.stringify():
// Il metodo JSON.stringify() converte un oggetto JavaScript in una stringa JSON. 
// Questo è utile quando vogliamo inviare dati al server, poiché spesso il server si aspetta di ricevere dati in formato JSON.

const datiDaInviare = {
    nome: "Mario",
    cognome: "Rossi",
    età: 30
  };
  
  const datiJSON = JSON.stringify(datiDaInviare);

//   b. JSON.parse():
// Il metodo JSON.parse() converte una stringa JSON in un oggetto JavaScript. 
// Questo è utile quando riceviamo dati dal server e vogliamo utilizzarli nella nostra applicazione.

const datiRicevutiDalServer = '{"nome": "Mario", "cognome": "Rossi", "età": 30}';
const oggettoDati = JSON.parse(datiRicevutiDalServer);

console.log(oggettoDati.nome); // Stampa: Mario

  