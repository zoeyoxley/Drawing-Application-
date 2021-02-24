function setup() {
  createCanvas(windowWidth, windowHeight);
  d = select('.div-block');
  d.position(0,0);
  gui=new Gui();
  
  let gui_setup = new dat.GUI();
  gui_setup.add(gui, 'r',0,255);
  gui_setup.add(gui, 'g',0,255);
  gui_setup.add(gui, 'b',0,255);
   gui_setup.add(gui, 'stroke', 1, 50);
  gui_setup.add(gui,'opacity',10,255);
  gui_setup.add(gui,'bColor');
 
   background(gui.bColor);
}
function draw(){
 
  
}

  
function mouseDragged() 
{ 
  stroke(gui.r, gui.g, gui.b,gui.opacity);
	strokeWeight(gui.stroke);
	line(mouseX, mouseY, pmouseX, pmouseY);

}

function Gui(){
  this.r = 255;
  this.g = 255;
  this.b = 255;
  this.stroke = 10;
  this.opacity=255;
  this.bColor='#00000';
  
}
