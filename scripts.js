
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
        main();
    }, 100);
}

function change_direction(event) {
    const LEFT_KEYS = [37, 65];
    const RIGHT_KEYS = [39, 68];
    const UP_KEYS = [38, 87];
    const DOWN_KEYS = [40, 83];
    const GOING_UP = dy === -10;
    const GOING_DOWN = dy === 10;
    const GOING_RIGHT = dx === 10;
    const GOING_LEFT = dx === -10;
    let key_pressed = event.keyCode;

    if (LEFT_KEYS.includes(key_pressed) && !GOING_RIGHT) {
        dx = -10;
        dy = 0;
    }
    else if (RIGHT_KEYS.includes(key_pressed) && !GOING_LEFT) {
        dx = 10;
        dy = 0;
    }
    else if (UP_KEYS.includes(key_pressed) && !GOING_DOWN) {
        dx = 0;
        dy = -10;
    }
    else if (DOWN_KEYS.includes(key_pressed) && !GOING_UP) {
        dx = 0;
        dy = 10;
    }
}

function main() {
    step();
}

// global var
var container = document.getElementById("container");
var ctx = container.getContext("2d");
var snake = [{x: 150, y: 150},
    {x: 140, y: 150},
    {x: 130, y: 150},
    {x: 120, y: 150},
    {x: 110, y: 150}
];
let dx = 10;
let dy = 0;


main();
document.addEventListener("keydown", change_direction);
