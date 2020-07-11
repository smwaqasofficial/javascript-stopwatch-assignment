var min = 0;
var sec = 0;
var msec = 0;
var hour = 0;

var minHead = document.getElementById("min");
var secHead = document.getElementById("sec");
var mSecHead = document.getElementById("mSec");
var hourHead = document.getElementById("hour");

var btnStart = document.getElementById("btnStart");

var timerImg = document.getElementById("timerImg");

var checkBtn = true;

var interval;

function timer() {
  msec++;
  mSecHead.innerHTML = msec;
  if (msec >= 100) {
    sec++;
    secHead.innerHTML = sec;
    msec = 0;
  } else if (sec === 60) {
    min++;
    minHead.innerHTML = min;
    sec = 0;
  } else if (min === 60) {
    hour++;
    hourHead.innerHTML = hour;
    min = 0;
  }
}

function stopWatch() {
  if (checkBtn) {
    start();
  } else {
    stop();
  }
}

function start() {
  interval = setInterval(timer, 10);
  timerImg.src = "images/pause-icon.png";
  checkBtn = false;
}

function stop() {
  clearInterval(interval);
  timerImg.src = "images/play-icon.png";
  checkBtn = true;
}

function reset() {
  hour = 0;
  min = 0;
  sec = 0;
  msec = 0;
  hourHead.innerHTML = "00";
  minHead.innerHTML = "00";
  secHead.innerHTML = "00";
  mSecHead.innerHTML = "00";
  stop();
}
