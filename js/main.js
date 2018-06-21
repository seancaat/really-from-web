// NAV
window.URLS = ["1-solitude.html",
           "3-another-mind.html",
           "4-lucid.html",
           ];
window.URL_COUNTER = 0;
window.MAX_URLS = window.URLS.length;

function navRight() {
  if(window.URL_COUNTER === 2) {
    window.location = window.URLS[0];
    return;
  } else {
    window.URL_COUNTER = window.URL_COUNTER + 1;
    window.location = window.URLS[window.URL_COUNTER];
  }
}

function navLeft() {
  if(window.URL_COUNTER === 0) {
    window.location = window.URLS[2];
    return;
  } else {
    window.URL_COUNTER = window.URL_COUNTER - 1;
    window.location = window.URLS[window.URL_COUNTER];
  }
}

function toggleNav() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}

// OPS
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}


// MOBILE
document.ontouchmove = function(event){
    event.preventDefault();
}


//function mapDist(value, a, b, c, d) {
//  return (value - a) * (d - c) / (b - a) + c;
//}