////////// All Global Vars///////
// var svg;
var stuff; //IMPORTANT!!!!
var flight_data; //IMPORTANT!!!!
var flight_data_jfk;
var timer;
var timer_jfk;
var $airport_selector;

//--------------------
var counter = 0;
var newark_data = {};

$(function(){
  $("h1").hide();
  setTimeout(function(){
  	$("h1").fadeIn("slow");
  }, 500);

  $("body").hide();
  setTimeout(function(){
  	$("body").fadeIn(2000);
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
    flight_data = data;
  })

  d3.json("/flights_jfk.json",function(jfk) {
    flight_data_jfk = jfk;
  })


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
  }, 2500)
  setTimeout(function(){
    $('.transition').addClass('animate_black')
  }, 50000)
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
  $('.restart-button').on('click', function(){
    $airport_selector = $("select[name=airportlist]").val();
    switch($airport_selector) {
      case "0":
        console.log("you selected 0");
        break;
      case "1":
        console.log("you selected 1");
        break;
      case "2":
        console.log("you selected 2");
        break;
      case "3":
        console.log("you selected 3");
        break;
    };
  });
})







