const targetDate = new Date().getTime() + (39 * 24 * 60 * 60 * 1000);

setInterval(() => {
     const now = new Date().getTime();
     const distance = targetDate - now;

     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

     document.getElementById('days').innerHTML = days;
     document.getElementById('hours').innerHTML = hours;
     document.getElementById('minutes').innerHTML = minutes;
     document.getElementById('seconds').innerHTML = seconds;
}, 1000);

window.addEventListener("load", () => {
     const music = document.getElementById("bgmusic");
     music.play().catch(() => {
          document.body.addEventListener("click", () => {
               music.play();
          }, { once: true });
     });
});
