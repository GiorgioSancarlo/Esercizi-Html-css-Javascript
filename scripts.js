const mioDiv = document.getElementById("sfondo");

function cambiaColoreSfondo() {
  const coloreCasuale = "#" + Math.floor(Math.random() * 16777215).toString(16);

  sfondo.style.backgroundColor = coloreCasuale;
}
function cambiaTesto() {
  const testoAggiuntivo = " e sto aggiungendo altro testo.";
  mioDiv.textContent += testoAggiuntivo;
}
function cambiaStile() {
  sfondo.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);

  mioDiv.addEventListener("mouseover", cambiaStile);
}

const mioDiv2 = document.getElementById("contenitore");
const elementInput1 = document.getElementById("input1");
function aggiungiParagrafo() {
  const nuovoParagrafo = document.createElement("p");
  nuovoParagrafo.textContent = elementInput1.value;
  const paragrafoAggiuntivo = " nuovo paragrafo.";
  elementInput1.textContent += paragrafoAggiuntivo;
  const secondoParagrafo = document.getElementsByTagName("p")[1];
  contenitore.insertBefore(nuovoParagrafo, secondoParagrafo);
}

function rimuoviParagrafo() {
  const paragrafoDaRimuovere = document.getElementsByTagName("p")[0];

  paragrafoDaRimuovere.parentNode.removeChild(paragrafoDaRimuovere);
}
function mostraNascondi() {
  const paragrafo = document.getElementById("par1");
  if (paragrafo.style.display === "none") {
    paragrafo.style.display = "block";
  } else {
    paragrafo.style.display = "none";
  }
}
function cambiaTesto() {
  const elemento = document.getElementById("par2");
  elemento.innerHTML = "Io sono tuo padre";
}
function cambiaDimensione() {
  const immagine = document.getElementById("imgg2");

  if (immagine.width === "200px") {
    immagine.width = "300px";
    immagine.height = "200px";
  } else {
    immagine.width = "200px";
    immagine.height = "150px";
  }
}
function mostraAlert() {
  alert(
    "Hai vinto un iphone, ma per sbloccare la vincita dovrai prima inviare 500 euro per dimostrare che non sei un robot"
  );
}

const items = document.querySelectorAll("#lista li");

items.forEach(function (item) {
  item.addEventListener("mouseover", function () {
    this.style.backgroundColor = "#1bd518";
  });

  item.addEventListener("mouseout", function () {
    this.style.backgroundColor = "";
  });
});

function aggiungiElementoLista() {
  const valoreInput = document.getElementById("barraInput").value;

  if (valoreInput !== "") {
    const nuovoElemento = document.createElement("li");

    nuovoElemento.appendChild(document.createTextNode(valoreInput));

    // Aggiungi il nuovo elemento alla lista esistente
    document.getElementById("lista").appendChild(nuovoElemento);

    // Resetta il campo di input dopo l'aggiunta dell'elemento
    document.getElementById("elementoInput").value = "";
  }
}
// Seleziona il bottone e il campo del conteggio
let bottone4 = document.getElementById("bottone4");
let conteggioSpan = document.getElementById("conteggio");

// Inizializza il conteggio a 0
let conteggio = 0;
function aumentaValore() {
  conteggio++;

  conteggioSpan.textContent = conteggio;
}
bottone4.addEventListener("click", aumentaValore);

const selettoreMenu = document.getElementById("selettoreMenu");
const contenuti = {
  opzione1: document.getElementById("contenutoOpzione1"),
  opzione2: document.getElementById("contenutoOpzione2"),
  opzione3: document.getElementById("contenutoOpzione3"),
};

selettoreMenu.addEventListener("change", function () {
  Object.keys(contenuti).forEach(function (key) {
    contenuti[key].style.display = "none";
  });

  var opzioneSelezionata = this.value;
  contenuti[opzioneSelezionata].style.display = "block";
});
