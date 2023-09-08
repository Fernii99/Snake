let foodPosX;
let foodPosY;
let moveLeft;
let moveRight;
let moveUp;
let moveDown;
let teclaPulsada;
let snake = [];

const PLAYING = 0;
const GAME_OVER = 1;
let gameState;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const intervalID = setInterval(partida, 100 );

class Snake {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
  }
  
  getPosX() {
    return this.posX;
  }

  getPosY() {
    return this.posY;
  }
}

function initSnake(){
  
  const cabezaSnake = new Snake(snakePosX, snakePosY);
  snake.push(cabezaSnake);

}

/* Dibujar el Snake */
function drawSnake(snakePosX, snakePosY) {
  ctx.fillStyle = "black";
  for( i in snake ){
    //console.log("snake x: " + snake[0].posX);
    //onsole.log("snake y: " + snake[0].posY);
    ctx.fillRect(snake[i].posX, snake[i].posY, 20, 20);
  }

}

  /* Dibujar comida */
function drawFood() {

    ctx.fillStyle = "red";
    ctx.fillRect( foodPosX, foodPosY, 20, 20);
  
}

function partida(){
    comer();
    snakeMovement();
    gameLimits();
}

function comer(){
    //console.log("posx: " + foodPosX);
    //console.log("comida ypos: " + foodPosY);
    if(foodPosX === snake[0].posX && foodPosY === snake[0].posY)
    {
      console.log("come");
        /*if(moveLeft) {
          
        }

        else if(moveRisnakght) {
          
        }

        else if(moveUp) {

        }

        else if(moveDown) {
          
        }*/
        const cabezaSnake = new Snake(snake[snake.length - 1].posX + 20, snake[snake.length - 1].posY + 20);  
        snake.push(cabezaSnake);
        console.log(cabezaSnake);

        comidaRandom();

    }

}

function comidaRandom(){
  foodPosX = Math.round((Math.random()*(780-10)+10)/20)*20;
  foodPosY = Math.round((Math.random()*(580-10)+10)/20)*20;
}

function generateSnakeRandom(){
  snakePosX = Math.round((Math.random()*(780-10)+10)/20)*20;
  snakePosY = Math.round((Math.random()*(580-10)+10)/20)*20;
}

function snakeMovement(){
  if(moveLeft){
    console.log(snake);
    for( i in snake ){
      let snakePosX;
      if(i == 0){
        snake[i].posX = snake[i].posX - 20;
      } else{
        snakePosX = snake[i-1].posX;
        snake[i].posX = snake[i].snakePosX - 20;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawSnake(snakePosX, snakePosY);
      drawFood();
    }
  }
  else if(moveRight)
  {
    for( i in snake ){
      let snakePosX;
      if(i == 0){
        snake[i].posX = snake[i].posX + 20;
      } else{
        snakePosX = snake[i-1].posX;
        snake[i].posX = snake[i].snakePosX + 20;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawSnake(snakePosX, snakePosY);
      drawFood();
    }
  }
  else if(moveUp)
  {
    for( i in snake ){
      let snakePosY;
      if(i == 0){
        snake[i].posY = snake[i].posY - 20;

      } else{
        snakePosY = snake[i-1].posY;
        snake[i].posY = snake[i-1].snakePosY - 20;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawSnake(snakePosX, snakePosY);
      drawFood();
    }
  }
  else if(moveDown)
  {
      for( i in snake ){
        let snakePosY;
        if(i == 0){
          snake[i].posY = snake[i].posY + 20;

        } else{
          snakePosY = snake[i-1].posY;
          snake[i].posY = snake[i-1].snakePosY + 20;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawSnake(snakePosX, snakePosY);
        drawFood();
      }
  }
}

    document.addEventListener('keydown', (event) => {
        teclaPulsada = event.key;

        switch(teclaPulsada){
          case "ArrowLeft":
            
            moveLeft = true;
            moveRight = false;
            moveUp = false;
            moveDown = false;
            break;
    
          case "ArrowRight":
            
            moveRight = true;
            moveLeft = false;
            moveUp = false;
            moveDown = false;

            break;
    
          case "ArrowUp":
            
            moveUp = true;
            moveRight = false;
            moveLeft = false;
            moveDown = false;
            break;
    
        case "ArrowDown":
            
            moveDown = true;
            moveRight = false;
            moveUp = false;
            moveLeft = false;
            
            break;
        }

    
    }, false );
  

  /* Mover  el Snake */
  

window.addEventListener("load", (event) => {
    initGame();
});

function renderGameOver(){
  ctx.font = '50px arial';
  ctx.fillText("Game Over", 250, 250);
}



function gameLimits(){
  if(snake[0].posX >= 800 || snake[0].posX < 0 || snake[0].posY >= 600 || snake[0].posY < 0){
    console.log("game over");
    renderGameOver();
    clearInterval(intervalID);
  }
}

function initGame(){

    generateSnakeRandom();
    comidaRandom();
    initSnake();
    gameState = PLAYING;


    moveLeft = false;
    moveRight = false;
    moveUp = false;
    moveDown = false;

    drawSnake(snakePosX, snakePosY);
    drawFood();

}


    
