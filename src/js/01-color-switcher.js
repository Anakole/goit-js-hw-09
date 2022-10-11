const refs = {
  bg: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const changeBgColor = event => {
//   const intervalId = setInterval(() => {
//     const color = getRandomHexColor();
//     refs.bg.style.backgroundColor = color;

//     refs.stopBtn.addEventListener('click', () => {
//       clearInterval(intervalId);
//     });
//   }, 1000);
// };

const colorInterval = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    refs.startBtn.classList.add('disabled');

    this.intervalId = setInterval(() => {
      const color = getRandomHexColor();
      refs.bg.style.backgroundColor = color;
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    refs.startBtn.classList.remove('disabled');
  },
};

refs.startBtn.addEventListener('click', () => {
  colorInterval.start();
});
refs.stopBtn.addEventListener('click', () => {
  colorInterval.stop();
});
