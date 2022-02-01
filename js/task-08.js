const form = document.querySelector(".login-form");

const formSubmit = (event) => {
    event.preventDefault();
    const {email, password} = event.currentTarget;
    if(email.value || password.value){
        const formData = {};
        for(const {name, value} of event.currentTarget.elements){
            if(name){
                formData[name] = value;
            }
        }
        console.log(formData);
        event.currentTarget.reset();
    } else alert("Все поля должны быть заполнены");
};
form.addEventListener("submit", formSubmit);