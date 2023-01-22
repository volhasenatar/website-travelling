/*burger menu*/
const btnMenu = document.querySelector('.menu-btn');
const popup = document.querySelector('.popup');
const menu = document.querySelector('#menu').cloneNode(1);
const body = document.body;

btnMenu.addEventListener('click', nambHundler);

function nambHundler(e) {
  e.preventDefault();
  btnMenu.classList.toggle('menu-btn_active');
  popup.classList.toggle('open');
  body.classList.toggle('noscroll');
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Закрытие попапа при клике на меню
links[4].addEventListener('click', () => {
  popup.classList.remove('open');
  logInPopUp.classList.remove('hidden');
  btnMenu.classList.remove('menu-btn_active');
});

links.forEach((link) => {
  delete links[4];
  link.addEventListener('click', closeOnClick);
});

function closeOnClick() {
  popup.classList.remove('open');
  btnMenu.classList.remove('menu-btn_active');
  body.classList.remove('noscroll');
}

//меню логин
const singIn = document.querySelector('.btn-signIn');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const register = document.querySelector('.register');
const logInPopUp = document.querySelector('.popup-container');

function emailAlert() {
  alert(`Ваш email: ${email.value}`);
}
function passwordAlert() {
  alert(`Ваш пароль: ${password.value}`);
}

singIn.addEventListener('click', () => {
  emailAlert();
  passwordAlert();
});

register.addEventListener('click', () => {
  document.querySelectorAll('.register-remove').forEach((item) => {
    item.remove();
  });
  document.querySelector('.login-popup_h1').innerText = 'Create account';
  document.querySelector('.have-account').innerText =
    'Already have an account?';
  register.innerText = 'Log in';
});

//бургер меню логин

const loginGeneral = document.querySelector('.loginGeneral');
loginGeneral.addEventListener('click', () => {
  logInPopUp.classList.remove('hidden');
  body.classList.toggle('noscroll');
});

//при нажатии вне логина переход на главную страницу

logInPopUp.addEventListener('click', (event) => {
  if (event.target.classList.contains('popup-container')) {
    logInPopUp.classList.toggle('hidden');
    body.classList.remove('noscroll');
    location.reload();
  }
});

//слайдер фотографий

$('.destinations-images').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
});
