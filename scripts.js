
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

function move_snake() {
    let dx = 10;
    let dy = 0;
    let new_head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(new_head); // make new_head the beginning of snake
    snake.pop(); // remove the last element in snake
}

function reset_canvas() {
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.fillRect(0, 0, container.width, container.height);
    ctx.strokeRect(0, 0, container.width, container.height);
}

function step() {
    setTimeout(function() {
        reset_canvas();
        move_snake();
        draw_snake();
        steps++;
        main();
    }, 500);
}

function main() {
    step();
}
var container = document.getElementById("container");
var ctx = container.getContext("2d");
var snake = [{x: 150, y: 150},
    {x: 140, y: 150},
    {x: 130, y: 150},
    {x: 120, y: 150},
    {x: 110, y: 150}
];
let steps = 0;

main();



