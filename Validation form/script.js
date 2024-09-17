const form = document.getElementById("form"); // Add form reference
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const Cpassword = document.getElementById("confirm-password");

const submit = document.getElementById("btn");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInput();
});

const validateInput = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passVal = password.value.trim();
    const cPassVal = Cpassword.value.trim();

    //username validation
    if (usernameVal === '') {
        setError(username, "Username is required");
    } else {
        setSuccess(username); // Pass element to setSuccess
    }

    //email validation
    if(emailVal===''){
        setError(email,'email is required');
    }
    else if(!isValidEmail(emailVal)){
        setError(email,'email is not valid');
    }
    else{
        setSuccess(email);
    }

    //password validation
    if(passVal===''){
        setError(password,'password is required')
    }
    else{
        setSuccess(password)
    }

    //confirm password
    if(Cpassword==''){
        setError(Cpassword,'confirm the password');
    }
    else if(Cpassword!=password){
        setError(Cpassword,'password does not match')
    }
    else{
        setSuccess(Cpassword);
    }

};

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
};

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = ''; // Clear any error message
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
};

function isValidEmail(e){
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(e);

}