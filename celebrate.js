console.log("CELEBRATE! ")
var x = document.createElement("CANVAS");
x.setAttribute('id','canvas')
// var ctx = x.getContext("2d");
// ctx.fillStyle = "#FF0000";
// ctx.fillRect(20, 20, 150, 100);
// document.body.appendChild(x);

// var img = new Image();
// img.onload = function(){
//     ctx.drawImage(img,10,10)
//     ctx.fillStyle = "rgba(200, 0, 0, 0.5)";
//     ctx.fillRect(0, 0, 500, 500);
// }
// img.src = url('chrome-extension://__MSG_@@extension_id__/assets/discoball.png');


canvas = document.getElementById('canvas')
ctx = x.getContext("2d");
x.width = window.innerWidth;
x.height = window.innerHeight;
cx = ctx.width/2;
cy = ctx.height/2;

let confetti = [];
const confettiCount = 300;
const gravity = 0.5;
const terminalVelocity = 5;
const drag = 0.075;
const colors = [
  { front : 'red', back: 'darkred'},
  { front : 'green', back: 'darkgreen'},
  { front : 'blue', back: 'darkblue'},
  { front : 'yellow', back: 'darkyellow'},
  { front : 'orange', back: 'darkorange'},
  { front : 'pink', back: 'darkpink'},
  { front : 'purple', back: 'darkpurple'},
  { front : 'turquoise', back: 'darkturquoise'},
];

//-----------Functions--------------
resizeCanvas = () => {
	x.width = window.innerWidth;
	x.height = window.innerHeight;
	cx = ctx.width/2;
	cy = ctx.height/2;
}

randomRange = (min, max) => Math.random() * (max - min) + min

initConfetti = () => {
  for (let i = 0; i < confettiCount; i++) {
    confetti.push({
      color      : colors[Math.floor(randomRange(0, colors.length))],
      dimensions : {
        x: randomRange(10, 20),
        y: randomRange(10, 30),
      },
      position   : {
        x: randomRange(0, x.width),
        y: x.height - 1,
      },
      rotation   : randomRange(0, 2 * Math.PI),
      scale      : {
        x: 1,
        y: 1,
      },
      velocity   : {
        x: randomRange(-25, 25),
        y: randomRange(0, -50),
      },
    });
  }
}

//---------Render-----------
render = () => {  
  ctx.clearRect(0, 0, x.width, x.height);
  
  confetti.forEach((confetto, index) => {
    let width = (confetto.dimensions.x * confetto.scale.x);
    let height = (confetto.dimensions.y * confetto.scale.y);
    
    // Move canvas to position and rotate
    ctx.translate(confetto.position.x, confetto.position.y);
    ctx.rotate(confetto.rotation);
    
    // Apply forces to velocity
    confetto.velocity.x -= confetto.velocity.x * drag;
    confetto.velocity.y = Math.min(confetto.velocity.y + gravity, terminalVelocity);
    confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();
    
    // Set position
    confetto.position.x += confetto.velocity.x;
    confetto.position.y += confetto.velocity.y;
    
    // Delete confetti when out of frame
    if (confetto.position.y >= x.height) confetti.splice(index, 1);

    // Loop confetto x position
    if (confetto.position.x > x.width) confetto.position.x = 0;
    if (confetto.position.x < 0) confetto.position.x = x.width;

    // Spin confetto by scaling y
    confetto.scale.y = Math.cos(confetto.position.y * 0.1);
    ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;
     
    // Draw confetto
    ctx.fillRect(-width / 2, -height / 2, width, height);
    
    // Reset transform matrix
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  });

  // Fire off another round of confetti
  // if (confetti.length <= 10) initConfetti();

  window.requestAnimationFrame(render);
}

//---------Execution--------
for (i=0;i<3;i++){
  initConfetti();
  render();
}


//----------Resize----------
window.addEventListener('resize', function () {
  resizeCanvas();
});

//------------Click------------
// window.addEventListener('click', function() {
//   initConfetti();
// });

document.body.appendChild(x);
