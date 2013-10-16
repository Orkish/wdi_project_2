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
  }, 500);


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
    }, 7000)
    setTimeout(function(){
      $('.transition').addClass('animate_black')
    }, 20000)
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







