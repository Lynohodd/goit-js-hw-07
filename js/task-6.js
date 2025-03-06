function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const control = document.querySelector('#controls');
const input = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

console.log(btnCreate);
console.log(btnDestroy);

btnCreate.addEventListener('click', createBoxes);

function createBoxes(amount) {
  amount = input.value;
  boxes.innerHTML = '<div id="boxes"></div>';
  let startSize = 30;

  if (amount >= 1 && amount <= 100) {
    for (let i = 1; i <= amount; i++) {
      const box = document.createElement('div');
      boxes.append(box);

      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${startSize}px`;
      box.style.height = `${startSize}px`;
      startSize += 10;
    }
  }

  input.value = '';
}

btnDestroy.addEventListener('click', () => {
  boxes.innerHTML = '<div id="boxes"></div>';
});
