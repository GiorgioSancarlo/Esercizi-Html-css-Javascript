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
