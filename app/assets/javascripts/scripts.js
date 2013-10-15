$(function(){
  $("h1").hide();
  setTimeout(function(){
  	$("h1").fadeIn("slow");
  }, 1500);

  $("body").hide();
  setTimeout(function(){
  	$("body").fadeIn(2000);
  }, 1500);


  $("#ajax-one").on("click", function(){
  	var counter = 0;

    $(function(){
      while (counter < 96) 
      $.ajax({
        url: '/flights'
        method: "GET"
        dataType: "json"
        success: function(data){
          console.log(data);
          counter++;
        }
      })
      .done(function(data){
        console.log(data);
      });
    });
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
  $side_legend.stop().animate({left: '0px', opacity: .9}, 1000, function(){
    $side_legend.addClass('active');
  });
};

function animateLegendOut(){
  $side_legend = $('#side-legend');
  $side_legend.stop().animate({left: '-90px', opacity: .5}, 1000)
  $side_legend.removeClass('active');
}














