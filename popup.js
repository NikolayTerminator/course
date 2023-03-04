let loginButton=document.querySelector('.popup-button');
let loginPopUp=document.querySelector('.popup')
loginButton.addEventListener('click', showPopUp);
function showPopUp(e) {
    e.preventDefault();
    loginPopUp.classList.toggle('popup-visible')
}