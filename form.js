const loginForm = document.getElementById("login-form");
const registrationForm = document.getElementById("registration-form");
const indicator = document.getElementById("indicator");

function register () {
    registrationForm.style.transform = "translateX(0px)";
    loginForm.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(100px)";
}

function login () {
    registrationForm.style.transform = "translateX(300px)";
    loginForm.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(0px)";
}

