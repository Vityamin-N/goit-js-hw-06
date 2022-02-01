function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const items = {
  control: document.querySelector("#controls input"),
  createButton: document.querySelector("[data-create]"),
  destroyButton: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

const createBoxes = (amount) => {
  let size = 30;
  const boxArray = [];
  for(let i = 0; i < amount; i += 1){
    const boxElement = document.createElement("div");
    boxElement.style.width = `${size}px`;
    boxElement.style.height = `${size}px`;
    boxElement.style.backgroundColor = getRandomHexColor();
    size += 10;
    boxArray.push(boxElement);
  }
  items.boxes.append(...boxArray);
};

const destroyBoxes = () => items.boxes.innerHTML = "";
const clickCreate = () => {
  if(items.control.value) {
    createBoxes(items.control.value);
    items.control.value = "";
  }
};

items.createButton.addEventListener("click", clickCreate);
items.destroyButton.addEventListener("click", destroyBoxes);