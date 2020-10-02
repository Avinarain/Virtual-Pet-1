var dog
var happyDog
var database
var foodS
var foodStock

function preload()
{
  this.image = loadImage("images/Dog.png")
  this.image = loadImage("images/happydog.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(200,200,10,10)
  dog.addImage("Dog.png")
  database=firebase.database()
foodStock=database.ref('Food')
foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happydog.png)
}



drawSprites();
  //add styles here

}
function readStock(data){
  foodS=data.val();

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}