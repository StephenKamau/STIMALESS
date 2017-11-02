var canvas = document.getElementById('myCanvasB');
var circle = canvas.getContext('2d');
var ai = 0;
var i = 4.72;
var cx = design.canvas.width / 2;
var cy = design.canvas.height / 2;
var di;

function progressA() {
    di = (ai / 100) * Math.PI * 2;
    circle.clearRect(0, 0, 400, 200);
    circle.beginPath();
    circle.arc(cx, cy, 50, 0, 2 * Math.PI, false);
    circle.fillStyle = '#FFF';
    circle.fill();
    circle.strokeStyle = '#f1f1f1';
    circle.stroke();
    circle.fillStyle = '#000';
    circle.strokeStyle = '#2185f0';
    circle.textAlign = 'center';
    circle.lineWidth = 10;
    circle.font = '10pt Verdana';
    circle.beginPath();
    circle.arc(cx, cy, 50, i, di + i, false);
    circle.stroke();
    circle.fillText(ai + '%', cx + 2, cy + 6);
    if (ai >= 5) {
        clearTimeout(ba);
    }

    ai++;
}

var ba = setInterval(progressA, 50);