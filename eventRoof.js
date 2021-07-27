const $wrapper = document.querySelector("#wrapper");

const total = Number(prompt("숫자를 입력하세여"));
const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "white",
  "pink",
  "blue",
  "black",
  "#527422",
  "#125431",
];
let colorSlice = colors.slice(0, total / 2);
let colorCopy = colorSlice.concat(colorSlice);
let shuffled = [];
let clicked = [];
let completed = [];
let clickable = false;
let startTime;

function shuffle() {
  // 피셔-예이츠 셔플
  for (let i = 0; colorCopy.length > 0; i += 1) {
    const randomIndex = Math.floor(Math.random() * colorCopy.length);
    shuffled = shuffled.concat(colorCopy.splice(randomIndex, 1));
  }
}

function createCard(i) {
  // div.card > div.card-inner > (div.card-front + div.card-back)
  const card = document.createElement("div");
  card.className = "card"; // .card 태그 생성
  const cardInner = document.createElement("div");
  cardInner.className = "card-inner"; // .card-inner 태그 생성
  const cardFront = document.createElement("div");
  cardFront.className = "card-front"; // .card-front 태그 생성
  const cardBack = document.createElement("div");
  cardBack.className = "card-back"; // .card-back 태그 생성
  cardBack.style.backgroundColor = shuffled[i];
  cardInner.appendChild(cardFront);
  cardInner.appendChild(cardBack);
  card.appendChild(cardInner);
  return card;
}

// clicked : [2, 5, 8, 9]
// 태스크큐:
// 백: addEventListener(12),
function onClickCard() {
  if (!clickable || completed.includes(this) || clicked[0] === this) {
    return;
  }
  this.classList.toggle("flipped");
  clicked.push(this);
  if (clicked.length !== 2) {
    return;
  }
  const firstBackColor =
    clicked[0].querySelector(".card-back").style.backgroundColor;
  const secondBackColor =
    clicked[1].querySelector(".card-back").style.backgroundColor;
  if (firstBackColor === secondBackColor) {
    // 두 카드가 같은 카드면
    completed.push(clicked[0]);
    completed.push(clicked[1]);
    clicked = [];
    if (completed.length !== total) {
      return;
    }
    const endTime = new Date();
    setTimeout(() => {
      alert(
        `축하합니다! ${Math.floor((endTime - startTime) / 1000)}초 걸렸습니다`
      );
      resetGame();
    }, 1000);
    return;
  }
  clickable = false;
  setTimeout(() => {
    clicked[0].classList.remove("flipped");
    clicked[1].classList.remove("flipped");
    clicked = [];
    clickable = true;
  }, 500);
}

function startGame() {
  clickable = false;
  shuffle();
  for (let i = 0; i < total; i += 1) {
    const card = createCard(i);
    card.addEventListener("click", onClickCard);
    $wrapper.appendChild(card);
  }

  document.querySelectorAll(".card").forEach((card, index) => {
    // 초반 카드 공개
    setTimeout(() => {
      card.classList.add("flipped");
    }, 1000 + 100 * index);
  });

  setTimeout(() => {
    // 카드 감추기
    document.querySelectorAll(".card").forEach((card) => {
      card.classList.remove("flipped");
    });
    clickable = true;
    startTime = new Date();
  }, 5000);
}
startGame();

function resetGame() {
  $wrapper.innerHTML = "";
  colorCopy = colorSlice.concat(colorSlice);
  shuffled = [];
  completed = [];
  startGame();
}
