// set height to 100vh in mobiles
const body = document.getElementById("App");
body.style.height = window.innerHeight + "px";

const timer = {
  days: 8,
  hours: 23,
  minutes: 44,
  seconds: 18,
};

setInterval(() => updateTime(timer), 1000);

// update time for each second
function updateTime(timer) {
  const { days, hours, minutes, seconds } = timer;
  if (seconds === 0) {
    timer.seconds = 60;
    if (minutes === 0) {
      timer.minutes = 59;
      if (hours === 0) {
        timer.hours = 23;
        if (timer.days === 0) {
          timer.days = 8;
        } else {
          timer.days = days - 1;
        }
      } else {
        timer.hours = hours - 1;
      }
    } else {
      timer.minutes = minutes - 1;
    }
  } else {
    timer.seconds = seconds - 1;
  }
  render(timer);
}

function render(timer) {
  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");
  if (timer.days <= 9) {
    daysElement.textContent = "0" + timer.days;
  } else {
    daysElement.textContent = timer.days;
  }
  if (timer.hours <= 9) {
    hoursElement.textContent = "0" + timer.hours;
  } else {
    hoursElement.textContent = timer.hours;
  }
  if (timer.minutes <= 9) {
    minutesElement.textContent = "0" + timer.minutes;
  } else {
    minutesElement.textContent = timer.minutes;
  }
  if (timer.seconds <= 9) {
    secondsElement.textContent = "0" + timer.seconds;
  } else {
    secondsElement.textContent = timer.seconds;
  }
}
