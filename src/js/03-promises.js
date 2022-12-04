import Notiflix from 'notiflix';

const form = document.querySelector('.form');
let delay = 0;
let step = 0;
let amount = 0;
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const formElements = e.currentTarget.elements;
  delay = Number(formElements.delay.value);
  step = Number(formElements.step.value);
  amount = Number(formElements.amount.value);

  let promiseDelay = delay;

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, promiseDelay);
    promiseDelay += step;
  }
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  })
    .then(x => Notiflix.Notify.success(x))
    .catch(error => Notiflix.Notify.failure(error));
}
