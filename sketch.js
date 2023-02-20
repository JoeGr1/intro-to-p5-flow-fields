//create empty array for starting points.
const points = [];
const mult = 0.005;

function setup() {
  //create cnavas and set backgroundcolor
  createCanvas(windowWidth, windowHeight);
  background(30);
  noiseDetail(1);

  const density = 60;
  const space = width / density;

  //looop creating starting points
  for (let x = 0; x < width; x += space) {
    for (let y = 0; y < height; y += space) {
      //create vector for each point

      const p = createVector(x, y);
      points.push(p);
    }
  }
}

function draw() {
  noStroke();
  fill(245, 245, 220);

  for (let i = 0; i < points.length; i++) {
    //angle each point will move
    const angle = map(
      noise(points[i].x * mult, points[i].y * mult),
      0,
      1,
      0,
      720
    );

    //add vector to points based on angle
    points[i].add(createVector(cos(angle), sin(angle)));

    //create each point
    ellipse(points[i].x, points[i].y, 2);
  }
}
