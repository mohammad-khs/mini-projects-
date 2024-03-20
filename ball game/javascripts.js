let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext("2d");

this.screen = {
  width: window.innerWidth,
  height: window.innerHeight,
  backgorundColor: "red",
};
this.mouse = {
  x: screen.width / 20,
  y: screen.height / 20,
};

class Ball {
  constructor(x, y, dx, dy, r, color) {
    this.baseR = 20;
    this.gravity = 0.3;
    this.friction = 0.7;
    this.r = r || 20;
    this.y = y || randomIntFromInterval(0 + this.r, screen.height - this.r);
    this.x = x || randomIntFromInterval(0 + this.r, screen.width - this.r);
    this.dx = dx || (Math.random() - 0.5) * 20;
    this.dy = dy || Math.random() * 4;
    this.color = color || getRandomColor();
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    c.fillStyle = this.color;
    c.fill();
    c.stroke();
  }

  update() {
    if (this.y + this.r + this.dy > screen.height) {
      this.dy = -this.dy * this.friction;
      // this.dx = - this.dx * this.friction;
    } else {
      this.dy += this.gravity;
    }
    if (
      this.x + this.r + this.dx > screen.width ||
      this.x - this.r + this.dx < 0
    ) {
      this.dx = -this.dx;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

class Canvas {
  constructor() {
    this.balls = [];

    for (let i = 0; i < 20; i++) {
      this.balls.push(new Ball());
    }
  }

  animate() {
    c.clearRect(0, 0, screen.width, screen.height);
    this.balls.forEach((ball) => {
      ball.update();
    });

    requestAnimationFrame(this.animate.bind(this));
  }

  handleMousemove = (event) => {
    console.log(`mouse position: ${event.clientX}:${event.clientY}`);

    this.balls.forEach((ball) => {
      let distance = Math.sqrt(
        Math.pow(event.x - ball.x, 2) + Math.pow(event.y - ball.y, 2)
      );

      if (distance < 100 && ball.r < ball.baseR * 2) {
        ball.r += 1;
      } else if (distance > 100 && ball.r > ball.baseR) {
        ball.r -= 1;
      }
    });
  };

  towradMouse = (event) => {
    this.balls.forEach((ball) => {
      let distance = Math.sqrt(
        Math.pow(event.x - ball.x, 2) + Math.pow(event.y - ball.y, 2)
      );

      if (distance < 100) {
        ball.x = event.x;
        ball.y = event.y;
      }
    });
  };
}
let mycan = new Canvas();
mycan.animate();

document.addEventListener("mousemove", mycan.handleMousemove);
document.addEventListener("mousemove", mycan.towradMouse);

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomColor() {
  let colors = [
    "green",
    "red",
    "blue",
    "purple",
    "gray",
    "yellow",
    "violet",
    "orange",
    "blueviolet",
    "brown",
  ];

  let i = Math.floor(Math.random() * colors.length);

  let color = colors[i];

  return color;
}
