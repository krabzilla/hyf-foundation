const button = document.querySelector('button');

function randomLightColor() {
  const red = Math.floor(Math.random() * 76) + 180;
  const green = Math.floor(Math.random() * 76) + 180;
  const blue = Math.floor(Math.random() * 76) + 180;

  return `rgb(${red}, ${green}, ${blue})`;
}

button.addEventListener('click', () => {
  document.body.style.backgroundColor = randomLightColor();
});
