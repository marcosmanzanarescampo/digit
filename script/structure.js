// const screenCase = []; //type 1 to 5
const root = document.documentElement;
const caseHeight = getComputedStyle(root)
  .getPropertyValue("--caseHeight")
  .trim();

const caseWidth = getComputedStyle(root).getPropertyValue("--caseWidth").trim();

const segmentSeparation = getComputedStyle(root)
  .getPropertyValue("--segmentSeparation")
  .trim();

// console.log(segmentSeparation);

// const segmentWidth = getComputedStyle(root)
//   .getPropertyValue("--segmentWidth")
//   .trim();
const segmentWidth = caseWidth / 4;

const segmentHeight = segmentWidth;

// const segmentColor = getComputedStyle(root)
//   .getPropertyValue("--segmentColor")
//   .trim();

const segmentType = {
  A: {
    //aucun segment
    x: 0,
    y: 0,
    width: 0,
    heigh: 0,
  },
  B: {
    //segment inferieur /
    x: caseWidth / 2 - segmentWidth / 2,
    y: 0,
    width: segmentWidth,
    height: caseHeight / 2 - segmentSeparation,
  },
  C: {
    //segment superieur /
    x: caseWidth / 2 - segmentWidth / 2,
    y: caseHeight / 2 + segmentSeparation / 2,
    width: segmentWidth,
    height: caseHeight / 2 - segmentSeparation / 2,
  },
  D: {
    //segment gauche /
    x: 0,
    y: caseHeight / 2 - segmentHeight / 2 - 7,
    width: caseWidth / 2 - segmentSeparation / 2,
    height: segmentHeight,
  },
  E: {
    //segment droit /
    x: caseWidth / 2 + segmentSeparation / 2 + 10,
    y: caseHeight / 2 - segmentHeight / 2 - 7,
    width: caseWidth / 2 - segmentSeparation / 2,
    height: segmentHeight,
  },
};

const carte = {
  1: {
    image: "1.jpg",
    structure: [
      "A",
      "A",
      "C",
      "A",
      "A",
      "A",
      "A",
      "BC",
      "A",
      "A",
      "A",
      "A",
      "BC",
      "A",
      "A",
      "A",
      "A",
      "BC",
      "A",
      "A",
      "A",
      "A",
      "BC",
      "A",
      "A",
      "A",
      "A",
      "B",
      "A",
      "A",
    ],
    voisins: [2, 3, 4],
  },
  2: {
    image: "2.jpg",
    structure: [
      "A",
      "A",
      "C",
      "A",
      "A",
      "A",
      "A",
      "BC",
      "A",
      "A",
      "A",
      "A",
      "BC",
      "A",
      "A",
      "A",
      "A",
      "BC",
      "A",
      "A",
      "A",
      "A",
      "BE",
      "D",
      "A",
      "A",
      "A",
      "A",
      "A",
      "A",
    ],
    voisins: [1, 3, 4],
  },
  3: {
    image: "3.jpg",
    structure: [
      "",
      "",
      "C",
      "",
      "",
      "",
      "",
      "BC",
      "",
      "",
      "",
      "",
      "BC",
      "",
      "",
      "",
      "",
      "BCE",
      "D",
      "",
      "",
      "",
      "B",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    voisins: [1, 2, 4],
  },
  4: {
    image: "4.jpg",
    structure: [
      "",
      "",
      "C",
      "",
      "",
      "",
      "",
      "BC",
      "",
      "",
      "",
      "",
      "BCE",
      "D",
      "",
      "",
      "",
      "BC",
      "",
      "",
      "",
      "",
      "B",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    voisins: [1, 2, 3],
  },
};

//
// N: {
// image : 'N.jpg',
// structure: [
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
// ],
//   voisins: []
// },
