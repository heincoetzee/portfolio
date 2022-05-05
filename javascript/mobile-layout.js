const hamburgerIcon = document.querySelector(".fa-bars");
const welcomePageWrapper = document.querySelector(".welcome-page-wrapper");

const changeLayout = () => {
    if (this.innerWidth <= 420) {
        navBar.classList.replace("navbar-visible", "navbar-not-visible");
        hamburgerIcon.classList.replace("not-visible", "visible");
        welcomePageWrapper.classList.add("new-grid");
    }
    else {
        navBar.classList.replace("navbar-not-visible", "navbar-visible");
        hamburgerIcon.classList.replace("visible", "not-visible");
        welcomePageWrapper.classList.remove("new-grid");
        welcomePageWrapper.classList.replace("navbar-expanded", "navbar-not-expanded");
    }
};

window.addEventListener("load", changeLayout);
window.addEventListener("resize", changeLayout);

hamburgerIcon.addEventListener("click", () => {
    if (welcomePageWrapper.classList.contains("navbar-not-expanded")) {
        welcomePageWrapper.classList.replace("navbar-not-expanded", "navbar-expanded");
    }
    else {
        welcomePageWrapper.classList.replace("navbar-expanded", "navbar-not-expanded");
    }

    if (navBar.classList.contains("navbar-not-visible")) {
        navBar.classList.replace("navbar-not-visible", "navbar-visible");
    }
    else {
        navBar.classList.replace("navbar-visible", "navbar-not-visible");
    }
});