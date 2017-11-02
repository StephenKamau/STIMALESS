var canvas = document.getElementById('myCanvasA');
var design = canvas.getContext('2d');
var a = 0;
var init = 4.72;
var x = design.canvas.width / 2;
var y = design.canvas.height / 2;
var dif;

function progress() {
    dif = (a / 100) * Math.PI * 2;
    design.clearRect(0, 0, 400, 200);
    design.beginPath();
    design.arc(x, y, 50, 0, 2 * Math.PI, false);
    design.fillStyle = '#FFF';
    design.fill();
    design.strokeStyle = '#f1f1f1';
    design.stroke();
    design.fillStyle = '#000';
    design.strokeStyle = '#2185f0';
    design.textAlign = 'center';
    design.lineWidth = 10;
    design.font = '10pt Verdana';
    design.beginPath();
    design.arc(x, y, 50, init, dif + init, false);
    design.stroke();
    design.fillText(a + '%', x + 2, y + 6);
    if (a >= 14) {
        clearTimeout(b);
    }

    a++;
}

var b = setInterval(progress, 50);