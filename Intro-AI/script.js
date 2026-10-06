const changeBackgroundButton = document.getElementById('change-background-button');

function randomLightColor() {
  const red = Math.floor(Math.random() * 76) + 180;
  const green = Math.floor(Math.random() * 76) + 180;
  const blue = Math.floor(Math.random() * 76) + 180;

  return `rgb(${red}, ${green}, ${blue})`;
}

changeBackgroundButton.addEventListener('click', () => {
  document.body.style.backgroundColor = randomLightColor();
});
