# ycha0313_9103_Tue02
## Ann Chang_Major design_530686257_individual work
### **Part 1: Interactive description of the work**
***
In my work, the user can interact with the animation by clicking on an empty plate on the screen. For example, each time the user clicks on an empty plate, the food immediately appears on the plate, and after another click, the food immediately disappears. When the user clicks on the numbers '1', '2' and '3' on the keyboard, the screen's background changes colour.

### **Part 2: Individual Animation Realisation & Uniqueness**
***
My choice for the animation effect was the use of interaction. In my design, I have animated the pills in the background and the food on the plate. The user can click on an empty plate to trigger the appearance of the food. This simulates the process of serving. This interaction design adds interest and increases user engagement. To implement this interactive experience, I mainly use keyPressed and mousePressed functions. In Group Code, we use SwitchType to sort food. However, during my work I realised that it would be easier to use the if function in the mousePressed function to achieve the appearance and disappearance of the food. Based on this, I made changes to the group code.

Also, in the original code for our group, we add noLoop(); to the set up function. This means that the plates, the food and the pills are displayed statically. In other group members' timers and Berlin Noise, the main moving objects are also static and cannot interact with the audience. So I tried to improve the animation and interactive design by triggering the dynamic presentation of the food and tablets through user clicks. This change not only enriched the interactivity of the page but also helped the user to have a more direct understanding of the theme that the work was trying to convey. While other group members' animations mainly involved displacing images, mine showed the process of creating something from nothing, which added visual vividness and interactive fun to our group work.

### **Part 3: Source of inspiration**
***
Each of these two paintings has its virtues. I took the layering of the painting from the first picture. I took the sharpness of the colours from the second image. The main feature of the first image is the progressive focusing of the circles towards the middle, with a very strong sense of layering. In my design, by adjusting the order in which the food appears, so that the original plate remains stationary, the food appears gradually in the centre of the plate. This design not only increases the visual focus of the user but also makes the image more three-dimensional. Additionally, the second image features bright colours and concentric circles, creating strong colour impact. I used this colour contrast to add a sense of contrast to the overall design, focusing on the plate and food.


![Circle](https://brendandawes.com/content/02-projects/ee/ee_manchester_closeup_001.png)

![Circle](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzv-bWXk5KNrSmOaofkAa4t6c1YKNE2cll78tW0yG6fOJq6dBtNN-SVjACATVOWPkZHydgukJ3w84yLxJBSDmv82l4TqrgwMdrauzw6NJtEg0iUioXTgvr7ujwWA2XIP4BhYp2ldStuFN3/s1600/3583.jpg)

### **Part 4: technical explanation**
***
In this section, I'll focus on the keyPressed and mousePressed functions, as they are key to interactive effects.

The keyPressed function allows the user to change the animation effect using the keyboard and is used to control the overall mode changes, such as background colour or switching between different page states.

```javascript
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
```
***
The mousePressed function is used to detect where the user has clicked on the mouse. If the user clicks on a "plate" in a certain area, it triggers the food to appear.

```javascript
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
  }
}
```