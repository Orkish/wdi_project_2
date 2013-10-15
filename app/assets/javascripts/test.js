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
