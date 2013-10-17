$.each(newark_data, function(keys_1){
  $.each(newark_data[keys_1], function(keys_2){
    console.log(newark_data[keys_1][keys_2]);
  });
})

var q = 0;
var data;

var timer = setInterval(function(){
	data = newark_data["t" + q]["flights"]);
	console.log(data);
	q++;
	if (q == 97) {
		clearInterval(timer);
	}
},300);

var q = 0
while (q < 10) {
	setTimeout(function(){
		q++;
		return newark_data["t" + q]["flights"];
	},300);
}

var q = 21;
var timer = setInterval(fuck,300);



function fuck(){
	q++;
	if (q == 97) {
		clearInterval(timer);
	}
	var x = newark_data["t" + q]["flights"];
	return x;
}


var data;
var q = 21;

function test(){
	data = newark_data["t" + q]["flights"]
	q++;
	if (q == 97){
		clearInterval(timer)
	}
	console.log(data)
}

var timer = setInterval(test,300)

