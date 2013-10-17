<<<<<<< HEAD
////////// All Global Vars///////

var stuff; //IMPORTANT!!!!
=======
var fligth_data; //IMPORTANT!!!!
>>>>>>> 04b1765ee560b3ac66a02902c745c1cd1fea76af
var timer;
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
    stuff = data;
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
//////////////// D3 stuff ///////////////////////
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

$(document).ready(function() {
  $(window).scroll(function(e){
    parallax();
  });
  function parallax() {
    var scrolled = $(window).scrollTop();
    $('.bg').css('top', -(scrolled * 0.15) + 'px');
  }
});

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







