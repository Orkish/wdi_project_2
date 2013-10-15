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
  	$.ajax({
  		url: '/flights',
  		method: 'GET',
  		dataType: 'json'
  	})
  	.done(function(data) {
  		console.log(data);
  		$('#response-one').append("<li>" + data.city + "</li>");
  		$('#response-one').append("<li>" + data.country + "</li>");
  		$('#response-one').append("<li>" + data.continent + "</li>");
  		$('#response-one').append("<li>" + data.departure + "</li>");
  	})

  })



});
