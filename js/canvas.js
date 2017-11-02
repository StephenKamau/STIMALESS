var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var al = 0;
var start = 4.72;
var cw = context.canvas.width / 2;
var ch = context.canvas.height / 2;
var diff;

function progressBar() {
    diff = (al / 100) * Math.PI * 2;
    context.clearRect(0, 0, 400, 200);
    context.beginPath();
    context.arc(cw, ch, 50, 0, 2 * Math.PI, false);
    context.fillStyle = '#FFF';
    context.fill();
    context.strokeStyle = '#f1f1f1';
    context.stroke();
    context.fillStyle = '#000';
    context.strokeStyle = '#2185f0';
    context.textAlign = 'center';
    context.lineWidth = 10;
    context.font = '10pt Verdana';
    context.beginPath();
    context.arc(cw, ch, 50, start, diff + start, false);
    context.stroke();
    context.fillText(al + '%', cw + 2, ch + 6);
    if (al >= 21) {
        clearTimeout(bar);
    }

    al++;
}

var bar = setInterval(progressBar, 50);