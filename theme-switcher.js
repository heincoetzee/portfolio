"use strict";

// Get color theme switcher buttons
const darkThemeButton = document.querySelector(".fa-moon");
const lightThemeButton = document.querySelector(".fa-lightbulb");

// Get the elements who's colours need to be changed
const body = document.body;
const navBar = document.querySelector(".navbar");
const techStackContainers = document.querySelectorAll(".tech-stack");
const form = document.querySelector("form");
const submitButton = document.querySelector("button");

const changePageColours = () => {
    // Change the colours of the body
    if (body.classList.contains("light-page")) {
        body.classList.replace("light-page", "dark-page");
    }
    else {
        body.classList.replace("dark-page", "light-page");
    }

    // Change colours of the navbar
    if (navBar.classList.contains("light-navbar")) {
        navBar.classList.replace("light-navbar", "dark-navbar");
    }
    else {
        navBar.classList.replace("dark-navbar", "light-navbar");
    }

    // Change colours of the tech stack containers
    techStackContainers.forEach(container => {
        if (container.classList.contains("light-tech-stack")) {
            container.classList.replace("light-tech-stack", "dark-tech-stack");
        }
        else {
            container.classList.replace("dark-tech-stack", "light-tech-stack");
        }
    })

    // Change the colours of the form and it's submit button
    if (form.classList.contains("light-form")) {
        form.classList.replace("light-form", "dark-form");
    }
    else {
        form.classList.replace("dark-form", "light-form");
    }

    if (submitButton.classList.contains("light-button")) {
        submitButton.classList.replace("light-button", "dark-button");
    }
    else {
        submitButton.classList.replace("dark-button", "light-button");
    }
};

const switchThemeButtons = () => {
    if (darkThemeButton.classList.contains("visible")) {
        darkThemeButton.classList.replace("visible", "not-visible");
        lightThemeButton.classList.replace("not-visible", "visible");
    }
    else {
        lightThemeButton.classList.replace("visible", "not-visible");
        darkThemeButton.classList.replace("not-visible", "visible");
    }
};

const changePageTheme = () => {
    changePageColours();
    switchThemeButtons();
};

// When user presses the dark moon icon, change to dark theme
darkThemeButton.addEventListener("click", () => {
    changePageTheme();
});

// When the user presses the lightbulb icon, change to light theme
lightThemeButton.addEventListener("click", () => {
    changePageTheme();
});