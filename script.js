let row = 9;
let col = 0;
const labSelector = document.getElementById("lab");
let char = document.getElementById("mainChar");
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
  if (keyName === "ArrowRight") {
    moveRight();
  }
  if (keyName === "ArrowLeft") {
    moveLeft();
  }
  if (keyName === "ArrowUp") {
    moveUp();
  }
  if (keyName === "ArrowDown") {
    moveDown();
  }
});

document.getElementById("startOver").addEventListener("click", () => {
  labSelector.innerText = "";
  generateLab();
  row = 9;
  col = 0;
});

const moveRight = () => {
  let char = document.getElementById("mainChar");
  let moveRight = char.parentElement.nextSibling;
  if (moveRight.className === "space" || moveRight.className === "finish") {
    moveRight.appendChild(char);
    col += 1;
  }
  if (moveRight.className === "finish") {
    let h1 = document.createElement("h1");
    h1.innerText = `Vitória`;
    labSelector.appendChild(h1);
  }
};

const moveLeft = () => {
  let char = document.getElementById("mainChar");
  let moveLeft = char.parentElement.previousSibling;
  if (moveLeft.className === "space" || moveLeft.className === "start") {
    moveLeft.appendChild(char);
    col -= 1;
  }
};

const moveUp = () => {
  let char = document.getElementById("mainChar");
  let moveUp = char.parentElement.parentElement.previousSibling.children.item(
    col
  );
  if (moveUp.className === "space") {
    moveUp.appendChild(char);
    row -= 1;
  }
};

const moveDown = () => {
  let char = document.getElementById("mainChar");
  let moveDown = char.parentElement.parentElement.nextSibling.children.item(
    col
  );
  if (moveDown.className === "space") {
    moveDown.appendChild(char);
    row += 1;
  }
};
