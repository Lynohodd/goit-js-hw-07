function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');
const body = document.querySelector('body');
const color = document.querySelector('.color');

body.addEventListener('click', () => {
  color.style.color = getRandomHexColor();
  body.style.backgroundColor = color.style.color;
});
