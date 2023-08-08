// Отримуємо форму
const form = document.querySelector('.form');

// Додаємо обробник події submit для форми
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Забороняємо стандартну поведінку форми

  // Отримуємо значення полів форми
  const delayInput = document.querySelector('input[name="delay"]');
  const stepInput = document.querySelector('input[name="step"]');
  const amountInput = document.querySelector('input[name="amount"]');

  const delay = Number(delayInput.value);
  const step = Number(stepInput.value);
  const amount = Number(amountInput.value);

  // Викликаємо функцію для створення промісів
  createPromises(delay, step, amount);
});
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay }); // Виконати проміс
      } else {
        reject({ position, delay }); // Відхилити проміс
      }
    }, delay);
  });
}
function createPromises(delay, step, amount) {
  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delay += step;
  }
}
