const items = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output"),
}
items.input.addEventListener("input", (event) => {
    items.output.textContent = event.currentTarget.value
    ? event.currentTarget.value
    : "Anonymous";
});