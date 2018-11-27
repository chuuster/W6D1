const Util = require('./util.js');
const MovingObject = require('./moving_object.js')['MovingObject'];
const Asteroid = require('./asteroid.js');
// const MovingObject = require('./moving_object.js');


document.addEventListener("DOMContentLoaded", function(event) {
  let gameCanvas = document.getElementById("game-canvas");
  let ctx = gameCanvas.getContext("2d");
});


console.log("webpack is working");

window.MovingObject = MovingObject;
window.Util = Util;
window.Asteroid = Asteroid;