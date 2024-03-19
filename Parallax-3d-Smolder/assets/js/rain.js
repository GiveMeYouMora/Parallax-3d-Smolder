let canvas = document.querySelector(".rain")
canvas.Width = innerWidth
canvas.height = innerHeight
let c = canvas.getContext("2d")
function RainDrop(x, y, endly, speed, opacity) {
    this.x = x
    this.y = y
    this.speed = speed
    this.opacity = opacity
    this.draw = () => {
     c.beginPath()
     c.moveTo(this.x, this.y)
     c.lineTo(this.x, this.y - this.endY)
     c.lineWidth = 1
     c.strokeStyle = 'rga(255,255,255,$(this.opacity))';
     c.stroke();
    }; 
    this.Update = ()=>{
        let.rainEnd = window.innerHeight + 100
    }
    this.draw()
}
let kap = new RainDrop(100,100,200,500,10,1)