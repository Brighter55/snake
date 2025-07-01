
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

// check if head is on food
function on_food() {
    if (snake[0].x === foodx && snake[0].y === foody) {
        return true;
    }
    return false;
}

function move_snake() {
    let new_head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(new_head); // make new_head the beginning of snake
    if (on_food()) {
        scores++;
        document.getElementById("scores").innerText = `Scores: ${scores}`;
        create_food_coordinate();
    }
    else {
        snake.pop(); // remove the last element in snake
    }
}

function reset_canvas() {
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.fillRect(0, 0, container.width, container.height);
    ctx.strokeRect(0, 0, container.width, container.height);
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
// func that generates random x/y values
function generate_rand_ten(min, max) {
    return  Math.floor((Math.random() * (max - min + 1)) / 10) * 10;
}

function create_food_coordinate() {
    while (true) {
    // create coordinate
    foodx = generate_rand_ten(0, container.width - 10);
    foody = generate_rand_ten(0, container.height - 10);
    if (snake.some(body => body.x === foodx && body.y === foody)) { // return true if food's coordinate is the same as element's
        continue;
    }
    break;
    }
}

function draw_food() {
    ctx.fillStyle = 'red';
    ctx.strokestyle = 'darkred';
    ctx.fillRect(foodx, foody, 10, 10);
    ctx.strokeRect(foodx, foody, 10, 10);
}

function is_game_over() {
    // check if collide
    let did_collide;
    for (let i = 4; i < snake.length; i++) {
        did_collide = snake[0].x === snake[i].x && snake[0].y === snake[i].y;
        if (did_collide) {
            return true;
        }
    }
    // check if hit wall
    if (snake[0].x < 0 || snake[0].x > 290 || snake[0].y < 0 || snake[0].y > 290) {
        return true;
    }
}

function main() {
    if (is_game_over()) {
        document.getElementById("scores").innerHTML = "Game Over";
        return;
    }
    if (scores === 899) {
        document.getElementById("scores").innerHTML = "Congratulation, you finish the game!";
        return;
    }
    setTimeout(function() {
        reset_canvas();
        draw_food();
        move_snake();
        draw_snake();
        main();
    }, 100);
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
let scores = 0;
let dx = 10;
let dy = 0;
let foodx;
let foody;
create_food_coordinate();
main();
document.addEventListener("keydown", change_direction);

