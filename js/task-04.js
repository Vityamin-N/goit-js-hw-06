let valueCounter = 0;
const actions = {
    decrButton: document.querySelector("[data-action=decrement]"),
    incrButton: document.querySelector("[data-action=increment]"),
    value: document.querySelector("#value"),
};
// const incrementalClick = () => {
//     valueCounter += 1;
//     actions.value.textContent = valueCounter;
// }
// const decrementalClick = () => {
//     valueCounter -= 1;
//     actions.value.textContent = valueCounter;
// }

actions.incrButton.addEventListener("click", () => {
    valueCounter += 1;
    actions.value.textContent = valueCounter;
});
actions.decrButton.addEventListener("click", () => {
    valueCounter -= 1;
    actions.value.textContent = valueCounter;
});