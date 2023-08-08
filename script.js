// This code will prevent form submission if passwords are not the same

const formObject = document.getElementById("signup-form");
formObject.serialize
const errorText = document.querySelectorAll(".error");
let wrongPasswordTrigger = false;
formObject.addEventListener('submit', (e) => {
    e.preventDefault();
    let pass = formObject.elements['user_password'].value;
    let conf_pass = formObject.elements['user_confirm_password'].value;
    if (pass != conf_pass){
        e.preventDefault();
        wrongPasswordTrigger = true;
        formObject.elements['password'].style.border = "1px solid red";
        formObject.elements['confirm_password'].style.border = "1px solid red";
        errorText.forEach((para) => {
            para.textContent = "(*)Passwords do not match";
            para.style.color = "red";
        })
    }
    else if(pass == conf_pass && wrongPasswordTrigger){
        wrongPasswordTrigger = false;
        resetFormStyles(formObject);
    }
});

function resetFormStyles(formObj){
    formObj.elements['password'].style.border = "1px solid black";
    formObj.elements['confirm_password'].style.border = "1px solid black";
    errorText.forEach((para) => {
        para.textContent = "";
        para.style.color = "black";
    });
}