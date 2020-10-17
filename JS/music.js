var canvas = document.getElementById("scene");
var ctx = canvas.getContext("2d");

canvas.width = png.width;
canvas.height = png.height;

ctx.drawImage(png, 0, 0);

var data = ctx.getImageData(0, 0, png.width, png.height);

ctx.clearRect(0,0,canvas.width, canvas.height);

var particles = [];
for (var y = 0, y2 = data.height; y < y2; y++) {
    for (var x = 0, x2 = data.width; x < x2; x++) {
        if (data.data[(x * 4 + y * 4 * data.width) + 3] > 128) {
            var particle = {
                x : x,
                y : y
            };
            particles.push(particle);
        }
    }
}

var png = new Image();
png.onload = drawScene;
png.src = "img/gpigg.png";