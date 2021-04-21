const particles = [];

function setup(){

  var myDiv = document.getElementById('backdrop');
  var myHeight = parseInt(myDiv.style.height);

  var can = createCanvas(window.innerWidth, 760);
  can.parent('backdrop');



  //makes ammount of particles depending on window size
  const particlesLength = Math.floor(window.innerWidth/17);
  for(let i = 0; i < particlesLength; i++){
    particles.push(new Particle());
  }
}

function draw(){
  background(0, 0, 0);
  particles.forEach((p, index) =>{
    p.update();
    p.draw();
    p.checkParticles(particles.slice(index));
  });
}

class Particle {
  constructor(){
    // Position - random up to width and height of window/canvas
    this.pos = createVector(random(width), random(height));

    // Velocity - between -2 an 2 negative is y axis
    this.vel = createVector(random(-2, 2), random(-2, 2))

    // Size
    this.size = 10;
  }

  // Update movement by adding velocity
  update(){
    this.pos.add(this.vel);
    this.edges();
  }

  // Draw single particle
  draw(){
    noStroke();
    fill('rgba(255, 255, 255, 0.5)');
    circle(this.pos.x, this.pos.y, this.size);
  }

  // Detect edges
  edges(){
    if(this.pos.x < 0 || this.pos.x > width){
      this.vel.x *= -1; //switch direction
    }

    if(this.pos.y < 0 || this.pos.y > height){
      this.vel.y *= -1; //switch direction
    }
  }

  // Connect patricles
  checkParticles(particles){
    particles.forEach(particle => {
      const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);

      if(d < 120){
        stroke('rgba(255,255,255,0.1)');
        line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      }
    });
  }
}
