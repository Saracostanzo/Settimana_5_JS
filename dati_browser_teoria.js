
// Teoria sui Dati del Browser e i Metodi di Storage:

// Salvataggio dei Dati del Browser:
// Il salvataggio dei dati del browser è una parte essenziale dell'esperienza web moderna.
//  Consente di memorizzare informazioni sul lato client, consentendo agli sviluppatori web di fornire una user experience 
//  personalizzata e persistente. 
// Due principali metodi di storage nel browser sono localStorage e sessionStorage.

// Ispeziona -> Application

// LocalStorage:
// Il localStorage è uno spazio di memorizzazione persistente. 
// I dati immagazzinati con questo metodo rimangono disponibili anche dopo la chiusura del browser e vengono condivisi tra le diverse finestre
//  della stessa applicazione web. Di solito, i dati vengono archiviati sotto forma di coppie chiave-valore, simili a un oggetto JavaScript.

// Utilizzo di localStorage:


// Salvataggio di dati in localStorage
localStorage.setItem('chiave', 'valore');

// Recupero di dati da localStorage
var valore = localStorage.getItem('chiave');

// Rimozione di un elemento da localStorage
localStorage.removeItem('chiave');

// Rimozione di tutti gli elementi da localStorage
localStorage.clear();

// SessionStorage:
// Il sessionStorage, d'altra parte, è simile a localStorage, ma ha una durata di vita limitata alla sessione del browser.
//  I dati memorizzati con sessionStorage sono disponibili 
// solo durante la durata di una singola sessione del browser e vengono persi alla chiusura del browser o della scheda.

// Salvataggio di dati in sessionStorage
sessionStorage.setItem('chiave', 'valore');

// Recupero di dati da sessionStorage
var valore = sessionStorage.getItem('chiave');

// Rimozione di un elemento da sessionStorage
sessionStorage.removeItem('chiave');

// Rimozione di tutti gli elementi da sessionStorage
sessionStorage.clear();


// Differenze Principali tra localStorage e sessionStorage:
// Durata della Conservazione:

// localStorage: I dati persistono oltre la sessione e rimangono fino a quando non vengono esplicitamente rimossi.
// sessionStorage: I dati durano solo per la durata della sessione del browser e vengono cancellati alla chiusura.
// Condivisione tra Finestre:

// localStorage: I dati sono condivisi tra tutte le finestre e schede della stessa origine.
// sessionStorage: I dati sono accessibili solo dalla finestra o scheda che li ha creati.
// Capacità di Archiviazione:

// Entrambi condividono una capacità di archiviazione simile (solitamente 5 MB per dominio).
// Quando Utilizzare localStorage e sessionStorage:

// localStorage: 
// Utile per salvare dati che devono persistere tra le sessioni e devono essere condivisi tra le finestre della stessa applicazione web.

// sessionStorage: 
// Adatto per dati temporanei necessari solo per la durata di una sessione, ad esempio dati di navigazione o stato temporaneo di una pagina.