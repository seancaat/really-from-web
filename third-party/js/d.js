var d0 = {value: 0};
var d1 = {value: 0};
var d2 = {value: 0};
var d3 = {value: 0};
var d4 = {value: 0};
var d5 = {value: 0};
var d6 = {value: 0};
var d7 = {value: 0};

function mapDist(value, c, d) {
  if (canvas.width > canvas.height) {
    return (value - 0) * (d - c) / (canvas.width * 0.8 - 0) + c;  
  } else {
    return (value - 0) * (d - c) / (canvas.height * 0.8 - 0) + c;  
  }
}