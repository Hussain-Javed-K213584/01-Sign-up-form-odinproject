// This code will prevent form submission if passwords are not the same

const formObject = document.getElementById("signup-form");
const errorText = document.querySelectorAll(".error");
formObject.addEventListener('submit', (e) => {
    console.log(formObject.elements['password'].textContent);
    if (formObject.elements['password'] != formObject.elements['confirm_password']){
        e.preventDefault();
        formObject.elements['password'].style.border = "1px solid red";
        formObject.elements['confirm_password'].style.border = "1px solid red";
        errorText.forEach((para) => {
            para.textContent = "(*)Passwords do not match";
            para.style.color = "red";
        })
    }
});