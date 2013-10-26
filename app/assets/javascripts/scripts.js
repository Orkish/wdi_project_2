////////// All Global Vars///////
// var svg;
var stuff; //IMPORTANT!!!!
var flight_data_ewr; //IMPORTANT!!!!
var flight_data_jfk;
var flight_data_lga;
var timer_ewr;
var timer_jfk;
var timer_lga;
var $airport_selector;
var $main_selection;

//--------------------

var counter = 0;
var newark_data = {};

function allAirports () {
    dataSwitchEwr();
    dataSwitchJfk();
    dataSwitchLga();
};




//******ON LOAD*******

$(function(){
  $("h1").hide();
  setTimeout(function(){
    $("h1").fadeIn("slow");
  }, 500);

  $("body").hide();
  setTimeout(function(){
    $("body").fadeIn(500);
  }, 200);



  $("#ajax-one").on("click", function(){
    counter = 0;
      var timer = setInterval(function(){ 
        $.ajax({
          url: '/flights/' + counter,
          method: "GET",
          dataType: "json"
        })
        .done(function(data){
          console.log(data);
          console.log(counter);
          newark_data["t" + counter] = data; 
          counter++;
          if (counter == 97) {
            clearInterval(timer);
          }
        });
      }, 600)

  })

  // d3.csv("/my_file.csv", function(data) {
  //   console.log(data);
  // })
  $("#ajax-two").on("click", function(){
    $.ajax({
      url: '/desperation',
      method: "GET"
    })
  })

  d3.json("/flights.json",function(data) {
    flight_data_ewr = data;
  })

  d3.json("/flights_jfk.json",function(jfk) {
    flight_data_jfk = jfk;
  })

  d3.json("/flights_lga.json",function(lga) {
    flight_data_lga = lga;
  })

  allAirports();

  // $("#ajax-two").on("click", function(){
  //   $.ajax({
  //     url: '/test2'
  //     method: "GET",
  //     dataType: "csv"
  //   })
  //   .done(function(data){
  //     console.log(data);
  //     console.log(counter);
  //     newark_data["t" + counter] = data; 
  //     counter++;
  //   });
  // })
});
//////////////// side nav legend //////////////////

$(document).ready(function(){
  $('#side-legend').hover(function(){
    animateLegendIn();
  }, function(){
    animateLegendOut();
  });
});

function animateLegendIn(){
  $side_legend = $('#side-legend');
  $side_legend.stop().animate({left: '0px', opacity: .7}, 1000, function(){
    $side_legend.addClass('active');
  });
};

function animateLegendOut(){
  $side_legend = $('#side-legend');
  $side_legend.stop().animate({left: '-90px', opacity: .5}, 1000)
  $side_legend.removeClass('active');
};

////////////// Background Trans ////////////////////


$(function() {


  setTimeout(function(){
    $('.transition').addClass('animate_white')
  }, 30000)
  setTimeout(function(){
    $('.transition').addClass('animate_black')
  }, 60000)
});


//////////////// Play/Stop Button /////////////////



// function button(){
//   $('#button').val(){
//     if(onoff == false){
//       $('#button').off();
//     } else{
//       $('#button').on();
//     }
//   }
// }
//////////////// D3 stuff ///////////////////////
// $(function(){
//   svg = d3.select("#flights-path")
//     .append("svg")
//     .attr("width", 500)
//     .attr("height", 1000);
// })




// function dataSwitch() {
//   clearInterval(timer)
//   var t = 0
//   timer = setInterval(function(){
//     console.log(t);
//     console.log(stuff[t]);
//     t++;
//     if (t == 97) {
//       clearInterval(timer)
//     }
//   },625)

// }

//////////////// Parallax /////////////////

/// check load page ///

//////////// Dropdown&restart menu //////////////


$(function(){
  $main_selection = $('#main-selection');
  $map = $('#map-div');
  
  function resetTrans(){
    $map.removeClass();
    $map.addClass("transition");
    setTimeout(function(){
      $map.addClass('animate_white');
    }, 30000);
    setTimeout(function(){
      $('.transition').addClass('animate_black');
    }, 60000);
  };
  

  $('#all-selection').on("click", function(){
    $main_selection.text("All Airports");
  });
  $('#ewr-selection').on("click", function(){
    $main_selection.text("Newark Int'l Airport")
  });
  $('#jfk-selection').on("click", function(){
    $main_selection.text("JFK Int'l Airport")
  });
  $('#lga-selection').on("click", function(){
    $main_selection.text("LaGuardia Airport")
  });

  $('#reset').on("click", function(){
    switch($main_selection.text()) {
      case "All Airports":
        console.log("you selected 0");
        clearInterval(timer_lga);
        clearInterval(timer_ewr);
        clearInterval(timer_jfk);
        dataSwitchJfk();
        dataSwitchLga();
        dataSwitchEwr();
        resetTrans();
        break;
      case "Newark Int'l Airport":
        console.log("you selected 1");
        clearInterval(timer_lga);
        clearInterval(timer_ewr);
        clearInterval(timer_jfk);
        dataSwitchEwr();
        resetTrans();
        break;
      case "JFK Int'l Airport":
        console.log("you selected 2");
        clearInterval(timer_lga);
        clearInterval(timer_ewr);
        clearInterval(timer_jfk);
        dataSwitchJfk();
        resetTrans();
        break;
      case "LaGuardia Airport":
        console.log("you selected 3");
        clearInterval(timer_lga);
        clearInterval(timer_ewr);
        clearInterval(timer_jfk);
        dataSwitchLga();
        resetTrans();
        break;
      }
  });
});

/////////////Index.html dropdown///////////////////
$(function(){
  


})
///////////////// timer ////////////////

function init ( )
{
  timeDisplay = document.createTextNode ( "" );
  document.getElementsByClass("timer-clock").appendChild ( timeDisplay );
}

function updateClock ( )
{
  var currentTime = new Date ( );

  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

  // Pad the minutes and seconds with leading zeros, if required
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  // Choose either "AM" or "PM" as appropriate
  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  // Convert the hours component to 12-hour format if needed
  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  // Convert an hours component of "0" to "12"
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  // Compose the string for display
  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

  // Update the time display
  document.getElementById("clock").firstChild.nodeValue = currentTimeString;
}








