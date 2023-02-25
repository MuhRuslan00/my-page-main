let loginButton = document.querySelector('.login-button')
let loginPopUp = document.querySelector('.login-popUp');

console.log(loginButton);
console.log(loginPopUp);

loginButton.addEventListener('click', showPopUp);

function showPopUp(evt) {
    console.log(evt);
    evt.preventDefault();

    loginPopUp.classList.toggle('show-popUp');
};