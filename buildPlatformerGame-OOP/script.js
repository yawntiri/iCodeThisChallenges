const startBtn = document.getElementById("start-btn");
const canvas = document.getElementById("canvas");
const startScreen = document.querySelector(".start-screen");
const checkpointScreen = document.querySelector(".checkpoint-screen");
const checkpointMessage = document.querySelector(".checkpoint-screen > p");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
const gravity = 0.5;
let isCheckpointCollisionDetectionActive = true;


class Player {
    constructor() {
        this.position = {
          x: 10,
          y: 400,
        };
        this.velocity = {
          x: 0,
          y: 0,
        };
        this.width = 40;
        this.height = 40;
}
 draw() {
    ctx.fillStyle = "#99c9ff";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  
  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y <= canvas.height) {

      if (this.position.y < 0) {
        this.position.y = 0;
        this.velocity.y = gravity;
      }
      this.velocity.y += gravity;
    } else {
      this.velocity.y = 0;
    }

    if (this.position.x < this.width) {
      this.position.x = this.width;
    }
  }
}

 class Platform {
            constructor(x, y, width, height, color = 'white') {
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
                this.color = color;
            }

            move(dx, dy) {
                this.x += dx;
                this.y += dy;
            }

            checkCollision(otherObject) {
                return (
                    this.x < otherObject.x + otherObject.width &&
                    this.x + this.width > otherObject.x &&
                    this.y < otherObject.y + otherObject.height &&
                    this.y + this.height > otherObject.y
                );
            }

            draw(context) {
                context.fillStyle = this.color;
                context.fillRect(this.x, this.y, this.width, this.height);
            }
        }

const player = new Player();


const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.update();

  if (keys.rightKey.pressed && player.position.x < 400) {
    player.velocity.x = 5;
  } else if (keys.leftKey.pressed && player.position.x > 100) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;
  }
}


const keys = {
  rightKey: {
    pressed: false
  },
  leftKey: {
    pressed: false
  }
};

const movePlayer = (key, xVelocity, isPressed) => {
  if (!isCheckpointCollisionDetectionActive) {
    player.velocity.x = 0;
    player.velocity.y = 0;
    return;
  }


  switch (key) {
    case "ArrowLeft":
     keys.leftKey.pressed = isPressed;
      if (xVelocity === 0) {
        player.velocity.x = xVelocity;
      }
      player.velocity.x -= xVelocity;
      break;
    case "ArrowUp":
    case " ":
    case "Spacebar":
      player.velocity.y -= 8;
      break;
    case "ArrowRight":
      keys.rightKey.pressed = isPressed;
      if (xVelocity === 0) {
        player.velocity.x = xVelocity;
      }
      player.velocity.x += xVelocity;
  
  }

}

const startGame = () => {
  canvas.style.display = "block";
  startScreen.style.display = "none";
  animate()
}

startBtn.addEventListener("click", startGame);

window.addEventListener("keydown", ({ key }) => {
  movePlayer(key, 8, true);
});

window.addEventListener("keyup", ({ key }) => {
  movePlayer(key, 0, false);
});