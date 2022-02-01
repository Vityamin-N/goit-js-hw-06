let counterValue = 0;
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
    counterValue += 1;
    actions.value.textContent = counterValue;
});
actions.decrButton.addEventListener("click", () => {
    counterValue -= 1;
    actions.value.textContent = counterValue;
});