window.URL_COUNTER = 1;
var audio = new Audio('audio/3-quarrel.mp3');
audio.loop = true;
audio.play();

//console.log
var width = view.size.width;
var height = view.size.height;

var bg = new Path.Rectangle({
  from: [0,0],
  to: view.viewSize,
  fillColor: 'black'
});

var sizes = [
      new Size(290, 297),
      new Size(287, 312),
      new Size(287, 307),
      new Size(296, 224),
      new Size(156, 146),
      new Size(159, 157),
      new Size(147, 148),
      new Size(69, 72),
      new Size(77, 76),
      new Size(73, 73),
      new Size(17, 16),
      new Size(18, 16),
      new Size(16, 17)
    ];
var amount_multiplier = 2;

var r = [];

for (var i = 0; i < sizes.length * amount_multiplier; i++) {
  var a = 1;
  if(i < Math.floor(sizes.length * amount_multiplier / 2)) {
    a = 2;
  }
  var rect = new Path.Rectangle(new Point(width * Math.random(),
                                          height * Math.random() / a), 
                                sizes[Math.floor(Math.random() * sizes.length)]);
  rect.fillColor = 'black';
  rect.shadowColor = new Color(1,0,0,0.2);
  rect.shadowOffset = new Point(-15,15);
  rect.opacity = 0.4;
  r.push(rect);
}



function onFrame(event) {
  var quote_opacity =  document.getElementById("quote-p").style.opacity;
  var top_opacity = document.getElementById("top-p").style.opacity = "0.3";
  var bottom_opacity = document.getElementById("bottom-p").style.opacity = "0.3";
  
  var shadow_off_x = -1 * mapDist(d0.value, 0.5, 65);
  var shadow_off_y = mapDist(d1.value, 0.5, 65);
  var square_opacity = mapDist(d2.value, 0.3, 0.98);
  var translate_speed_q = mapDist(d3.value, 30, 120);
  bg.opacity = mapDist(d7.value, 0, 1);
  var shadow_opacity = mapDist(d6.value, 0.4, 1);
  var rotation = mapDist(d5.value, 0, 0.4);
  
  
  for (var i = 0; i < r.length; i++) {
    var item = r[i];
    
    item.shadowColor = new Color(1, 0, 0, shadow_opacity);
    
    item.opacity = square_opacity;
    item.shadowOffset = new Point(shadow_off_x,shadow_off_y);
    item.position.x += item.bounds.width / translate_speed_q;
    item.position.y += 0.17 * Math.sin(i + event.time / 20);
    
    if(i % 2 === 0) {
      item.rotate(-rotation);
    } else {
      item.rotate(rotation);
    }

    if (item.bounds.left > view.size.width) {
        item.position.x = -item.bounds.width;
    }
  }
}