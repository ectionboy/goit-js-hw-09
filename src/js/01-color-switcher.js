// Отримати посилання на кнопки
const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");

// Оголосити змінну для збереження інтервалу
let colorChangeInterval;

// Функція, яка генерує випадковий колір і застосовує його до фону <body>
function changeBackgroundColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
}

// Функція для старту зміни кольору
function startColorChange() {
  // Зупинити попередній інтервал, якщо він вже існує, щоб уникнути багатократних інтервалів
  stopColorChange();
  
  // Змінити колір по кліку і повторювати кожну секунду
  changeBackgroundColor();
  colorChangeInterval = setInterval(changeBackgroundColor, 1000);
  
  // Вимкнути кнопку "Start", поки триває зміна кольору
  startBtn.disabled = true;
}

// Функція для зупинки зміни кольору
function stopColorChange() {
  clearInterval(colorChangeInterval);
  
  // Увімкнути кнопку "Start" після зупинки зміни кольору
  startBtn.disabled = false;
}

// Додати обробник події для кнопок
startBtn.addEventListener("click", startColorChange);
stopBtn.addEventListener("click", stopColorChange);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function o() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
}

