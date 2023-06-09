//Скрол к футеру по нажатию кнопки

document.getElementById('scrollButton').addEventListener('click', function () {
  let footerElement = document.getElementById('footer');
  footerElement.scrollIntoView({ behavior: 'smooth' });
});

/// slider v2

// Валидация
const petFormInput = document.querySelector('input[name="petForm"]');
const petAgeInput = document.querySelector('input[name="petAge"]');
const emailInput = document.querySelector('input[name="email"]');
const pupopForm = document.getElementById('formPop');
const submitPopup = document.getElementById('popupSubmit');

function validateForm(event) {
  const emailValue = emailInput.value.trim(); // Удаляем пробелы в начале и конце строки

  // Регулярное выражение для проверки формата электронной почты
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (
    emailValue &&
    petFormInput.value &&
    petAgeInput.value &&
    emailRegex.test(emailValue)
  ) {
    submitPopup.disabled = false; // Разблокировать кнопку submitPopup
  } else {
    submitPopup.disabled = true; // Заблокировать кнопку submitPopup
    event.preventDefault();
  }
}

submitPopup.addEventListener('click', function (event) {
  event.preventDefault();
  if (petFormInput.value && petAgeInput.value && emailInput.value) {
    closePopup();
    pupopForm.reset();
  }
});

// Открытие попапа
const overlay = document.querySelector('.overlay');
const popup = document.getElementById('popup');
const popupOpen = document.getElementById('open-my-popup');

popupOpen.addEventListener('click', function () {
  overlay.style.display = 'block';
  popup.style.display = 'block';
});

// Фиксация попап окна по скролу
window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY;

  const topPosition = 50 + scrollPosition;
  popup.style.top = topPosition + 'px';
});

// Функция закрытия попапа
function closePopup() {
  overlay.style.display = 'none';
  popup.style.display = 'none';
}

const popupClose = document.querySelector('.close__popup');
popupClose.addEventListener('click', closePopup);

// Отслеживаем изменения в полях формы
petFormInput.addEventListener('input', validateForm);
petAgeInput.addEventListener('input', validateForm);
emailInput.addEventListener('input', validateForm);
window.addEventListener('load', validateForm);

// Hover

const cardsSection = document.querySelector('.cards');
const dogCard = document.getElementById('dog');
const consultasionCard = document.getElementById('consultasion_hover');
let isMouseEnter = false;
let timeoutId = null;

dogCard.addEventListener('mouseenter', function () {
  if (!isMouseEnter) {
    clearTimeout(timeoutId);
    dogCard.style.visibility = 'hidden';
    consultasionCard.style.display = 'block';
  }
  isMouseEnter = true;
});

cardsSection.addEventListener('mouseleave', function () {
  if (isMouseEnter) {
    timeoutId = setTimeout(function () {
      dogCard.style.visibility = 'visible';
      consultasionCard.style.display = 'none';
      isMouseEnter = false;
    }); // Задержка перед скрытием карточки в миллисекундах (здесь 200 мс)
  }
});
