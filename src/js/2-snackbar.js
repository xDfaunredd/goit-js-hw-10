import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

const createPromise = (delay, status) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      status === 'fulfilled' ? resolve(delay) : reject(delay);
    }, delay);
  });
};

const promiseProcessingFunc = event => {
  event.preventDefault();

  const delayValue = event.target.delay.value;
  const statusValue = event.target.state.value;

  createPromise(delayValue, statusValue)
    .then(delay =>
      iziToast.success({
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      })
    )
    .catch(delay =>
      iziToast.error({
        message: `Rejected promise in ${delay}ms`,
        position: 'topRight',
      })
    );

  form.reset();
};

form.addEventListener('submit', promiseProcessingFunc);
