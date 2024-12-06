let h;
let m;
let s;

let cloudx = 100;
let cloudy = 100;

function setup() {
 
  createCanvas(800,400);
  

  let h = 95;
  let m = 153;
  let s = 200;
 
  
}

function draw() {
  background(197, 212, 222);


  noStroke();
  fill(99, 110, 99)
  triangle(200, 400, 600, 400, 400, 100);
  fill(223, 237, 224);
  triangle(400, 400, 600, 400, 500, 200);

  let s = int(millis()/1000);
  let m = int(s/60);
  let h = int(m/60);

  // loop
  let s1 = s%60
  let m1 = m%60
  let h1 = h%24

  //dongdekuaiyidian
  let s2 = map(s1,0,60,0,800);
  let m2 = map(m1,0,60,0,800);
  let h2 = map(h1,0,24,0,800);

  makeCloud1(h2, cloudy-50);
  makeCloud2(m2, cloudy+80);
  makeCloud3(s2, cloudy+30);


}


function makeCloud1(cloudx, cloudy) {
  fill(252, 254, 255)
  noStroke();
  // Main part of the cloud (center puff)
  ellipse(cloudx, cloudy, 120, 90); 
  
  // Left puffs
  ellipse(cloudx - 60, cloudy + 10, 90, 70); 
  ellipse(cloudx - 30, cloudy - 20, 100, 80);
  
  // Right puffs
  ellipse(cloudx + 60, cloudy + 10, 90, 70); 
  ellipse(cloudx + 30, cloudy - 20, 100, 80);
  
  // Lower puff for extra fluffiness
  ellipse(cloudx, cloudy + 30, 130, 70);
}
  




function makeCloud2(cloudx, cloudy) {
  fill(252, 254, 255)
  noStroke();
  // Main part of the smaller cloud
  ellipse(cloudx, cloudy, 100, 60); 
  
  // Left puff
  ellipse(cloudx - 40, cloudy +10, 80, 55); 
  
  // Right puff
  ellipse(cloudx + 40, cloudy + 25, 80, 55);
  
  // Lower puff for extra fluffiness
  ellipse(cloudx-10, cloudy + 30, 90, 70);
}


function makeCloud3(cloudx, cloudy) {
  fill(252, 254, 255);
  noStroke();
  ellipse(cloudx, cloudy, 70, 50);
  ellipse(cloudx + 10, cloudy + 10, 70, 50);
  ellipse(cloudx - 20, cloudy + 10, 70, 50);
}

