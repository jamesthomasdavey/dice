const diceTriggerEl = document.querySelector(`.dice__trigger`);
const diceImageEl = document.querySelector(`.dice__image`);

diceTriggerEl.addEventListener(`click`, rollDice);

randomNum = () => {
  return Math.floor(Math.random() * 6) + 1
};

function rollDice() {
  diceImageEl.classList.add(`rotate`);
  setTimeout(function () {
    diceImageEl.classList.remove(`rotate`)
  }, 300);
  setTimeout(function () {
    diceImageEl.src = `assets/images/dice${randomNum()}.png`
  }, 300);
}