var form ;
var player;
var game;
var database;
var GameState=0
var playerCount=0

function setup() {
    createCanvas(400,400)
    database=firebase.database()
    game=new Game()
    game.getState()
    game.start() 
}

function draw() {



}