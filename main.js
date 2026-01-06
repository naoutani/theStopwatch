$(document).ready(function () {
   let ms = 0;
   let sec = 0;
   let min = 0;
   let hour = 0;
   let timerInterval;

   function updateTimer() {
      ms++;

      if (ms >= 100) {
         ms = 0;
         sec++;
      }

      if (sec >= 60) {
         sec = 0;
         min++;
      }

      if (min >= 60) {
         min = 0;
         hour++;
      }

      const msStr = String(ms).padStart(2, '0');
      const secStr = String(sec).padStart(2, '0');
      const minStr = String(min).padStart(2, '0');
      const hourStr = String(hour).padStart(2, '0');

      $("#stop-watch-display").text(`${hourStr}:${minStr}:${secStr}:${msStr}`);
   }


   function start() {
      if (timerInterval != null) {
         return;
      }

      $("#start").addClass("disabled");
      $("#stop").removeClass("disabled");
      $("#reset").addClass("disabled");

      timerInterval = setInterval(updateTimer, 10);
   }

   function stop() {
      clearInterval(timerInterval);
      timerInterval = null;

      $("#start").removeClass("disabled");
      $("#stop").addClass("disabled");
      $("#reset").removeClass("disabled");
   }

   function reset() {
      stop();

      ms = 0;
      sec = 0;
      min = 0;
      hour = 0;

      $("#start").removeClass("disabled");
      $("#stop").addClass("disabled");
      $("#reset").addClass("disabled");

      $("#stop-watch-display").text("00:00:00:00");
   }

   $("#start").click(function () {
      if ($(this).hasClass('disabled')) return;
      start();
   });

   $("#stop").click(function () {
      if ($(this).hasClass('disabled')) return;
      stop();
   });

   $("#reset").click(function () {
      if ($(this).hasClass('disabled')) return;
      reset();
   });
});