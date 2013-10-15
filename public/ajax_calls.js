load index start animation
0 - 1
  -> ajax for 1-2
1 - 2
  -> ajax for 2-3


var data = {
  flight_0: [],
  flight_1: [],
  flight_2: [],
  flight_3: [],
  flight_4: [],
  flight_5: [],
  flight_6: [],
  flight_7: [],
  flight_8: [],
  flight_9: [],
  flight_10: [],
  flight_11: [],
  flight_12: [],
  flight_13: [],
  flight_14: [],
  flight_15: [],
  flight_16: [],
  flight_17: [],
  flight_18: [],
  flight_19: [],
  flight_20: [],
  flight_21: [],
  flight_22: [],
  flight_23: [],
  flight_24: [],
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