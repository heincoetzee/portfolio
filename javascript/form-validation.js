"use strict";

const formElements = Array.from(form.elements).slice(0, 3);
const [userNameElement, emailElement, messageElement] = formElements;

const errorMessages = Array.from(document.querySelectorAll(".error-message"));
const [userNameError, emailError, messageError] =  errorMessages;

const isValidUsername = (username) => {
    return username !== "";
};

const isValidEmail = (email) => {
    if (email === "") {
        return false;
    }

    const emailRegExp = /^[\d-\w]+@[\d-\w]+.[\d-\w]+$/;

    return emailRegExp.exec(email) !== null;
};

const isValidMessage = (message) => {
    return message !== "";
};


submitButton.addEventListener("click", event => {
    event.preventDefault();

    // get the value of each field
    let username = userNameElement.value.trim(" ");
    let email = emailElement.value.trim(" ");
    let message = messageElement.value.trim(" ");

    let validUsername = isValidUsername(username);
    let validEmail = isValidEmail(email);
    let validMessage = isValidMessage(message);

    // Validate that the user's name
    if (!validUsername) {
        userNameError.textContent = "Please enter your name";
        userNameElement.classList.replace("valid-input", "not-valid-input");
    }
    else {
        userNameError.textContent = "";
        userNameElement.classList.replace("not-valid-input", "valid-input");
    }
    
    // Validate the user's email
    if (!validEmail) {
        emailError.textContent = "Please enter a valid email";
        emailElement.classList.replace("valid-input", "not-valid-input");
    }
    else {
        emailError.textContent = "";
        emailElement.classList.replace("not-valid-input", "valid-input");
    }

    // Validate the user's message
    if (!validMessage) {
        messageError.textContent = "Please enter a message";
        messageElement.classList.replace("valid-input", "not-valid-input");
    }
    else {
        messageError.textContent = "";
        messageElement.classList.replace("not-valid-input", "valid-input");
    }

    // Then only if username, email and password valid -> allow user to send email
    if (validUsername && validEmail && validMessage) {
        fetch("submit.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `username=${username}&email=${email}&message=${message}`
        })
        .then(response => response.text())
        .then(data => {
            userNameElement.value = "";
            emailElement.value = "";
            messageElement.value = "";
            alert(data);
        });
    }

});