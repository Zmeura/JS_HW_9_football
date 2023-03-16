let field = document.querySelector(".field");
let ball = document.querySelector(".ball");
let goal1 = document.querySelector(".goal1");
let goal2 = document.querySelector(".goal2");
let teamScore1 = document.querySelector(".teamScore1");
let teamScore2 = document.querySelector(".teamScore2");
let teamName1 = document.querySelector(".teamName1");
let teamName2 = document.querySelector(".teamName2");

let counterForteamScore1 = 0;
let counterForteamScore2 = 0;

field.addEventListener("dragover", preventDefault);
field.addEventListener("drop", dropBallToField);
goal1.addEventListener("drop", getCountValue);
goal2.addEventListener("drop", getCountValue);

function preventDefault(e) {
  e.preventDefault();
}

function dropBallToField(e) {
  ball.style.left = e.clientX - e.currentTarget.offsetLeft - 10 + "px";
  ball.style.top = e.clientY - e.currentTarget.offsetTop - 10 + "px";

  this.appendChild(ball);
}

function getCountValue(e) {
  if (e.target.dataset.name == "goal1") {
    counterForteamScore1 += 1;
    teamScore1.innerHTML = counterForteamScore1;
  } else if (e.target.dataset.name == "goal2") {
    counterForteamScore2 += 1;
    teamScore2.innerHTML = counterForteamScore2;
  }
  colorWinCount();
}

function colorWinCount() {
  if (counterForteamScore1 > counterForteamScore2) {
    teamName1.classList.add("goalCounter");
  } else if (counterForteamScore1 < counterForteamScore2) {
    teamName2.classList.add("goalCounter");
  } else {
    teamName1.classList.remove("goalCounter");
    teamName2.classList.remove("goalCounter");
  }
}
