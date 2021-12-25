var city1_image;
var image1,image2;
var people1,people2;

function preload()
{
	city1_image=loadImage("city 1.jpg")
	image1=loadImage("picture1.png")
	image2=loadImage("image2.png")
}

function setup() {
	createCanvas(1600, 700);

    people1=createSprite(1000,600)
	people1.addImage(image1)


	  

	 
  
}


function draw() {
  
  background(city1_image);


 drawSprites();
}



