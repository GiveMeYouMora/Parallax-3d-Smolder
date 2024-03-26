let canvas = document.querySelector(".rain");
canvas.width = innerWidth;
canvas.height = innerHeight;
let c = canvas.getContext("2d");
function Random(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}
function RainDrop(x, y, endY, speed, opacity) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.opacity = opacity;
  this.endY = endY;
  this.draw = () => {
    c.beginPath();
    c.moveTo(this.x, this.y);
    c.lineTo(this.x, this.y - this.endY);
    c.lineWidth = 1;
    c.strokeStyle = `rgba(255,255,255, ${this.opacity})`;
    c.stroke();
  };
  this.update = () => {
    let rainEnd = window.innerHeight + 100;
    if (this.y >= rainEnd) {
      this.y = this.endY - 100;
    } else {
      this.y = this.y + this.speed;
    }
    this.draw();
  };
}
let rainMass = [];
for (let i = 0; i < 100; i++) {
  let rain_x =Random(0, window.innerWidth);
  let rain_y = Random(0, window.innerHeight);
  let rain_endY = Random(0, 100);
  let rain_speed = Random(0, 20);
  let rain_opacity = Math.random();
  rainMass.push(
    new RainDrop(rain_x, rain_y, rain_endY, rain_speed, rain_opacity)
  );
//   new RainDrop(rain_x, rain_y, rain_endY, rain_speed, rain_opacity)
}

console.log(rainMass);
function animationRain() {
  requestAnimationFrame(animationRain);
//   c.clearRect(0,0,window.innerWidth,window.innerHeight)
  for (let i = 0; i < rainMass.length; i++) {
    rainMass[i].update();
  }
}
animationRain();
