
let canvas = document.querySelector("canvas")

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d")



this.screen = {
    width: window.innerWidth,
    height: window.innerHeight,

    backgroundColor: "White",

}


this.mouse = {
    x: screen.width / 2,
    y: screen.height / 2
}





class Ball {
    constructor(x, y, dx, dy, r, color) {
        this.gravity = 1
        this.friction = 0.8
        this.r = r || 20
        this.y = y || randomIntFromInterval(0 + this.r, window.innerHeight - this.r)
        this.x = x || randomIntFromInterval(0 + this.r, window.innerWidth - this.r)
        this.dx = dx || (Math.random() - 0.5) * 20
        this.dy = dy || (Math.random()) * 4
        this.color = color || `rgba(233, 76,60,${Math.random()})` // or getRandomColor();

        this.draw()

    }


    draw() {    
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
        c.fillStyle = this.color
        c.fill();
        c.stroke();
    }

    update() {
        if (this.y + this.r + this.dy >= screen.height) {

            this.dy = - this.dy * this.friction;
            this.dx = - this.dx * this.friction;


        }

        else {
            this.dy += this.gravity
        }
        if (this.x + this.r + this.dx >= screen.width || this.x + this.r + this.dx <= 0) {
            this.dx = - this.dx
        }
        this.y += this.dy
        this.x += this.dx


        this.draw()
    }
}

class Canvas {
    constructor() {
        this.balls = []

        for (let i = 0; i < 20; i++) {
            this.balls.push(new Ball)
        }
    }

    animate() { 
        c.clearRect(0, 0, window.innerWidth, window.innerHeight)
        this.balls.forEach(ball => {
            ball.update()
        });
        requestAnimationFrame(this.animate.bind(this))
    }
}

let mycan = new Canvas();
mycan.animate();








window.addEventListener("mousemove", function (e) {
    // balls.forEach(ball => {
    //     let distance = Math.sqrt(Math.pow(e.clientX - ball.x, 2) + Math.pow(e.clientY - ball.y, 2))
    //     if (distance < 100 && ball.r < ball.baseR * 4) {
    //         ball.r += 1;
    //     } else if (distance > 100 && ball.r > ball.baseR) {
    //         ball.r -= 1;
    //     }

    // });


    mouse.x = e.clientX;
    mouse.y = e.clientY;

})




window.addEventListener("resize", (e) => {
    canvas.width = innerWidth
    canvas.height = innerHeight

})







function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


function getRandomColor() { 
    let colors = ["green", "red", "blue", "purple", "gray", "yellow", "violet", "orange", "blueviolet", "brown"]
    let i = Math.floor(Math.random() * colors.length)
    let color = colors[i]
    return color;
}

