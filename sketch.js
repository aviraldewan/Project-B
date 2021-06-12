var canvas;
var database;
var f,l;

function preload()
{

}

function setup()
{
    canvas = createCanvas(displayWidth - 0.5,displayHeight - 111.5);
    database = firebase.database();

    f = new Form();
    l = new P();
}

function draw()
{
    background(150,150,255);

    f.display();
}