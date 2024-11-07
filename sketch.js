let limecakeVisible = false; // Control whether the lime cake is displayed
let lightdonutVisible = false;
let darkdonutVisible = false;
let burgerVisible = false;
let pizzaVisible = false;
let sushiVisible = false;

//I want to change the background by number1、2、3
let operationMode = "still"; // Initial mode
let bgColor = [255, 216, 216]; // The initial background color is pink

//Create a plate array to store the positions of the outermost circles of the plates.
let plates = [
  //The outermost layer of plates elements
  { x: 0.135, y: 0.13 ,type:1},
  { x: 0.43, y: 0.07 ,type:2},
  { x: 0.73, y: 0.008 ,type:3},
  { x: 0.07, y: 0.4 ,type:4},
  { x: 0.35, y: 0.34 ,type:3},
  { x: 0.63, y: 0.27 ,type:5},
  { x: 0.93, y: 0.2 ,type:5},
  { x: -0.02, y: 0.67 ,type:5},
  { x: 0.27, y: 0.62 ,type:6},
  { x: 0.56, y: 0.55 ,type:7},
  { x: 0.85, y: 0.48 ,type:2},
  { x: 0.16, y: 0.89 ,type:7},
  { x: 0.46, y: 0.85 ,type:2},
  { x: 0.76, y: 0.77 ,type:1},
  { x: 1.05, y: 0.71 ,type:4},
  { x: 0.65, y: 1.07 ,type:5},
  { x: 0.95, y: 1.0 ,type:1},
];

let foods = [
  //The outermost layer of food elements
  { x: 0.135, y: 0.13 ,type:1},
  { x: 0.43, y: 0.07 ,type:2},
  { x: 0.73, y: 0.008 ,type:3},
  { x: 0.07, y: 0.4 ,type:4},
  { x: 0.35, y: 0.34 ,type:3},
  { x: 0.63, y: 0.27 ,type:5},
  { x: 0.93, y: 0.2 ,type:5},
  { x: -0.02, y: 0.67 ,type:5},
  { x: 0.27, y: 0.62 ,type:6},
  { x: 0.56, y: 0.55 ,type:7},
  { x: 0.85, y: 0.48 ,type:2},
  { x: 0.16, y: 0.89 ,type:7},
  { x: 0.46, y: 0.85 ,type:2},
  { x: 0.76, y: 0.77 ,type:1},
  { x: 1.05, y: 0.71 ,type:4},
  { x: 0.65, y: 1.07 ,type:5},
  { x: 0.95, y: 1.0 ,type:1},
];

let capsules = []; 
// The array that stores all the capsules,
// I want her to appear on the back of the plate and the food

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  // Make sure the canvas is a smaller value of the window width and height, 
  //keeping it square
  let side = min(windowWidth, windowHeight);
  resizeCanvas(side, side);
  background(bgColor);
  
  // Go through the capsule array and draw all the capsules
  for (let i = 0; i < 0.6*side; i++) {
    let x = random(0, 1);
    let y = random(0, 1);

   // The color associated with the medicine
   // Color of the upper and lower parts of the capsule
   let color1 = color(255, 152, 129 );
   let color2 = color(254, 254, 162 );
   // Tablet color
   let color3 = color(139, 195, 219)
   let color4 = color(255)

   // Generating random Angle
   let angle = random(TWO_PI);

   // Draw capsules and tablets
   drawCapsule(x, y, 0.25*side, side, color1, color2, angle);
    
   //medicine
   fill(color3);
   noStroke();
   circle((x+0.1)*side, (y+0.1)*side, 0.015*side)
    
   fill(color4);
   circle((x+0.05)*side, (y+0.07)*side, 0.01*side)
  }

  // Plate profile size
  let PlateRadius = 0.265 * side;/////////
  
  // Use the for loop to draw each plate
  //Since I want the image to appear after clicking, 
  //So in the part I just give the plates' positions, rather than food position
  for (let i = 0; i < plates.length; i++) {
    let plate = plates[i];
    //Brush initialization
    noFill();
    noStroke();
    //Position the plate
    switch (plate.type){
      case 1:
        drawPinkPlate(plate.x, plate.y, PlateRadius,side)
      break;
      case 2:
        drawYellowPlate(plate.x, plate.y, PlateRadius,side)
      break;
      case 3:
        drawPurplePlate(plate.x, plate.y, PlateRadius,side)
      break;
      case 4:
        drawBluePlate(plate.x, plate.y, PlateRadius,side)
      break;
      case 5:
        drawGreenPlate(plate.x, plate.y, PlateRadius,side)
      break;
      case 6:
          drawHotpot(plate.x, plate.y, 0.265,side)
      break;
      case 7:
        drawRainbowPlate(plate.x, plate.y, PlateRadius,side)
      break;
    }
  }
}

// Draw the function of the capsule
function drawCapsule(x, y, r, side, color1, color2, angle) {
  // Saves the current coordinate system state
  push();
  // Move to the center of the capsule and rotate the coordinate system
  translate(x*side, y*side); // I used width and height to position the coordinates
  rotate(angle);
  
  drawSemiCircle(0, -0.04 * side, 0.05 * r, PI / 2, color1);
  rect(0, -0.04 * side - 0.02 * r, 0.05 * r, 0.04 * r);
  drawSemiCircle(0, -0.04 * side - 0.08 * r, 0.05 * r, 3 * PI / 2, color2);
  rect(0, -0.04 * side - 0.06 * r, 0.05 * r, 0.04 * r);
  
  // Restore the original coordinate system state
  pop();
}

// Function to draw a plate
// Function to draw a pink plate
function drawPinkPlate(x,y,r,side){
  // Pink floral pattern function
  function drawPinkFlower(x, y) {
    let side = min(windowWidth, windowHeight);
    let PlateRadius = 0.265 * side;
    noStroke();
    fill(255, 205, 205);
    rect(x, y, 0.06 * PlateRadius, 0.12 * PlateRadius, 10);
    rect(x, y, 0.12 * PlateRadius, 0.06 * PlateRadius, 10);
    fill(255);
    circle(x, y, 0.03 * PlateRadius);
  }

  // Pink floral plate 
  noStroke();
  fill(233, 167, 165);
  circle(x * side, y * side, r);
  
  fill(255);
  circle(x* side, y * side, 0.95 * r);
  
  stroke(233, 167, 165);
  strokeWeight(3);
  noFill();
  circle(x * side, y * side, 0.65 * r);
  
  // Draw 8 flowers around the center point
  for (let i = 0; i < 8; i++) {
    let angle = TWO_PI * i / 8; // Each flower is spaced 1/8 circumference apart
    let px = (x * side) + (0.4 * r) * cos(angle); // Calculate the x-coordinate of the flower
    let py = (y * side) + (0.4 * r) * sin(angle); // Calculate the y-coordinate of the flower
    drawPinkFlower(px, py); // draw flowers
  }
  
  // What I want to do here is use the if function. 
  // My expected effect is to click on the screen and the limecake will appear. 
  // So the condition here is to draw the limecake if the limecake is visible
  if (limecakeVisible) {
    // Place the lime cake in the center of the plate
    drawLimeCake(x, y, r, side); 
  }
  //In the following code, there are also many if functions like this. 
  //So, I will not explain too much about this fuction
}

// Function to draw a yellow plate
function drawYellowPlate(x,y,r,side){

  noStroke();
  fill(253, 224, 161);
  circle(x*side, y*side,r);
  
  fill(255, 243, 217);
  circle(x*side, y*side, 0.95 * r);

  fill(242, 183, 101 );
  circle(x*side, y*side, 0.65 * r);
  
  for (let i = 0; i < 4; i++) {
    let angle = (TWO_PI * i / 4) + ((PI / 4)); // Each circle is spaced 1/4 circle apart and rotated from 4/PI
    let yx = (x*side) + (0.4 * r) * cos(angle);
    let yy = (y*side) + (0.4 * r) * sin(angle);
    circle(yx, yy, 0.1 * r);
  }

  drawRhombus(x*side + r*0.4, y*side, 0.04* side, 0.02 * side, 0, color(242, 183, 101));
  drawRhombus(x*side - r*0.4, y*side, 0.04* side, 0.02 * side, 0, color(242, 183, 101));
  drawRhombus(x*side , y*side- r*0.4, 0.02* side, 0.04 * side, 0, color(242, 183, 101));
  drawRhombus(x*side , y*side+ r*0.4, 0.02* side, 0.04 * side, 0, color(242, 183, 101));

  if (lightdonutVisible) {
    drawLightDonut(x, y, r, side);
  }
}

//Function to draw a green plate
function drawGreenPlate(x,y,r,side){
  noStroke();
  fill(193, 217, 170);
  circle(x*side,y*side, r);
  
  noFill();
  stroke(227, 246, 203);
  strokeWeight(5);
  circle(x*side,y*side, 0.85 * r);
  
  fill(255);
  stroke(227, 246, 203);
  strokeWeight(3);
  circle(x*side,y*side, 0.70 * r);
  
  // Here I want to call the leaf pattern function and draw the leaves in different positions
  for (let i = 0; i < 4; i++) {
    let angle = TWO_PI * i /4; // Each flower is spaced 1/4 circumference apart
    let gx = (x*side) + (0.43 * r) * cos(angle); // Calculate the x-coordinate
    let gy = (y*side) + (0.43 * r) * sin(angle); // Calculate the y-coordinate
    drawLeafPattern(gx, gy); 
  }
  
  // Create a leaf pattern function
  function drawLeafPattern(centerX, centerY) {
    let side = min(windowWidth, windowHeight);
    let PlateRadius = 0.265 * side;
    fill(227, 246, 203);
    noStroke();

    let width = 0.13 * PlateRadius;  // Fixed leaf width
    let height = 0.05 * PlateRadius; // Fixed leaf height

    // Calculate the coordinates of the two ellipses from centerX and centerY
    let x1 = centerX - 0.015 * PlateRadius; // The x-coordinate of the first ellipse
    let x2 = centerX + 0.023 * PlateRadius; // The x-coordinate of the second ellipse
    let y1 = centerY - 0.005 * PlateRadius; // The x-coordinate of the third ellipse
    let y2 = centerY + 0.005 * PlateRadius; // The x-coordinate of the forth ellipse

    // Draw two rotating elliptical leaves
    drawRotatedEllipse(x1, y1, width, height, PI / 4); 
    drawRotatedEllipse(x2, y2, width, height, PI / 1.6);
  }
  
  if (sushiVisible) {
    drawSushi(x, y, r, side);
  }
}
 
//Draw the function of the blue plate
function drawBluePlate(x,y,r,side) {
  noStroke();
  fill(170, 211, 215);
  circle(x * side, y * side, r);
  
  fill(220, 243, 254 );
  circle(x * side, y * side, 0.95 * r);

  noFill();
  stroke(139, 195, 219);
  strokeWeight(5);
  circle(x * side, y * side, 0.75 * r);
  
  fill(255);
  stroke(170, 211, 215);
  strokeWeight(4);
  circle(x * side, y * side, 0.65 * r);

  if (burgerVisible) {
    drawBurger(x, y, r, side); 
  }
}

//Draw the function of the purple plate
function drawPurplePlate(x,y,r,side) {
  noStroke();
  fill(230, 216, 241);
  circle(x*side, y*side, r);
  
  fill(247, 236, 255);
  circle(x*side, y*side, 0.82 * r);

  fill(255);
  stroke(218, 192, 242);
  strokeWeight(4);
  circle(x*side, y*side, 0.63 * r);
  
  // Draw 4 flowers around the center point
  for (let i = 0; i < 4; i++) {
    let angle = TWO_PI * i /4; // Each flower is spaced 1/4 circumference apart
    let px = (x*side) + (0.4 * r) * cos(angle);
    let py = (y*side) + (0.4 * r) * sin(angle);
    drawPurpleFlower(px, py);
  }
  
  // Purple floral pattern function
  function drawPurpleFlower(px, py) {
    noStroke();
    fill(218, 192, 242);
    rect(px, py, 0.06 * r, 0.12 * r);
    rect(px, py, 0.12 * r, 0.06 * r,);
    fill(247, 236, 255);
    rect(px, py, 0.03 * r, 0.03 * r,);
  }

  if (darkdonutVisible) {
    drawDarkDonut(x, y, r, side);
  }
}

// Draw a rainbow plate function
function drawRainbowPlate(x,y,r,side) {
  noStroke();
  fill(170, 211, 215);
  circle(x*side,y*side, r);
  
  fill(220, 243, 254 );
  circle(x*side,y*side, 0.95 * r);

  noFill();
  stroke(255, 205, 205);
  strokeWeight(4);
  circle(x*side,y*side, 0.85 * r);
  
  fill(255);
  stroke(253, 224, 161);
  strokeWeight(4);
  circle(x*side,y*side, 0.725 * r);

  if (pizzaVisible) {
    drawPizza(x, y, r, side);
  }
}

// Draw the hotpot function
function drawHotpot(x, y, r, side) {
  // Multiply the scale value by side to get the specific pixel coordinates
  x *= side;
  y *= side;
  r *= side;

  // Silver pot
  noStroke();
  fill(160);
  circle(x, y, r);
  circle(x - 0.12 * side, y, 0.2 * r);
  circle(x + 0.12 * side, y, 0.2 * r);

  // Hot pot soup
  drawSemiCircle(x, y, 0.92 * r, 0, color(219, 128, 89));
  drawSemiCircle(x, y, 0.92 * r, PI, color(200, 95, 95));
  drawSemiCircle(x, y - 0.23 * r, 0.46 * r, PI, color(219, 128, 89));
  drawSemiCircle(x, y + 0.23 * r, 0.46 * r, 0, color(200, 95, 95));

  // The bottom of the tomato pan on the right
  fill(218, 86, 63);
  circle(x, y - 0.07 * side, 0.32 * r);
  drawStar(x, y - 0.07 * side, 0.06 * r, color(119, 221, 81));
  fill(218, 86, 63);
  circle(x + 0.07 * side, y - 0.02 * side, 0.32 * r);
  drawStar(x + 0.07 * side, y - 0.02 * side, 0.06 * r, color(119, 221, 81));

  // orange on the left pot
  fill(255, 220, 89);
  circle(x - 0.072 * side, y + 0.02 * side, 0.32 * r);
  stroke(219, 128, 89);
  strokeWeight(1);
  for (let i = 0; i < 8; i++) {
    let angle = i * (PI / 4);
    let lineX = x - 0.072 * side + 0.16 * r * cos(angle);
    let lineY = y + 0.02 * side + 0.16 * r * sin(angle);
    line(x - 0.072 * side, y + 0.02 * side, lineX, lineY);
  }

  // Cucumber with vegetable
  noStroke();
  fill(212, 255, 139);
  circle(x - 0.083 * side, y - 0.05 * side, 0.13 * r);
  circle(x - 0.05 * side, y + 0.08 * side, 0.13 * r);
  circle(x, y + 0.03 * side, 0.13 * r);

  // Yellow ball with meat
  fill(255, 220, 89);
  circle(x + 0.015 * side, y + 0.08 * side, 0.09 * r);
  circle(x + 0.06 * side, y - 0.08 * side, 0.09 * r);
  circle(x + 0.09 * side, y + 0.04 * side, 0.08 * r);

  // bubble in the background of hotpot
  noFill();
  stroke(255);
  strokeWeight(2);
  circle(x + 0.03 * side, y + 0.04 * side, 0.08 * r);
  circle(x - 0.01 * side, y - 0.02 * side, 0.06 * r);
  circle(x - 0.07 * side, y - 0.08 * side, 0.05 * r);
  circle(x - 0.02 * side, y + 0.1 * side, 0.07 * r);
  circle(x + 0.07 * side, y + 0.08 * side, 0.04 * r);
}

// The following code are the functions that draws food
// Draw a lime cake function
function drawLimeCake(x,y,r,side) {
  fill(255, 245, 221);
  stroke(251, 234, 189);
  strokeWeight(0.015*r);
  square(x*side, y*side,0.33*r);

  // Big dark green circle
  //Here, I want to use light green and dark green to present the shadow of lime
  // because I want to add more layer effects for this image
  fill(141, 180, 97);
  noStroke();
  circle(x*side-0.012*side, y*side-0.012*side, 0.09*r);
  circle(x*side+0.012*side, y*side+0.012*side, 0.09*r);
  circle(x*side+0.012*side, y*side-0.012*side, 0.09*r);  
  //light green big circle
  fill(191, 221, 158);
  circle(x*side-0.012*side, y*side+0.012*side, 0.09*r);
  circle(x*side+0.012*side, y*side-0.012*side, 0.09*r);  
  //light green small circle
  circle(x*side-0.011*side, y*side-0.013*side, 0.08*r); 
  circle(x*side+0.013*side, y*side+0.011*side, 0.08*r);  
  //dark green small circle
  fill(141, 180, 97);
  circle(x*side+0.013*side, y*side-0.013*side, 0.08*r); 
  circle(x*side-0.011*side, y*side+0.011*side, 0.08*r);  
  //use rectangle to make the lines on the surface of the cake
  fill(251, 234, 189);
  noStroke();
  drawRotatedRectangle(x*side+0.015*side, y*side-0.031*side,0.04*r, 0.015*r,-PI/3)
  drawRotatedRectangle(x*side-0.025*side, y*side-0.031*side,0.04*r, 0.015*r,-PI/4)
  drawRotatedRectangle(x*side-0.023*side, y*side+0.031*side,0.04*r, 0.015*r,PI/3)
  drawRotatedRectangle(x*side+0.03*side, y*side+0.030*side,0.04*r, 0.015*r,PI/2)
  drawRotatedRectangle(x*side-0.03*side, y*side,0.04*r, 0.015*r,PI/3)
  drawRotatedRectangle(x*side+0.03*side, y*side-0.01*side,0.04*r, 0.015*r,PI/3)
  drawRotatedRectangle(x*side, y*side+0.03*side,0.04*r, 0.015*r,-PI/3)
}

//Draw a function for a light colored doughnut
function drawLightDonut(x,y,r,side) {
  stroke(230, 165, 59);
  strokeWeight(0.14*r);
  noFill();
  circle(x*side+0.004*side, y*side, 0.3*r);
  stroke(251, 209, 141);
  circle(x*side, y*side, 0.3*r);

  // Blue frosting
  fill(124, 162, 242);
  noStroke();
  circle(x*side+0.04*side, y*side, 0.04*r);
  circle(x*side-0.04*side, y*side+0.03*side, 0.04*r);
  circle(x*side-0.03*side, y*side-0.02*side, 0.04*r);
  circle(x*side+0.04*side, y*side+0.03*side, 0.04*r);
  
  //yellow frosting
  fill(252, 244, 9);
  noStroke();
  circle(x*side-0.03*side, y*side,0.04*r);
  circle(x*side+0.03*side, y*side-0.02*side,0.04*r);
  circle(x*side-0.02*side, y*side-0.04*side,0.04*r);
  circle(x*side+0.004*side, y*side+0.035*side,0.04*r);

  //green frosting
  fill(135, 204, 104);
  noStroke();
  circle(x*side, y*side-0.045*side,0.04*r);
  circle(x*side+0.045*side,y*side-0.02*side,0.04*r);
  circle(x*side+0.02*side, y*side+0.04*side,0.04*r);
  circle(x*side-0.01*side, y*side+0.05*side,0.04*r);
  
  //red frosting
  fill(208, 113, 113);
  noStroke();
  circle(x*side-0.046*side,y*side+0.005*side,0.04*r);
  circle(x*side-0.02*side,y*side+0.03*side,0.04*r);
  circle(x*side+0.025*side,y*side+0.023*side,0.04*r);
  circle(x*side+0.023*side,y*side-0.037*side,0.04*r);
}

//Draw a function for dark donuts
function drawDarkDonut(x,y,r,side) {
  stroke(78, 55, 17);
  strokeWeight(0.14*r);
  noFill();
  circle(x*side, y*side, 0.3*r)
  
  fill(124, 162, 242);
  noStroke();
  circle(x*side+0.04*side, y*side, 0.03*r);
  circle(x*side-0.04*side, y*side+0.03*side, 0.03*r);
  circle(x*side-0.03*side, y*side-0.02*side, 0.03*r);
  circle(x*side+0.04*side, y*side+0.03*side, 0.03*r);
  
  fill(252, 244, 9);
  noStroke();
  circle(x*side-0.03*side, y*side,0.03*r);
  circle(x*side+0.03*side, y*side-0.02*side,0.03*r);
  circle(x*side-0.02*side, y*side-0.04*side,0.03*r);
  circle(x*side+0.004*side, y*side+0.035*side,0.03*r);

  fill(135, 204, 104);
  noStroke();
  circle(x*side, y*side-0.045*side,0.03*r);
  circle(x*side+0.045*side,y*side-0.02*side,0.03*r);
  circle(x*side+0.02*side, y*side+0.04*side,0.03*r);
  circle(x*side-0.01*side, y*side+0.05*side,0.03*r);
  
  fill(208, 113, 113);
  noStroke();
  circle(x*side-0.046*side,y*side+0.005*side,0.03*r);
  circle(x*side-0.02*side,y*side+0.03*side,0.03*r);
  circle(x*side+0.025*side,y*side+0.023*side,0.03*r);
  circle(x*side+0.023*side,y*side-0.037*side,0.03*r);
}

// Draw the function of the hamburger
function drawBurger(x,y,r,side) {
  //green leaves of the burger
  noStroke();
  fill(166, 221, 155);
  circle(x*side, y*side, 0.5*r);
  //bread
  stroke(233, 187, 104);
  strokeWeight(0.02*r);
  fill(252, 217, 150);
  circle(x*side, y*side, 0.38*r);
 // sesame on the surface of the burger(use ellipse to create)
 noStroke();
 fill(255);
 ellipse(x*side+0.04*side, y*side, 0.016*r,0.03*r);
 ellipse(x*side-0.02*side, y*side+0.03*side,0.016*r,0.03*r);
 ellipse(x*side-0.03*side, y*side-0.02*side,0.016*r,0.03*r);
 ellipse(x*side+0.02*side, y*side+0.03*side, 0.016*r,0.03*r);
 ellipse(x*side,y*side+0.01*side,0.016*r,0.03*r);
 ellipse(x*side+0.02*side, y*side, 0.016*r,0.03*r);
 ellipse(x*side+0.01*side, y*side+0.02*side, 0.016*r,0.03*r);
 ellipse(x*side-0.005*side, y*side+0.04*side, 0.016*r,0.03*r);
 ellipse(x*side-0.003*side, y*side-0.02*side, 0.016*r,0.03*r);
 ellipse(x*side+0.01*side, y*side-0.03*side, 0.016*r,0.03*r);
 ellipse(x*side+0.005*side, y*side-0.01*side, 0.016*r,0.03*r);
 ellipse(x*side+0.02*side, y*side-0.017*side, 0.016*r,0.03*r);
 ellipse(x*side-0.02*side, y*side, 0.016*r,0.03*r);
 ellipse(x*side-0.04*side, y*side+0.01*side, 0.016*r,0.03*r);
 ellipse(x*side-0.015*side, y*side-0.035*side, 0.016*r,0.03*r);
 ellipse(x*side+0.03*side, y*side-0.027*side, 0.016*r,0.03*r);
 ellipse(x*side+0.035*side, y*side+0.02*side, 0.016*r,0.03*r);
}

//Draw a function for pizza
function drawPizza(x,y,r,side) {
  noStroke();
  fill(248, 185, 103);
  circle(x*side, y*side, 0.66*r);
  fill(255, 238, 194);
  circle(x*side, y*side, 0.57*r);
   
  //sausage on the pizza
  fill(190, 67, 67);
  noStroke();
  circle(x*side+0.05*side, y*side, 0.09*r);
  circle(x*side+0.04*side, y*side-0.04*side, 0.09*r);
  circle(x*side, y*side-0.06*side, 0.09*r);
  circle(x*side-0.04*side, y*side-0.04*side, 0.09*r);
  circle(x*side-0.045*side, y*side+0.04*side, 0.09*r);
  circle(x*side+0.04*side, y*side+0.04*side, 0.09*r);
  circle(x*side-0.003*side, y*side-0.01*side, 0.09*r);  
  circle(x*side-0.058*side, y*side, 0.09*r);  
  circle(x*side, y*side+0.03*side, 0.09*r);  
  circle(x*side, y*side+0.063*side, 0.09*r);  
  circle(x*side-0.03*side, y*side+0.015*side, 0.09*r); 
                        
  //mushroom on the pizza
  fill(114, 89, 89)
  circle(x*side-0.03*side, y*side-0.01*side, 0.05*r); 
  circle(x*side+0.02*side, y*side-0.01*side, 0.05*r); 
  circle(x*side-0.022*side, y*side+0.04*side, 0.05*r); 
  circle(x*side-0.062*side, y*side+0.025*side, 0.05*r);
  circle(x*side, y*side+0.01*side, 0.05*r); 
  circle(x*side-0.01*side, y*side-0.035*side, 0.05*r); 
  circle(x*side-0.025*side, y*side-0.06*side, 0.05*r); 
  circle(x*side-0.025*side, y*side+0.06*side, 0.05*r); 
  circle(x*side-0.06*side, y*side-0.025*side, 0.05*r); 
  circle(x*side+0.025*side, y*side+0.02*side, 0.05*r); 
  circle(x*side+0.055*side, y*side+0.025*side, 0.05*r); 
  circle(x*side+0.05*side, y*side-0.02*side, 0.05*r); 
  circle(x*side+0.015*side, y*side-0.03*side, 0.05*r); 
  circle(x*side+0.015*side, y*side+0.045*side, 0.05*r); 
  circle(x*side+0.023*side, y*side-0.05*side, 0.05*r); 
  circle(x*side+0.03*side, y*side+0.06*side, 0.05*r); 
 
  //Use the way to make prisms to make scallions
  drawRhombus(x*side-0.04*side, y*side-0.02*side,0.03*r, 0.07*r,PI/4, color(182, 215,136)) 
  drawRhombus(x*side-0.05*side, y*side+0.02*side,0.03*r, 0.07*r,-PI/4, color(182, 215,136)) 
  drawRhombus(x*side+0.015*side, y*side+0.008*side,0.03*r, 0.07*r,PI/4, color(182, 215,136)) 
  drawRhombus(x*side+0.03*side, y*side+0.008*side,0.03*r, 0.07*r,-PI/3, color(182, 215,136)) 
  drawRhombus(x*side+0.01*side, y*side-0.042*side,0.03*r, 0.07*r,PI/2.5, color(182, 215,136)) 
  drawRhombus(x*side+0.03*side, y*side-0.06*side,0.03*r, 0.07*r,-PI/2.5, color(182, 215,136)) 
  drawRhombus(x*side-0.017*side,y*side- 0.02*side,0.03*r, 0.07*r,PI/8, color(182, 215,136)) 
  drawRhombus(x*side-0.014*side,y*side+ 0.05*side,0.03*r, 0.07*r,PI/8, color(182, 215,136))
  drawRhombus(x*side-0.017*side, y*side+0.025*side,0.03*r, 0.07*r,PI/8, color(182, 215,136)) 
  drawRhombus(x*side-0.015*side,y*side+0.005*side,0.03*r, 0.07*r,-PI/4, color(182, 215,136)) 
  drawRhombus(x*side+0.068*side,y*side+0.005*side,0.03*r, 0.07*r,PI/7, color(182, 215,136)) 
  drawRhombus(x*side+0.065*side, y*side-0.02*side,0.03*r, 0.07*r,-PI/6, color(182, 215,136)) 
  drawRhombus(x*side+0.03*side, y*side-0.02*side,0.03*r, 0.07*r,-PI/6, color(182, 215,136)) 
  drawRhombus(x*side-0.02*side, y*side-0.045*side,0.03*r, 0.07*r,PI/6, color(182, 215,136)) 
  drawRhombus(x*side+0.017*side, y*side+0.03*side,0.03*r, 0.07*r,-PI/6, color(182, 215,136)) 
  drawRhombus(x*side+0.018*side,y*side+0.065*side,0.03*r, 0.07*r,PI, color(182, 215,136)) 
  drawRhombus(x*side+0.06*side, y*side+0.038*side,0.03*r, 0.07*r,PI/5, color(182, 215,136)) 
}

//Draw the sushi function
function drawSushi(x,y,r,side) {
  // Nori rice
  fill(255);
  stroke(60);
  strokeWeight(0.013*r);
  circle(x*side-0.027*side, y*side-0.027*side, 0.2*r);
  circle(x*side+0.027*side, y*side+0.027*side, 0.2*r);
  circle(x*side+0.027*side, y*side-0.027*side, 0.2*r);
  circle(x*side-0.027*side, y*side+0.027*side, 0.2*r);
  circle(x*side-0.027*side, y*side+0.027*side, 0.2*r);  
  //Red ingredient
  noStroke();
  fill(230, 132, 105)
  circle(x*side-0.027*side, y*side-0.027*side, 0.09*r);
  circle(x*side+0.027*side, y*side+0.027*side, 0.09*r);
  circle(x*side+0.027*side, y*side-0.027*side, 0.09*r);  
  circle(x*side-0.027*side, y*side+0.027*side, 0.09*r);  
  circle(x*side-0.027*side, y*side+0.027*side, 0.09*r);  
  //dark green ingredient
  fill(110, 192, 77)
  circle(x*side-0.038*side, y*side-0.022*side, 0.045*r);
  circle(x*side+0.038*side, y*side+0.022*side, 0.045*r);
  circle(x*side+0.038*side, y*side-0.022*side, 0.045*r);  
  circle(x*side-0.038*side, y*side+0.022*side, 0.045*r);  
  //yellow ingredient
  fill(255, 243, 77)
  circle(x*side-0.033*side, y*side-0.039*side, 0.045*r);
  circle(x*side+0.033*side, y*side+0.039*side, 0.045*r);
  circle(x*side+0.033*side, y*side-0.039*side, 0.045*r);  
  circle(x*side-0.033*side, y*side+0.039*side, 0.045*r);  
  //light green ingredient
  fill(200, 241, 135)
  circle(x*side-0.039*side, y*side-0.032*side, 0.045*r);
  circle(x*side+0.039*side, y*side+0.032*side, 0.045*r);
  circle(x*side+0.039*side, y*side-0.032*side, 0.045*r);  
  circle(x*side-0.039*side, y*side+0.032*side, 0.045*r);  
}

// A function that draws shapes
// Draws a function for rotating an ellipse
function drawRotatedEllipse(cx, cy, w, h, angle) {
  push();               // Save current coordinate system
  translate(cx, cy);    // Move the origin to the center of the ellipse
  rotate(angle);        // Rotating coordinate system
  ellipse(0, 0, w, h);  // Draws an ellipse in a rotating coordinate system
  pop();                // Recovery coordinate system
}

// Plot the function of the diamond
function drawRhombus(cx, cy, width, height, angle, fillColor) {
  // Calculate the four vertices of the diamond
  let halfWidth = width / 2;
  let halfHeight = height / 2;

  // Vertex coordinates
  let x1 = cx;
  let y1 = cy - halfHeight; // top

  let x2 = cx + halfWidth; // right
  let y2 = cy;

  let x3 = cx;
  let y3 = cy + halfHeight; // bottom

  let x4 = cx - halfWidth; // left
  let y4 = cy;

  // Rotate coordinates
  let points = [
    createVector(x1, y1),
    createVector(x2, y2),
    createVector(x3, y3),
    createVector(x4, y4),
  ];

  for (let p of points) {
    let xOffset = p.x - cx;
    let yOffset = p.y - cy;

    // use sin/cos to createRotation coordinates 
    p.x = cx+ xOffset * cos(angle) - yOffset * sin(angle);
    p.y = cy+ xOffset * sin(angle) + yOffset * cos(angle);
  }

  // Diamond drawing
  noStroke();
  fill(fillColor);
  beginShape();
  for (let p of points) {
    vertex(p.x, p.y);
  }
  endShape(CLOSE);
}

// Draw the function of the pentagram
function drawStar(centerX, centerY, d, fillColor) {
  fill(fillColor);
  noStroke();

  // Calculate the 10 vertex coordinates of the pentagram
  let outerRadius = d; // The radius of the outer vertex
  let innerRadius = d * 0.382;

  beginShape();

  for (let i = 0; i < 10; i++) {
    // Alternate the radius of the outer and inner vertices
    let radius = i % 2 === 0 ? outerRadius : innerRadius;
    // Calculates the Angle of the current vertex
    let angle = PI / 2 + (TWO_PI * i) / 10; // Starting at the top, draw each vertex clockwise

    // Calculate vertex coordinates
    let x = centerX + radius * cos(angle);
    let y = centerY - radius * sin(angle); // Use -sin to fit the standard Y-axis orientation

    vertex(x, y); // Add vertex
  }
  endShape(CLOSE);
}

// Draw a semicircle function
function drawSemiCircle(centerX, centerY, straightEdgeLength, angle, fillColor) {
  fill(fillColor);
  noStroke();

  // Angular transformation is applied by rotating the matrix
  push();
  translate(centerX, centerY); // Move to the center of the semicircle
  rotate(angle); // Rotation specified Angle

  // Draw half circle
  arc(0, 0, straightEdgeLength, straightEdgeLength, -PI / 2, PI / 2, PIE); // Draw a semicircle from the right

  pop(); // Recovery coordinate system
}

// Draw a rotating rectangle function
function drawRotatedRectangle(x, y, w, h, angle) {
  push();
  // Move the origin to the center of the rectangle
  translate(x, y);
  // Apply the rotation Angle
  rotate(angle);
  rect(0, 0, w, h);
  // Restore the original coordinate system state
  pop();
}

// Handle click events to control the display of food
function mousePressed() {
  // The radius of the plate is calculated only once
  let plateRadius = 0.265 * min(width, height);

  // Go through all the plates and check if the mouse click is within the area of the plate
  for (let i = 0; i < plates.length; i++) {
    let plate = plates[i];
    let plateX = plate.x * width; 
    let plateY = plate.y * height;
    
    // Determine if the click is in the plate area and it is a pink plate (assuming type === 1)
    // After a simple query on the p5.js website，I know that&& is the logical AND operator (AND) 
    // that determines whether two conditions are both true
    if (dist(mouseX, mouseY, plateX, plateY) <= plateRadius && plate.type === 1) {
      limecakeVisible = !limecakeVisible; // Toggle the visibility of lime cake
      break; // Once you click on the pink plate, switch and jump out of the loop
    }
    //The same goes for the following code. 
    //Click on different colored plates to display the corresponding food

    if (dist(mouseX, mouseY, plateX, plateY) <= plateRadius && plate.type === 2) {
      lightdonutVisible = !lightdonutVisible; 
      break;
    }
    
    if (dist(mouseX, mouseY, plateX, plateY) <= plateRadius && plate.type === 3) {
      darkdonutVisible = !darkdonutVisible;
      break;
    }
   
    if (dist(mouseX, mouseY, plateX, plateY) <= plateRadius && plate.type ===4) {
      burgerVisible = !burgerVisible;
      break;
    }
    
    if (dist(mouseX, mouseY, plateX, plateY) <= plateRadius && plate.type ===7) {
      pizzaVisible = !pizzaVisible;
      break;
    }
    
    if (dist(mouseX, mouseY, plateX, plateY) <= plateRadius && plate.type ===5) {
      sushiVisible = !sushiVisible;
      break;
    }
  }
}

// I chose 3 colors to replace the background
// The user only needs to press 1, 2, 3 on the keyboard to switch
function keyPressed() {
  if (key == "1") {
    // When press 1, switch to the pink background
    operationMode = "still";
    bgColor = color(255, 182, 193); //pink background
    capsules = [];  // Empty the capsule array
  }
  if (key == "2") {
    // When press 2, switch to the green background
    operationMode = "interactive";
    bgColor = color(144, 238, 144);  // green background
    capsules = [];
  }
  if (key == "3") {
    // When press 3, switch to the blue background
    operationMode = "moving";
    bgColor = color(173, 216, 230);  // blue background
    capsules = [];
  }
}