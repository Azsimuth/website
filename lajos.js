let awoooo = "56709"
// meaningful and descriptive name
console.log(`awooo ${awoooo}`)
let SprJumper = document.getElementById("SprJumper");
var GameHeight = 640
var GameWidth = 480

Jumper = {
    MinSpeed: -2,
    Maxspeed: 2,
    CurrentSpeed: 0
}
// this does something
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

function keyDownHandler(event) {
    if(event.keyCode == 39) {
        rightPressed = true;
    }
    else if(event.keyCode == 37) {
        leftPressed = true;
    }
    if(event.keyCode == 40) {
      downPressed = true;
    }
    else if(event.keyCode == 38) {
      upPressed = true;
    }
}

// this is pointless, and i'll never get anything done.