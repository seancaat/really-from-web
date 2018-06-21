var width = view.viewSize.width;
var height = view.viewSize.height; 

var pts = [];

makeHandles();

function onResize(event) {
  pts = [];
  makeHandles();  
}

function makeHandles() {
  if (width > height) {
    var size = new Size(width / 4, height / 2);
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 2; j++) {
        var point = new Point(i * width / 4, j * height / 2);
        var r = new Rectangle(point, size);
        pts.push(r.center);
      }
    }
    console.log(pts.length);  
  } else {
    var size = new Size(width / 2, height / 4);
    for (var i = 0; i < 2; i++) {
      for (var j = 0; j < 4; j++) {
        var point = new Point(i * width / 2, j * height / 4);
        var r = new Rectangle(point, size);
        pts.push(r.center);
      }
    }
    console.log(pts.length);
  }
}

function onMouseMove(event) {
  d0.value = pts[0].getDistance(event.point);
  d1.value = pts[1].getDistance(event.point);
  d2.value = pts[2].getDistance(event.point);
  d3.value = pts[3].getDistance(event.point);
  d4.value = pts[4].getDistance(event.point);
  d5.value = pts[5].getDistance(event.point);
  d6.value = pts[6].getDistance(event.point);
  d7.value = pts[7].getDistance(event.point); 
  
  mouseX = event.point.x;
  mouseY = event.point.y;
}