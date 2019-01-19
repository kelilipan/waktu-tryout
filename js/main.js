var clock;
$(document).ready(function() {
  var diff = 3600+1800;
  // Instantiate a coutdown FlipClock
  clock = $(".clock").FlipClock(diff, {
    clockFace: "HourlyCounter",
    onStop: function() {
      console.log('Waktu Habis')
      var audio = new Audio('http://s02.anvaqta.id/partner/sponsor/Loud_Alarm_Clock_Buzzer-Muk1984-493547174.mp3');
      audio.play();
    },
    countdown: true,
    autoStart: false
  });
});
document.getElementById("start").onclick = function() {
  clock.start();
};
document.getElementById("reset").onclick = function() {
  clock.setTime(3600+1800);
  clock.stop();
};
