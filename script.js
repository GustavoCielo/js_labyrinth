let row = 180;
let col = 0;

const map = [
  "#####################",
  "#   #     #     # # #",
  "# # # ### ##### # # #",
  "# # #   #     # #   #",
  "# ####### # ### # # #",
  "#         #     # # #",
  "# ### ##### ##### # #",
  "# #   #   # #     # #",
  "# ##### # # # ### # F",
  "@     # # # # # # ###",
  "##### # # # # # # # #",
  "#     # # #   # # # #",
  "# ####### ##### # # #",
  "#       #       #   #",
  "#####################",
];

const labSelector = document.getElementById("lab");
const generateLab = () => {
  for (let i = 0; i < map.length; i++) {
    let divCol = document.createElement("div");
    divCol.classList.add("col");
    labSelector.appendChild(divCol);
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === "#") {
        let divRow = document.createElement("div");
        divRow.classList.add("wall");
        divCol.appendChild(divRow);
      } else if (map[i][j] === " ") {
        let divRow = document.createElement("div");
        divRow.classList.add("space");
        divCol.appendChild(divRow);
      } else if (map[i][j] === "@") {
        let divStart = document.createElement("div");
        divStart.classList.add("start");
        divCol.appendChild(divStart);
        let char = document.createElement("div");
        char.id = "mainChar";
        char.innerText = "@";
        divStart.appendChild(char);
      } else {
        let finishLine = document.createElement("div");
        finishLine.classList.add("finish");
        divCol.appendChild(finishLine);
      }
    }
  }
};
generateLab();

document.addEventListener("keyup", (event) => {
  let keyName = event.key;
  let char = document.getElementById("mainChar");
  if (keyName === "ArrowRight") {
    moveRight();
  }
  if (keyName === "ArrowLeft") {
    moveLeft();
  }
  if (keyName === "ArrowUp") {
    let moveUp =
      char.parentElement.parentNode.previousSibling.firstChild.nextSibling;
    if (moveUp.className === "space") {
      moveUp.appendChild(char);
    }
  }
  if (keyName === "ArrowDown") {
    let moveDown =
      char.parentElement.parentNode.nextSibling.firstChild.nextSibling;
    if (moveDown.className === "space") {
      moveDown.appendChild(char);
    }
  }
});

document.getElementById("startOver").addEventListener("click", (event) => {
  labSelector.innerText = "";
  generateLab();
});

const moveRight = () => {
  let char = document.getElementById("mainChar");
  let moveRight = char.parentElement.nextSibling;
  if (moveRight.className === "space" || moveRight.className === "finish") {
    moveRight.appendChild(char);
  }
};

const moveLeft = () => {
  let char = document.getElementById("mainChar");
  let moveLeft = char.parentElement.previousSibling;
  if (moveLeft.className === "space" || moveLeft.className === "start") {
    moveLeft.appendChild(char);
  }
};

//21 por 15
//parentElement
//previousSibling
