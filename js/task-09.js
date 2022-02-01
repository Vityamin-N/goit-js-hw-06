function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const items = {
  button: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
  body: document.body,
};

const colorChange = () => {
  const backgroundColorChange = getRandomHexColor();
  items.span.textContent = backgroundColorChange;
  items.body.style.backgroundColor = backgroundColorChange;
};
items.button.addEventListener("click", colorChange);