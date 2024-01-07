1. Javascript è un linguaggio di programmazione utilizzato per creare o rendere interattivi i siti web.
2. Anche Java è un linguaggio di programmazione ma a differenza di Javascript permette solo
   una programmazione statica.
3. Per collegare un file Javascript ad un Html bisogna utilizzare il tag **script** con l’attributo **src** all’interno del body, ponendolo all’ultima posizione.
4. **Document Object Model**
5. Una variabile si dichiara tramite _let_, _const_ e _var_ **nomevariabile** = _quello che la variabile deve fare_.
6. Vi sono dati definitivi primitivi poiché sono presenti per definizione all’interno di Javascript,sono: numeri, stringhe, null, booleani e undefined. Vi sono pure dati complessi definiti oggetti come gli array e le funzioni.
7. Le funzioni definiscono gli oggetti e si dichiarano con: _function nomeFunzione() {}_.
8. Gli oggetti si creano dall’interno delle parentesi graffe di una funzione o dichiarandoli in una variabile.
9. L'espressione è una combinazione di valori, operatori e variabili che rappresentano un nuovo valore; gli operatori invece corrispondono agli operatori matematici.
10. L’array è un tipo particolare di variabile che permette di inserire vari dati in maniera
    ordinata a cui ci si può riferire tramite un indice numerico che parte da 0.
11. Il doppio uguale verifica l'uguaglianza dei valori, il triplo uguale verifica oltre ai valori anche il tipo.
12. Utilizzando il doppio slash
13. I cicli permettono di ripetere una stessa istruzione per più volte in base ad una condizione che permette al ciclo di ripetersi fino a quando tale condizione viene rispettata, altrimenti il ciclo si interrompe.
14. Si possono dichiarare 3 tipi di variabili in Javascript:
    • **Var** è una variabile di tipo globale che permette la sovrascrittura
    • **Let** è una variabile di tipo locale definita da parentesi graffe che permette la
    sovrascrittura
    • **Const** è una variabile di tipo locale definita da parentesi graffe che non permette la sovrascrittura.
15. Hoisting consiste nell'effettuare il processo delle dichiarazioni del computer prima di qualsiasi altro codice.
16. Il Garbage collection è un processo automatico per liberare la memoria degli oggetti non utilizzati.
17. Un callback è un richiamo di una funzione passata come argomento di un'altra funzione.
18. Il DOM può essere manipolato utilizzando metodi come: **getElementById**, **querySelector**, **appendChild** consentendo di accedere ad elementi HTML.
19. Gli eventi sono azioni che avvengono nel DOM o nell'applicazione web e che possono essere "ascoltate" e gestite, come ad esempio il click del mouse, il caricamento della pagina o la pressione di un tasto.
20. Per prevenire il comportamento predefinito di un evento in JavaScript, si può utilizzare il metodo **preventDefault()** sull'oggetto evento passato come parametro alla funzione di gestione dell'evento.
21. Le espressioni regolari permettono di eseguire ricerche complesse e manipolazioni di stringhe.
22. Si possono catturare gli errori utilizzando un blocco try che contiene il codice che potrebbe generare errori, e catch per gestire l'errore catturato.
23. Le promesse sono oggetti che rappresentano il completamento (o il fallimento) di un'operazione asincrona, permettendo la gestione più chiara e pulita del flusso di lavoro asincrono.
24. L'asincronia si riferisce alla capacità del linguaggio di eseguire operazioni in modo non sequenziale.
25. **Async** dichiara una funzione asincrona, mentre **await** viene utilizzato all'interno di una funzione asincrona per attendere il completamento di un'operazione asincrona, rendendo il codice più leggibile e gestibile.
26. **This** fa riferimento all'oggetto corrente in cui è stato richiamato e il suo valore dipende dal contesto d'utilizzo.
27. L'ereditarietà può essere implementata utilizzando prototipi e il meccanismo di delega degli oggetti.
28. push(), pop(), shift(), unshift(), splice(), slice(), concat(), join(), indexOf(), forEach(), map(), filter(), reduce()
29. si può utilizzare l'oggetto XMLHttpRequest o il metodo fetch(). Puoi creare una richiesta, impostare il tipo di richiesta HTTP, gestire la risposta tramite callback e aggiornare la tua interfaccia utente con i dati ottenuti dalla richiesta.
30. I template literals sono una funzionalità di JavaScript che consente di creare stringhe multilinea e interpolare variabili all'interno di stringhe senza concatenazioni. Si utilizzano i backticks () per delimitare i template literals e si inseriscono le variabili utilizzando ${}`.
31. JSON (JavaScript Object Notation) è un formato per lo scambio di dati. In JavaScript, puoi convertire dati da e verso il formato JSON utilizzando JSON.stringify() per convertire oggetti in stringhe JSON e JSON.parse() per convertire stringhe JSON in oggetti JavaScript.
32. Una IIFE (Immediately Invoked Function Expression) è una funzione che viene dichiarata e immediatamente eseguita. Viene spesso utilizzata per evitare la contaminazione dello scope globale, mantenendo le variabili al suo interno locali.
33. I moduli in JavaScript sono unità di codice riutilizzabile che incapsulano funzionalità specifiche. Possono esportare e importare variabili, funzioni o oggetti da un file JavaScript a un altro, aiutando a organizzare il codice in modo modulare e separato.
34. La gestione della compatibilità cross-browser in JavaScript coinvolge l'uso di tecniche come la rilevazione delle funzionalità del browser, l'uso di prefissi per proprietà CSS sperimentali, l'utilizzo di polifill per implementare funzionalità mancanti e il testing su diversi browser.
35. Il BOM (Browser Object Model) è una parte di JavaScript che fornisce metodi e oggetti per interagire con il browser. Include oggetti come window, navigator, location, history, document e altri che consentono di manipolare la finestra del browser, gestire la navigazione e interagire con i documenti web.
36. **InnerHTML** è una proprietà che restituisce o modifica l'HTML interno di un elemento, inclusi tag HTML, mentre **textContent** restituisce o modifica solo il testo all'interno di un elemento, ignorando eventuali tag HTML.
37. LocalStorage e sessionStorage sono oggetti in JavaScript che consentono di memorizzare dati nel browser. Si utilizzano le chiavi per salvare e recuperare dati. localStorage mantiene i dati anche dopo la chiusura del browser, mentre sessionStorage memorizza i dati solo per la durata della sessione.
38. Le arrow functions sono una forma più concisa di definizione delle funzioni in JavaScript. Si dichiarano utilizzando la sintassi () => {} e hanno alcune differenze rispetto alle funzioni tradizionali, come il comportamento del binding di this e la mancanza di un proprio contesto arguments.
39. Il binding in JavaScript si riferisce alla connessione tra una funzione e il suo contesto di esecuzione. Il binding può essere implicito (come con le funzioni normali) o esplicito (come con call(), apply(), o bind()) per definire manualmente il valore di this all'interno di una funzione.
40. **map()**: Crea un nuovo array applicando una funzione a ciascun elemento dell'array originale e restituendo un array con i risultati delle chiamate della funzione.
    **filter()**: Restituisce un nuovo array contenente gli elementi che superano una determinata condizione definita da una funzione di test.
    **reduce()**: Applica una funzione a ciascun elemento dell'array, accumulando i risultati per restituire un singolo valore finale, come la somma di tutti gli elementi o la concatenazione di stringhe.
