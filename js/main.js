/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
canvas = document.getElementsByClassName("particles-js-canvas-el");
var dimension = [document.documentElement.clientWidth, document.documentElement.clientHeight];
canvas.width = $(window).width();
canvas.height = $(window).height();
$("#particles-js").height("100%");
$(".typeText").typed({
  strings: ["I write code.", "I make websites.", "I love technology.", "I hack stuff.", "I am a learner.", "I am a developer.", "I am Caleb Elliott."],
  typeSpeed: 100,
  backDelay: 2500
});
