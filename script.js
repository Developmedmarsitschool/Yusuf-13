document.addEventListener("DOMContentLoaded", function () {
    const idInput = document.getElementById("modmeId");
    const passwordInput = document.getElementById("password");
    const submitButton = document.getElementById("submitBtn");
    const errorMessage = document.getElementById("errorMessage");

   
    const correctId = "123456";
    const correctPassword = "123";

    function validateInputs() {
        if (idInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
            submitButton.disabled = false;
            submitButton.style.backgroundColor = "#d9534f";
        } else {
            submitButton.disabled = true;
            submitButton.style.backgroundColor = "#f0a39a";
        }
    }

    
    idInput.addEventListener("input", validateInputs);
    passwordInput.addEventListener("input", validateInputs);

    
    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); 

        if (idInput.value === correctId && passwordInput.value === correctPassword) {
            window.location.href = "info.html";
        } else {
            errorMessage.textContent = "Modme Id or Phone number yoki Password notogri!";
            errorMessage.style.color = "red";
        }
    });
});


function togglePassword() {
    var passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}