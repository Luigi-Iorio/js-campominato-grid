"use strict";

/*
FUNZIONI
*/

// per creare la cella all'interno del container
function creazioneCella(tag, nomeClasse, contenuto) {
  const cella = document.createElement(tag);
  cella.classList.add(nomeClasse);
  cella.append(contenuto);

  return cella;
}

function clickCella(nomeClasse, stampaConsole) {
  creazioneCella("div").classList.add(nomeClasse);
  console.log(stampaConsole);
}

/*
PROGRAMMA
*/

// variabile per il bottone
const bottonePlay = document.querySelector(".play");

// evento al click del bottone
bottonePlay.addEventListener("click", function () {
  // variabile per il titolo
  const titolo = document.querySelector("h2");
  titolo.classList.add("display-none");

  // variabile per il container
  const container = document.querySelector(".container");
  container.classList.remove("opacity-0");
  container.classList.add("opacity-1");

  // per creare celle dinamicamente e assegnazione numero alle celle
  for (let i = 1; i <= 100; i++) {
    const elementoCella = creazioneCella("div", "cella", i);
    container.append(elementoCella);

    elementoCella.addEventListener("click", function () {
      clickCella("active", `La cella cliccata è la numero: ${i}`);
    });
  }
});
