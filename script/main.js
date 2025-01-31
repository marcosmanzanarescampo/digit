const tableNumberOfCases = 30;
const numCartesMain = 4;
let selectedCard = 1;
const numCardsJeu = 4;

const commencerMain = function () {
  const main1 = document.querySelector("#main1");
  const main2 = document.querySelector("#main2");
  const main3 = document.querySelector("#main3");
  const main4 = document.querySelector("#main4");

  const main = [main1, main2, main3, main4];

  for (let index = 0; index < numCartesMain; index++) {
    main[index].style.backgroundImage = `url('assets/${index + 1}.jpg')`;
    // on utilise la propieté alt pour stocker la carte monstrée
    main[index].alt = index + 1;
    main[index].addEventListener("click", (event) => {
      if (getNeighbours(selectedCard).includes(parseInt(event.target.alt))) {
        // c'est une reusite
        console.log("reusite");
        selectedCard = event.target.alt;
        drawFigure(parseInt(event.target.alt));

        // updateCard();
      } else {
        // C'est une défaite
        console.log("échoué");
      }
    });
  }
};

const piocher = function () {
  updateCard();
};

const init = function () {
  const divShow = document.querySelector(".divShow");
  const card = document.querySelector(".structureCarte");
  const imageContainer = document.querySelector(".imageCarte");
  const image = document.createElement("img");
  const root = document.documentElement; // Sélectionne l'élément racine
  const computedStyle = getComputedStyle(root); // Obtient les styles calculés
  const caseWidth = computedStyle.getPropertyValue("--caseWidth").trim(); // Récupère la variable CSS
  const caseHeight = computedStyle.getPropertyValue("--caseHeight").trim(); // Récupère la variable CSS
  const pioche = document.querySelector("#pioche");

  // console.log("init");

  for (let index = 0; index < tableNumberOfCases; index++) {
    const cardCell = document.createElement("canvas");

    cardCell.width = `${caseWidth}`;
    cardCell.height = `${caseHeight}`;

    cardCell.className = "canvas";
    cardCell.id = "cell" + index;

    card.append(cardCell);
  }
  image.id = "image";
  imageContainer.append(image);

  commencerMain();
  piocher();

  pioche.addEventListener("click", piocher);
};

const getCard = function (c) {
  return carte[c].structure;
};

const getNeighbours = function (c) {
  return carte[c].voisins;
};

const getImage = function (c) {
  return carte[c].image;
};

const updateCard = function () {
  const newCard = Math.floor(Math.random() * numCardsJeu) + 1;

  selectedCard = newCard;
  drawFigure(newCard);
};

const drawFigure = function (carte) {
  const cardDesign = getCard(carte);
  const image = document.querySelector("#image");
  image.src = "assets/" + getImage(carte);

  const segmentColor = getComputedStyle(root)
    .getPropertyValue("--segmentColor")
    .trim();

  for (let index = 0; index < tableNumberOfCases; index++) {
    const cardCell = document.querySelector(`#cell${index}`);
    context = cardCell.getContext("2d");
    context.clearRect(0, 0, caseWidth, caseHeight);
    context.fillStyle = "gold"; //segmentColor;
    const pattern = cardDesign[index];

    pattern.split("").forEach((elem) => {
      switch (elem) {
        case "A":
          break;
        case "B":
          context.fillRect(
            segmentType.B.x,
            segmentType.B.y,
            segmentType.B.width,
            segmentType.B.height,
          );
          break;
        case "C":
          context.fillRect(
            segmentType.C.x,
            segmentType.C.y,
            segmentType.C.width,
            segmentType.C.height,
          );
          break;
        case "D":
          context.fillRect(
            segmentType.D.x,
            segmentType.D.y,
            segmentType.D.width,
            segmentType.D.height,
          );
          break;
        case "E":
          context.fillRect(
            segmentType.E.x,
            segmentType.E.y,
            segmentType.E.width,
            segmentType.E.height,
          );
          break;
      }
    });
  }
};

// Entrée ppal.

init();
