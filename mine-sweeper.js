const $tbody = document.querySelector("#table tbody");
const $result = document.querySelector("#result");
const $timer = document.querySelector("#timer");
let row; //줄
let cell; // 칸
let mine;
const $from = document.querySelector("#form");

const CODE = {
  NORMAL: -1, // 닫힌 칸(지뢰 없음)
  QUESTION: -2,
  FLAG: -3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  MINE: -6,
  OPENED: 0, // 0 이상이면 다모두 열린 칸
};

let data;
let startTime;
let opencount = 0;
let interval;

let normalCellFound = false;

let searched;
let fristClick = true;

function plantMine() {
  const candidata = Array(row * cell)
    .fill()
    .map((arr, i) => {
      return i;
    });

  const shuffle = [];
  while (candidata.length > row * cell - mine) {
    const random = candidata.splice(
      Math.floor(Math.random() * candidata.length),
      1
    )[0];
    shuffle.push(random);
  }

  const data = [];
  for (let i = 0; i < row; i++) {
    const rowData = [];
    for (let j = 0; j < cell; j++) {
      rowData.push(CODE.NORMAL);
    }
    data.push(rowData);
  }

  for (let k = 0; k < shuffle.length; k++) {
    const ver = Math.floor(shuffle[k] / cell);
    const hor = shuffle[k] % cell;
    data[ver][hor] = CODE.MINE;
  }

  return data;
}

function omSubmit(event) {
  event.preventDefault();
  row = parseInt(event.target.row.value);
  cell = parseInt(event.target.cell.value);
  mine = parseInt(event.target.mine.value);
  opencount = 0;
  $tbody.innerHTML = "";
  drawTable();
  startTime = new Date();
  interval = setInterval(() => {
    const time = Math.floor((new Date() - startTime) / 1000);
    $timer.textContent = `${time}초`;
  }, 1000);
}
$from.addEventListener("submit", omSubmit);

function onRightClick(event) {
  event.preventDefault();
  const target = event.target;
  const rowIndex = target.parentNode.rowIndex;
  const cellIndex = target.cellIndex;
  const cellData = data[rowIndex][cellIndex];

  if (cellData === CODE.MINE) {
    // 지뢰면
    data[rowIndex][cellIndex] = CODE.QUESTION_MINE; // 물음표 지뢰로
    target.className = "question";
    target.textContent = "?";
  } else if (cellData === CODE.QUESTION_MINE) {
    //물은표 지뢰면
    data[rowIndex][cellIndex] = CODE.FLAG_MINE; //깃발지뢰로
    target.className = "flag";
    target.textContent = "!";
  } else if (cellData === CODE.FLAG_MINE) {
    //깃발 지뢰면
    data[rowIndex][cellIndex] = CODE.MINE; // 지뢰로
    target.className = "";
    target.textContent = "";
  } else if (cellData === CODE.NORMAL) {
    //닫힌칸이면
    data[rowIndex][cellIndex] = CODE.QUESTION; // 물은표로
    target.className = "question";
    target.textContent = "?";
  } else if (cellData === CODE.QUESTION) {
    //지뢰없는  물음표면
    data[rowIndex][cellIndex] = CODE.FLAG; // 깃발로
    target.className = "flag";
    target.textContent = "!";
  } else if (cellData === CODE.FLAG) {
    //지뢰없는 깃발이면
    data[rowIndex][cellIndex] = CODE.NORMAL; // 지회없는같으로
    target.className = "";
    target.textContent = "";
  }
}

function open(rowIndex, cellIndex) {
  if (data[rowIndex]?.[cellIndex] >= CODE.OPENED) return;
  // console.log(rowIndex, cellIndex);
  const target = $tbody.children[rowIndex]?.children[cellIndex];
  if (!target) {
    return;
  }
  const count = countMine(rowIndex, cellIndex);
  // target.textContent = count || ""; //count 가 falsse면 뒤에 실행 true면 앞에 실행
  target.textContent = count ?? ""; //count 가 null', undefined 면앞에 실행 아니면 앞에 실행
  target.className = "opened";
  data[rowIndex][cellIndex] = count;
  opencount++;
  if (opencount == row * cell - mine) {
    const endTime = new Date();
    clearInterval(interval);
    $tbody.removeEventListener("contextmenu", onRightClick);
    $tbody.removeEventListener("click", onLeftClick);
    setTimeout(() => {
      alert(`${(endTime - startTime) / 1000}초 걸렸습니다.`);
    }, 500);
  }
  return count;
}

function openAruond(rI, cI) {
  setTimeout(() => {
    const count = open(rI, cI);
    if (count === 0) {
      openAruond(rI - 1, cI - 1);
      openAruond(rI - 1, cI);
      openAruond(rI - 1, cI + 1);
      openAruond(rI, cI - 1);
      openAruond(rI, cI + 1);
      openAruond(rI + 1, cI - 1);
      openAruond(rI + 1, cI);
      openAruond(rI + 1, cI + 1);
    }
  }, 0);
}

function countMine(rowIndex, cellIndex) {
  const mines = [CODE.MINE, CODE.QUESTION_MINE, CODE.FLAG_MINE];
  let i = 0;
  mines.includes(data[rowIndex - 1]?.[cellIndex - 1]) && i++;
  mines.includes(data[rowIndex - 1]?.[cellIndex]) && i++;
  mines.includes(data[rowIndex - 1]?.[cellIndex + 1]) && i++;
  mines.includes(data[rowIndex][cellIndex - 1]) && i++;
  mines.includes(data[rowIndex][cellIndex + 1]) && i++;
  mines.includes(data[rowIndex + 1]?.[cellIndex - 1]) && i++;
  mines.includes(data[rowIndex + 1]?.[cellIndex]) && i++;
  mines.includes(data[rowIndex + 1]?.[cellIndex + 1]) && i++;
  return i;
}

function transMine(rI, cI) {
  if (normalCellFound) return; // 이미 빈칸을 찾았으면 종료
  if (rI < 0 || rI >= row || cI < 0 || cI >= cell) return;
  if (searched[rI][cI]) return; // 이미 찾은 칸이면 종료
  if (data[rI][cI] === CODE.NORMAL) {
    // 빈칸인 경우
    normalCellFound = true;
    data[rI][cI] = CODE.MINE;
  } else {
    // 지뢰 칸인 경우 8방향 탐색
    searched[rI][cI] = true;
    transMine(rI - 1, cI - 1);
    transMine(rI - 1, cI);
    transMine(rI - 1, cI + 1);
    transMine(rI, cI - 1);
    transMine(rI, cI + 1);
    transMine(rI + 1, cI - 1);
    transMine(rI + 1, cI);
    transMine(rI + 1, cI + 1);
  }
}

function onLeftClick(event) {
  event.preventDefault();
  const target = event.target;
  const rowIndex = target.parentNode.rowIndex;
  const cellIndex = target.cellIndex;
  let cellData = data[rowIndex][cellIndex];

  if (fristClick) {
    fristClick = false;
    searched = Array(row)
      .fill()
      .map(() => []);
    if (cellData === CODE.MINE) {
      transMine(rowIndex, cellIndex);
      data[rowIndex][cellIndex] = CODE.NORMAL;
      cellData = CODE.NORMAL;
    }
  }

  if (cellData === CODE.NORMAL) {
    // 닫힌칸이면
    openAruond(rowIndex, cellIndex);
    // open(rowIndex, cellIndex);
  } else if (cellData === CODE.MINE) {
    // 끝
    clearInterval(interval);
    //나머지는무시
    target.textContent = "펑";
    target.className = "opened";
    $tbody.removeEventListener("contextmenu", onRightClick);
    $tbody.removeEventListener("click", onLeftClick);
  }

  // if (cellData === CODE.QUESTION || cellData === CODE.QUESTION_MINE) {
  //   return;
  // }
  // if (cellData === CODE.FLAG || cellData === CODE.FLAG_MINE) {
  //   return;
  // }
  // if (cellData === CODE.MINE) {
  //   alert("게임종료");
  //   reset();
  // }else {

  // }
}

function drawTable() {
  data = plantMine();

  data.forEach((row) => {
    const $tr = document.createElement("tr");
    row.forEach((cell) => {
      const $td = document.createElement("td");
      if (cell === CODE.MINE) {
        $td.textContent = "X"; // 개발용 코드
      }
      $tr.append($td);
    });
    $tbody.append($tr);
    $tbody.addEventListener("contextmenu", onRightClick);
    $tbody.addEventListener("click", onLeftClick);
  });
}
