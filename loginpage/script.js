let loginForm = document.querySelector('.my-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    let email = document.getElementById('email');
    let password = document.getElementById('password');

    console.log('Email:', email.value);
    console.log('Password:', password.value);
});