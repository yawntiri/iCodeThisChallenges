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

