// Gestione degli Eventi del DOM:
// Gli eventi del DOM sono azioni che si verificano durante l'interazione con una pagina web.
// Ad esempio, un clic su un pulsante o il caricamento completo di una pagina sono eventi. Vediamo come gestire questi eventi in JavaScript.

// Aggiungere un Gestore di Eventi:
// Per ascoltare un evento su un elemento del DOM, usiamo il metodo addEventListener. Ecco un esempio con un pulsante:

<button id="mioPulsante">Cliccami!</button>

// Seleziona il pulsante
const pulsante = document.getElementById('mioPulsante');

// Aggiungi un gestore di eventi per il clic
pulsante.addEventListener('click', function() {
  alert('Hai cliccato il pulsante!');
});

// TIPI DI EVENTI
// Eventi di Mouse:

// click: Il mouse è stato cliccato.
// dblclick: Il mouse è stato cliccato due volte.
// mousedown: Un pulsante del mouse è stato premuto.
// mouseup: Un pulsante del mouse è stato rilasciato.
// mousemove: Il mouse si sta muovendo.
// mouseover: Il mouse è passato sopra un elemento.
// mouseout: Il mouse ha lasciato un elemento.
// Eventi di Tastiera:

// keydown: Una tastiera è stata premuta.
// keyup: Una tastiera è stata rilasciata.
// keypress: Una tastiera è stata premuta e rilasciata.
// Eventi di Input:

// input: Un valore di input è cambiato.
// change: Il valore di un elemento di input è stato cambiato.


// Eventi di Form:
// submit: Il modulo è stato inviato.
// reset: Il modulo è stato ripristinato.

// Eventi di Focus:
// focus: Un elemento ha ricevuto il focus.
// blur: Un elemento ha perso il focus.

// Eventi di Caricamento della Pagina:
// load: La pagina è stata completamente caricata.
// DOMContentLoaded: Il DOM è stato completamente caricato, senza attendere che le immagini e gli stili siano completamente scaricati.

// Eventi di Finestra:
// resize: La finestra del browser è stata ridimensionata.
// scroll: La finestra o un elemento con overflow è stato scorruto.

// Eventi di Animazione e Transizione:
// animationstart, animationend, animationiteration: Eventi relativi all'inizio, alla fine e all'iterazione di un'animazione CSS.
// transitionstart, transitionend: Eventi relativi all'inizio e alla fine di una transizione CSS.

// Eventi Touch (per Dispositivi Mobili):
// touchstart, touchmove, touchend: Eventi per interazioni touch.

// Questi sono solo alcuni esempi, e ci sono molti altri eventi disponibili. 
// https://developer.mozilla.org/en-US/docs/Web/Events

// Rimozione di un Gestore di Eventi:
// Per rimuovere un gestore di eventi, utilizziamo il metodo removeEventListener.
//  È importante avere una funzione di gestione degli eventi separata, in modo da poterla passare come argomento per la rimozione.

 function gestoreClic() {
    alert('Hai cliccato!');
  }
  
  elemento.addEventListener('click', gestoreClic);
  
  // Rimuovi il gestore di eventi
  elemento.removeEventListener('click', gestoreClic);
  



//   preventDefault e stopPropagation 
  
//   Sono due metodi fondamentali in JavaScript utilizzati durante la gestione degli eventi. Vediamo cosa fanno ciascuno di essi:

//   preventDefault:
//   Il metodo preventDefault è utilizzato per impedire il comportamento predefinito associato a un determinato evento.
//    Ad esempio, quando si fa clic su un link (<a>), 
//     il comportamento predefinito è quello di navigare verso la pagina indicata dall'attributo href.
//     Se desideriamo evitare che ciò accada, possiamo utilizzare preventDefault per bloccare questo comportamento predefinito.

//     <a href="https://www.example.com" id="mioLink">Clicca qui</a>

    const mioLink = document.getElementById('mioLink');

mioLink.addEventListener('click', function(event) {
  event.preventDefault(); // Impedisce il comportamento predefinito (navigazione)
  console.log('Hai cliccato sul link, ma non sei stato reindirizzato!');
});

// PREMESSA
// Propagazione degli Eventi nel DOM:
// Quando si verifica un evento su un elemento del DOM,
//  l'evento viene inizialmente catturato nella fase di "capturing" (cattura) e poi bolle verso l'alto nella fase di "bubbling" (bolle). 
//  Questo processo si chiama "propagazione degli eventi".

// Esempio di Propagazione:
// Immagina di avere una struttura del DOM simile a questa:

//<div id="genitore">
// <button id="figlio">Clicca qui</button>
//</div>

// Se fai clic sul pulsante (<button>), l'evento inizierà dalla radice del documento e scenderà lungo l'albero verso l'elemento target,
//     che è il pulsante. Questa è la fase di cattura. Poi, dopo aver raggiunto l'elemento target,
//     l'evento bolle verso l'alto dall'elemento target risalendo lungo l'albero. Questa è la fase di bolle.

//     Perché Bloccare la Propagazione?
// Ci sono situazioni in cui potresti voler interrompere la propagazione degli eventi. Ad esempio:

// In alcune situazioni, potresti avere eventi associati a più elementi all'interno del DOM. Se non fermi la propagazione, 
// l'evento potrebbe raggiungere altri gestori che potrebbero avere effetti indesiderati o contrastanti.

// <div id="genitore">
//   <button id="figlio">Clicca qui</button>
// </div>

const genitore = document.getElementById('genitore');
const figlio = document.getElementById('figlio');

genitore.addEventListener('click', function() {
  console.log('Evento catturato dal genitore');
});

figlio.addEventListener('click', function(event) {
  event.stopPropagation(); // Ferma la propagazione dell'evento al genitore altrimenti salirebbe fino al genitore e potrebbe provocare sovrapposizioni

  console.log('Evento intercettato dal figlio');
});

