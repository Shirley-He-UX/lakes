var gravity =0.2;
var particles=[];
var rslider1;
var rslider2;
var gslider1;
var gslider2;
var bslider1;
var bslider2;
var ball;

function Particle(x,y,colors,r){
  this.x=x;
  this.y=y;
  this.colors=colors;
  this.yspeed=0;
  this.r=r;
  this.update=function(){
    this.y +=this.yspeed;
    this.yspeed +=this.r/100;
    
    if(this.y>height){
      this.y = height;
      this.yspeed*=this.r/200-1;
    }
  }
  this.show = function(){
    noStroke();
    fill(this.colors);
    ellipse(this.x,this.y,random(this.r));
  }
}


function setup() {
  createCanvas(windowWidth,windowHeight);
   rslider1=createSlider(0,255,30);
   rslider2=createSlider(0,255,100);
   gslider1=createSlider(0,255,200);
   gslider2=createSlider(0,255,255);
   bslider1=createSlider(0,255,100);
   bslider2=createSlider(0,255,255);
   
   
   ball=createSlider(width/400,width/24,width/40);
   ball.position(10,30);
   ball.style("z-index","1000");
   
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
function mouseDragged(){
  particles.push(
      new Particle(
        mouseX,
        mouseY,
        color(round(random(rslider1.value(),rslider2.value())),round(random(gslider1.value(),gslider2.value())),round(random(bslider1.value(),bslider2.value()))),
        ball.value()
        )
      );
}

function draw() {
   rslider1.html(0,rslider2.value(),10);
   fill(255);
   text("R:"+rslider1.value()+","+rslider2.value()+"   G:"+gslider1.value()+","+gslider2.value()+"   B:"+bslider1.value()+","+bslider2.value(),20,20);

   
   rslider2.html(rslider1.value(),255,rslider1.value());
   gslider1.html(0,gslider1.value(),10);
   gslider2.html(rslider1.value(),255,gslider1.value());
   bslider1.html(0,bslider1.value(),10);
   bslider2.html(rslider1.value(),255,bslider1.value());
    background(0,100);
    for(var i=0;i<particles.length;i++){
      particles[i].update();
      particles[i].show();
    }
    
  for(var i=0;i<touches.length;i++){
    var singleTouch=touches[i];
    particles.push(
      new Particle(
        singleTouch.x,
        singleTouch.y,
        color(round(random(rslider1.value(),rslider2.value())),round(random(gslider1.value(),gslider2.value())),round(random(bslider1.value(),bslider2.value()))),
        ball.value()
        )
      );
  }
}