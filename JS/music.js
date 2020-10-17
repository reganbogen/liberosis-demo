var canvas = document.getElementById("scene");
var ctx = canvas.getContext("2d");

canvas.width = png.width;
canvas.height = png.height;

ctx.drawImage(png, 0, 0);
var data = ctx.getImageData(0, 0, png.width, png.height);
ctx.clearRect(0,0,canvas.width, canvas.height);

var png = new Image();
png.onload = drawScene;
png.src = "img/gpigg.png";