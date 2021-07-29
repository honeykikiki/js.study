const $table = document.querySelector("#table");
const $score = document.querySelector("#score");
const $back = document.getElementById("back");
let data = [];
const history = [];

$back.addEventListener("click", () => {
  const prevData = history.pop();
  if (!prevData) return; // 되돌릴 게 없으면 종료
  $score.textContent = prevData.score;
  data = prevData.table;
  draw();
});

function startGame() {
  const $fragment = document.createDocumentFragment();
  [1, 2, 3, 4].forEach(() => {
    let rowData = [];
    data.push(rowData);
    const $tr = document.createElement("tr");
    [1, 2, 3, 4].forEach(() => {
      rowData.push(0);
      const $td = document.createElement("td");
      $tr.appendChild($td);
    });
    $fragment.appendChild($tr);
  });
  $table.appendChild($fragment);
  put2ToRandomCell();
  draw();
}

function put2ToRandomCell() {
  const emptyCells = []; // [[i1, j1], [i2, j2], [i3, j3]]
  data.forEach(function (rowData, i) {
    // console.log(rowData);
    // console.log(i);
    rowData.forEach(function (cellData, j) {
      // console.log(cellData);
      // console.log(j);
      if (!cellData) {
        emptyCells.push([i, j]);
        // console.log(i, j);
      }
    });
  });
  // randomCell === [i, j];
  const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  // console.log(randomCell);
  data[randomCell[0]][randomCell[1]] = 2;
  // data[0][0] = 2;
}

function draw() {
  data.forEach(function (rowData, i) {
    rowData.forEach(function (cellData, j) {
      // console.log(rowData, cellData);
      // console.log(i, j);
      const $target = $table.children[i].children[j];
      if (cellData > 0) {
        $target.textContent = cellData;
        $target.className = "color-" + cellData;
      } else {
        $target.textContent = "";
        $target.className = "";
      }
    });
  });
}
startGame();

// data = [
//   [32, 2, 4, 2],
//   [64, 4, 8, 4],
//   [2, 1024, 1024, 32],
//   [32, 16, 64, 4],
// ];

// draw();

function moveCells(direction) {
  // 데이더 중첩
  history.push({
    table: JSON.parse(JSON.stringify(data)),
    score: $score.textContent,
  });

  switch (direction) {
    case "left": {
      const newData = [[], [], [], []];
      data.forEach((rowData, i) => {
        rowData.forEach((cellData, j) => {
          if (cellData) {
            // newData = [2, 4, 2]
            // console.log(newData[1]);
            const currentRow = newData[i];
            const prevData = currentRow[currentRow.length - 1];
            if (prevData === cellData) {
              // 이전 값과 지금 값이 같으면
              const score = parseInt($score.textContent);
              $score.textContent =
                score + currentRow[currentRow.length - 1] * 2;
              currentRow[currentRow.length - 1] *= -2;
            } else {
              newData[i].push(cellData);
            }
          }
        });
      });
      console.log(newData);
      [1, 2, 3, 4].forEach((rowData, i) => {
        [1, 2, 3, 4].forEach((cellData, j) => {
          data[i][j] = Math.abs(newData[i][j]) || 0;
        });
      });
      draw();
      break;
    }
    case "right": {
      const newData = [[], [], [], []];
      data.forEach((rowData, i) => {
        // console.log(rowData);
        rowData.forEach((cellData, j) => {
          // console.log(rowData[3 - j]);
          // console.log(Boolean(rowData[3 - j]));
          // console.log(rowData[3 - j]);
          if (rowData[3 - j]) {
            // console.log(rowData[3 - j]);
            const currentRow = newData[i];
            const prevData = currentRow[currentRow.length - 1];
            if (prevData === rowData[3 - j]) {
              const score = parseInt($score.textContent);
              $score.textContent =
                score + currentRow[currentRow.length - 1] * 2;
              currentRow[currentRow.length - 1] *= -2;
            } else {
              newData[i].push(rowData[3 - j]);
              // console.log(newData[rowData[3 - j]]);
            }
          }
        });
      });
      // console.log(newData);
      [1, 2, 3, 4].forEach((rowData, i) => {
        [1, 2, 3, 4].forEach((cellData, j) => {
          data[i][3 - j] = Math.abs(newData[i][j]) || 0;
          // console.log(data[i][3 - j]);
        });
      });
      // console.log(data);
      draw();
      break;
    }
    case "up": {
      const newData = [[], [], [], []];
      data.forEach((rowData, i) => {
        rowData.forEach((cellData, j) => {
          // cellData = 8
          // j = 2
          if (cellData) {
            const currentRow = newData[j];
            // console.log(j);
            // console.log(currentRow);
            const prevData = currentRow[currentRow.length - 1];
            if (prevData === cellData) {
              const score = parseInt($score.textContent);
              $score.textContent =
                score + currentRow[currentRow.length - 1] * 2;
              currentRow[currentRow.length - 1] *= -2;
            } else {
              newData[j].push(cellData);
            }
          }
        });
      });
      console.log(newData);
      [1, 2, 3, 4].forEach((rowData, i) => {
        [1, 2, 3, 4].forEach((cellData, j) => {
          data[j][i] = Math.abs(newData[i][j]) || 0;
          // i = 0  j = 0,1,2,3
          // console.log(data[i][3 - j]);
        });
      });
      // console.log(data);
      draw();
      break;
    }
    case "down": {
      const newData = [[], [], [], []];
      data.forEach((rowData, i) => {
        rowData.forEach((cellData, j) => {
          if (data[3 - i][j]) {
            const currentRow = newData[j];
            const prevData = currentRow[currentRow.length - 1];
            if (prevData === data[3 - i][j]) {
              const score = parseInt($score.textContent);
              $score.textContent =
                score + currentRow[currentRow.length - 1] * 2;
              currentRow[currentRow.length - 1] *= -2;
            } else {
              newData[j].push(data[3 - i][j]);
            }
          }
        });
      });
      console.log(newData);
      [1, 2, 3, 4].forEach((cellData, i) => {
        [1, 2, 3, 4].forEach((rowData, j) => {
          data[3 - j][i] = Math.abs(newData[i][j]) || 0;
        });
      });
      // console.log(data);
      draw();
      break;
    }
  }
  if (data.flat().includes(2048)) {
    draw();
    setTimeout(() => {
      alert("승리하였씁니다");
    }, 500);
  } else if (!data.flat().includes(0)) {
    alert("패배하였습니다");
  } else {
    put2ToRandomCell(); // 움직일떄 2만들어주는 함수
    draw();
  }
}

window.addEventListener("keyup", (event) => {
  if (event.key === "ArrowUp") {
    moveCells("up");
  } else if (event.key === "ArrowDown") {
    moveCells("down");
  } else if (event.key === "ArrowLeft") {
    moveCells("left");
  } else if (event.key === "ArrowRight") {
    moveCells("right");
  }
});

let startCoord;
window.addEventListener("mousedown", (event) => {
  startCoord = [event.clientX, event.clientY];
});
window.addEventListener("mouseup", (event) => {
  const endCoord = [event.clientX, event.clientY];
  const diffX = endCoord[0] - startCoord[0];
  const diffY = endCoord[1] - startCoord[1];

  if (diffX < 0 && Math.abs(diffX) > Math.abs(diffY)) {
    moveCells("left");
  } else if (diffX > 0 && Math.abs(diffX) > Math.abs(diffY)) {
    moveCells("right");
  } else if (diffY > 0 && Math.abs(diffX) <= Math.abs(diffY)) {
    moveCells("down");
  } else if (diffY < 0 && Math.abs(diffX) <= Math.abs(diffY)) {
    moveCells("up");
  }
});

let ex = [
  [0, 2, 4, 2],
  [0, 0, 8, 0],
  [2, 2, 4, 8],
  [0, 16, 0, 4],
];

ex.forEach((rowData, i) => {
  rowData.forEach((cellData, j) => {});
});
