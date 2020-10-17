var canvas = document.getElementById("scene");
var ctx = canvas.getContext("2d");

canvas.width = png.width;
canvas.height = png.height;

var png = new Image();
png.onload = drawScene;
png.src = "img/gpigg.png";