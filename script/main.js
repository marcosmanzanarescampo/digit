const tableNumberOfCases = 30;
const numCartesMain = 5;
let selectedCard = 1;
const numCardsJeu = 55

let points = 10; //number initial de points!
const pointsGagnés = 5;
const pointsPerdus = 2;
const pointsPerdusSiPioche = 3;
const pointsPerdusSiTimeOut = 1;

 const maxGameTime = 30; //30 seconds pour réflechir!
 let gameTime = maxGameTime;

let main = [];
let chrono = null;

const TakeCardNumber = function(str){
  const cardNumber = parseInt(str.substring(str.lastIndexOf('/')+1, str.lastIndexOf('.')));
  
  return cardNumber;
}

const getCardPosition = function(str){  
  const cardPosition = str.substring(str.indexOf('n')+1);

  return cardPosition-1;
}

const removeCardMain = function(card){
  card.remove();
}

const showPoints = function(){
  const pointsBox = document.querySelector('.points');
  
  pointsBox.innerText = points;
}


const createCard = function(){
  const numCard = generateCard();
  const card = document.createElement('img');

  card.src = `assets/${numCard}.jpg`;
  card.id = `main${main.length + 1}`;
  
  card.className = 'card';
  card.addEventListener("click", (event) => {    
    const cardImage = event.target.src;

    // console.log(`extraction de la position de la chaine: ${event.target.id}`);    
    const cardPosition = getCardPosition(event.target.id);  
    // console.log(`position réuperée: ${cardPosition}`);
    
    const number = TakeCardNumber(cardImage);

    // const validationCarte = getNeighbours(selectedCard).includes(parseInt(number));  
    const validationCarte = true;

    if (validationCarte) {      
        // c'est une reusite
        //incrementer les points...
        points += pointsGagnés;
        showPoints();
        // on actualise le carte à jouer        
        selectedCard = number;
        drawFigure(number);
        // on remplace la carte par une autre carte de la pioche
        console.log(`eliminando la tarjeta: ${event.target.className}`);             
        removeCardMain(event.target);
        // tester si l'on a plus de cartes dans la main pour finir le jeu
        if(document.querySelector('.cardContainer').firstChild === null){
          // you win!
          document.querySelector('.cardContainer').classList.toggle("UWin");
          //la pioche disparait
          document.querySelector("#pioche").classList.toggle('hidden');
          // le chrono s'arrête
          clearTimeout(chrono);
        }; 
    } else {
        // C'est une défaite
        // console.log("c'est une défaite!");
        // décrementer les points...
        points -= pointsPerdus;
        showPoints();
    }
  });
  
  return card;
}

const commencerMain = function () {
  const cardContainer = document.querySelector('.cardContainer');

  cardContainer.innerHTML = '';

  for (let index = 0; index < numCartesMain; index++) {
    const card = createCard();

    main.push(card);
    cardContainer.append(card);
  }
};

const piocher = function () {
  return generateCard();
};

const timer = function timer(){
  const timerContainer = document.querySelector('.timerContainer');

  timerContainer.innerText = gameTime;

  if(gameTime === 0){
    points -= pointsPerdusSiTimeOut;
    showPoints();
    gameTime = maxGameTime;
  }else{
    gameTime -= 1;
  } 

  if (gameTime<=5){
      timerContainer.classList.toggle('timeOut');
  }
}

const init = function () {
  const divShow = document.querySelector(".divShow");
  const card = document.querySelector(".structureCarte");
  const imageContainer = document.querySelector(".imageCarte");
  const timerContainer = document.querySelector('.timerContainer');
  const image = document.createElement("img");
  const root = document.documentElement; // Sélectionne l'élément racine
  const computedStyle = getComputedStyle(root); // Obtient les styles calculés
  const caseWidth = computedStyle.getPropertyValue("--caseWidth").trim(); // Récupère la variable CSS
  const caseHeight = computedStyle.getPropertyValue("--caseHeight").trim(); // Récupère la variable CSS
  const pioche = document.querySelector("#pioche");

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
  showPoints();

  commencerMain();
  setGameCard();

  pioche.addEventListener("click", event => {
    addCard(generateCard());
    points -= pointsPerdusSiPioche;
    showPoints();
  });
  timerContainer.innerText = gameTime;
  chrono = setInterval(timer, 1000);
};

const setGameCard = function(){
  const gameCard = generateCard();
  selectedCard = gameCard;
  drawFigure(gameCard);
}

const getCard = function (c) {  
  return carte[c].structure;  
};

const getNeighbours = function (c) {
  return carte[c].voisins;
};

const getImage = function (c) {
  return carte[c].image;
};


const generateCard = function (){
  return Math.floor(Math.random() * numCardsJeu) + 1;
};

const addCard = function (c) {
  const cardContainer = document.querySelector('.cardContainer');
  
  cardContainer.append(createCard());  
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
// console.log('start');
init();
// drawFigure(47);
// console.log('end');