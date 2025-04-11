const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link'); // Correctly targets login link
const registerLink = document.querySelector('.login-register'); // Correctly targets register link
const btnPopup = document.querySelector('.btnlogin-popup'); // Login popup button
const iconClose = document.querySelector('.icon-close'); // Close icon

// Open the registration form
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

// Open the login form
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

// Show the popup
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

// Close the popup
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});
