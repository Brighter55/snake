var container = document.getElementById("container");
var ctx = container.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(300, 0);
ctx.lineTo(300, 300);
ctx.lineTo(0, 300);
ctx.lineTo(0, 0);

ctx.stroke();
