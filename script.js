//Global variables
const time_el = document.querySelector(".watch .time");
const start_btn = document.getElementById("start");
const reset_btn = document.getElementById("reset");
const stop_btn = document.getElementById("stop");
const REST_TIME = "00:00:00";
let seconds = 0;
let interval = null;

// event listeners
start_btn.addEventListener("click", start);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);
// update the timer
function timer() {
  seconds++;

  //format time
  let hours = Math.floor(seconds / 3600);
  // 3600 is 60*60 => no. of seconds in one hour
  //and then divide by 60 to come up with mins
  let mins = Math.floor((seconds - hours * 3600) / 60);
  let secs = seconds % 60;

  if (secs < 10) secs = `0${secs}`;
  if (mins < 10) mins = `0${mins}`;
  if (hours < 10) hours = `0${hours}`;

  time_el.innerText = `${hours}:${mins}:${secs}`;
}

// start function

function start() {
  if (interval) {
    return;
  }
  interval = setInterval(timer, 1000);
}

//stop function
function stop() {
  clearInterval(interval);
  interval = null;
}

// Reset function

function reset() {
  stop();
  seconds = 0;
  time_el.innerText = REST_TIME;
}
