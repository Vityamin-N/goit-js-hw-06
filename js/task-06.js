const input = document.querySelector("#validation-input");

const inputBlur = (event) => {
    const inputLength = event.currentTarget.value.length;
    const requiredLength = input.dataset.length;
    const isValid = requiredLength <= inputLength;

    isValid
    ? changeClass("valid", "invalid")
    : changeClass("invalid", "valid");
}

function changeClass(newClass, oldClass){
    input.classList.add(newClass);
    input.classList.remove(oldClass);
}

input.addEventListener("blur", inputBlur);