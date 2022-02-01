const items = {
    sizeControl: document.querySelector("#font-size-control"),
    text: document.querySelector("#text"),
}

const sizeChange = (event) => items.text.style.fontSize = `${event.currentTarget.value}px`;

items.sizeControl.addEventListener("input", sizeChange);