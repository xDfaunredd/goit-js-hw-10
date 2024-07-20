import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const button = document.querySelector('[data-start]');

const daysData = document.querySelector('[data-days]');
const hoursData = document.querySelector('[data-hours]');
const minutesData = document.querySelector('[data-minutes]');
const secondsData = document.querySelector('[data-seconds]');

const TIME_DELAY = 1000;
let intervalId = null;

button.disabled = true;

let pickedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    pickedDate = selectedDates[0];

    if (pickedDate < Date.now()) {
      iziToast.error({
        message: 'Please choose the date in the future',
        position: 'topRight',
      });

      button.disabled = true;

      return;
    }
    button.disabled = false;

    console.log(pickedDate);
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const addLeadingZero = value => {
  return value.toString().padStart(2, '0');
};

const handleClickFunc = () => {
  button.disabled = true;

  if (intervalId !== null) {
    clearInterval(intervalId);
  }

  const currentDate = Date.now();
  let diff = pickedDate - currentDate;

  intervalId = setInterval(() => {
    const timeRemains = convertMs(diff);

    daysData.textContent = addLeadingZero(timeRemains.days);
    hoursData.textContent = addLeadingZero(timeRemains.hours);
    minutesData.textContent = addLeadingZero(timeRemains.minutes);
    secondsData.textContent = addLeadingZero(timeRemains.seconds);

    diff -= TIME_DELAY;

    if (diff <= 0) {
      clearInterval(intervalId);
    }
  }, TIME_DELAY);
};

button.addEventListener('click', handleClickFunc);
