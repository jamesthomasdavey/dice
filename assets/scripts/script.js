const diceTriggerEl = document.querySelector(`.dice__trigger`);
const diceImageEl = document.querySelector(`.dice__image`);

diceTriggerEl.addEventListener(`click`, rollDice);

function rollDice() {
  let randomNum = Math.floor(Math.random() * 6) + 1;
  diceImageEl.src = `assets/images/dice${randomNum}.png`;
}