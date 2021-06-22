// Initialize the canvas and graphics content
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

let fortyfive = document.getElementById("fortyfive")
let sixty = document.getElementById("sixty")
let twomins = document.getElementById("twomins")

let snow = [];
for (let n = 1; n <= 75; n++) {
    snow.push(randomsnow());
}

// Draw Snowflake
function draw() {
    // Clear Canvas
    ctx.clearRect(0, 0, cnv.width, cnv.height)

    // Fill Canvas
    background("black")

    for (let i = 0; i < snow.length; i++) {
        moveSnow(snow[i]);
        drawsnow(snow[i]);
    }
    
    requestAnimationFrame(draw);
}

// Snowflake structure
function snowflake (initX, initY, initR, initColor) {
    return {
    x: initX,
    y: initY,
    r: initR,
    color: initColor
    }
}

// 
function randomsnow(){
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        r: randomInt(5, 15),
        color: "white"
        };
}
   
function drawsnow(aSnowflake) {
    fill(aSnowflake.color);
    circle(aSnowflake.x, aSnowflake.y, aSnowflake.r, "fill");
}


function moveSnow(aSnowflake) {
    aSnowflake.x += randomInt(0, 0)
    aSnowflake.y += randomInt(4, 1)
    if (aSnowflake.y > cnv.height) {

    }
}

// Add new snowflake
function addSnow(){
    snow.push(randomsnow());
}


// Event Listeners
document.addEventListener("click", clickHandler);
document.addEventListener("keydown", keydownHandler)

function clickHandler() {
    // Click - Add a new random snowflake
        addSnow();
    } 

    
function keydownHandler(){
    // Down Arrow - Remove the last snowflake
    snow.pop();
    }


fortyfive.addEventListener('click', fortyfivesec)  
sixty.addEventListener('click', sixtysec)  
twomins.addEventListener('click', TwoMins)  

function fortyfivesec() {
    setInterval(addSnow, 45)   
    draw();
}

function sixtysec() {
    setInterval(addSnow, 60)   
    draw();
}

function TwoMins() {
    setInterval(addSnow, 120)   
    draw();
}