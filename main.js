// import { animate, drawOnScreen } from "./scripts/mainCanvasFunctions.js";
import { animate } from "./scripts/forAnimatedProgect/animate.js";
import { drawOnScreen } from "./scripts/forNonAnimatedProjects/draw.js";

const screen = document.getElementById("screen");
const ctx = screen.getContext("2d");

//setting width & height
const width = 400,
  height = 400;
screen.width = width;
screen.height = height;

//calling functions

drawOnScreen(ctx);
//animate(0);

//before using comment requestAnimationFrame
//setInterval(animate, 200);
