function create_box() {
    ctx.moveTo(0, 0);
    ctx.lineTo(300, 0);
    ctx.lineTo(300, 300);
    ctx.lineTo(0, 300);
    ctx.lineTo(0, 0);
    ctx.stroke();
}

function draw_snake_body(coordinates) { // call function to draw each body block for each coordinates
    ctx.fillStyle = "lightgreen";
    ctx.strokeStyle = "darkgreen";
    ctx.fillRect(coordinates.x, coordinates.y, 10, 10);
    ctx.strokeRect(coordinates.x, coordinates.y, 10, 10);
}

// call function that make block for body for every block.
function draw_snake() {
    for (let i = 0; i < snake.length; i++) {
        draw_snake_body(snake[i]);
    }
}

var container = document.getElementById("container");
var ctx = container.getContext("2d");

create_box();
var snake = [{x: 150, y: 150},
    {x: 140, y: 150},
    {x: 130, y: 150},
    {x: 120, y: 150},
    {x: 110, y: 150}
];
draw_snake()
