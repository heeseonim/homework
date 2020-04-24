const clock = document.querySelector("#clock");

function getTime() {
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const now = new Date();
  const d_day = xmasDay - now;

  const day = Math.floor(d_day / (1000 * 60 * 60 * 24));
  const hour = Math.floor((d_day % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minute = Math.floor((d_day % (1000 * 60 * 60)) / (1000 * 60));
  const second = Math.floor((d_day % (1000 * 60)) / 1000);

  const d = day < 10 ? `0${day}` : `${day}`;
  const h = hour < 10 ? `0${hour}` : `${hour}`;
  const m = minute < 10 ? `0${minute}` : `${minute}`;
  const s = second < 10 ? `0${second}` : `${second}`;
  clock.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
