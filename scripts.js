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
