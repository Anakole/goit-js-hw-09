import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector('button[data-start]');
const inputRef = document.querySelector('#datetime-picker');

let intervalId = null;
let deadline = Date.now();

const notifyOptions = {
  position: 'center-center',
  backOverlay: true,
  clickToClose: true,
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    deadline = selectedDates[0];

    if (deadline < new Date()) {
      Notify.failure('Please choose a date in the future', notifyOptions);
      startBtn.disabled = false;
    } else {
      startBtn.disabled.remove;
    }
  },
};

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  inputRef.disabled = true;

  intervalId = setInterval(() => {
    const delta = deadline - new Date();

    if (delta <= 0) {
      Notify.success('The deadline has arrived!', notifyOptions);
      clearInterval(intervalId);
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(delta);
    document.querySelector('span[data-days]').textContent = pad(days);
    document.querySelector('span[data-hours]').textContent = pad(hours);
    document.querySelector('span[data-minutes]').textContent = pad(minutes);
    document.querySelector('span[data-seconds]').textContent = pad(seconds);
  }, 1000);
});

function pad(value) {
  return String(value).padStart(2, 0);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

flatpickr('#datetime-picker', options);
