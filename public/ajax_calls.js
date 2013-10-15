load index start animation
0 - 1
  -> ajax for 1-2
1 - 2
  -> ajax for 2-3


var data = {
  0: {}
  1: {}
  2: []
  3: []
}

var index = 0;
function fillData() {
  $.ajax({

  }).done(function() {
    index++;
    if(typeof data[index] != "undefined") {
      fillData();
    }
  })
}


setTimeout(function() {
  startAnimation()
}, 3000);

setInterval();