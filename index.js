let homeEl = document.getElementById("home-score-element");
let guestEl = document.getElementById("guest-score-element");

let homeScore = 0;
let guestScore = 0;

function add1ToHome() {
  homeScore++;
  homeEl.innerText = homeScore;
}

function add2ToHome() {
  homeScore += 2;
  homeEl.innerText = homeScore;
}

function add3ToHome() {
  homeScore += 3;
  homeEl.innerText = homeScore;
}

function add1ToGuest() {
  guestScore++;
  guestEl.innerText = guestScore;
}

function add2ToGuest() {
  guestScore += 2;
  guestEl.innerText = guestScore;
}

function add3ToGuest() {
  guestScore += 3;
  guestEl.innerText = guestScore;
}

function resetScores() {
  homeScore = 0;
  guestScore = 0;
  homeEl.innerText = homeScore;
  guestEl.innerText = guestScore;
}

console.log(homeEl);
