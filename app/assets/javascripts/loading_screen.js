
$(function () {

	$("#load-button").on('click', function() {
		$("#content-to-move").animate({
			top: "-=300px",
			color: '#ffffff'
		},"slow", function () {
			$("#instructions").fadeToggle("slow");
			$("#load-button").replaceWith("<div id='load-button2'><a href='/index' class='btn btn-block btn-lg btn-danger'>Take off!</a></div>");
		});
		$("#splash").animate({
			color: '#bdc3c7',
			opacity: '0.3'
		},"slow");
		$("#load-text").animate({
			color: '#bdc3c7',
			opacity: '0.3'
		},"slow");
	});


});


