var timer_count = 0;
var display_clock;

String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second parm
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = hours+':'+minutes // +':'+seconds;
    return time;
};

function clock() {
		display_clock = setInterval(function(){
			if (timer_count < 85500) {
			timer_count+= 900;
			var parsed_time = (timer_count).toString().toHHMMSS();
			console.log(parsed_time);
		}	else {
			kill();
			parsed_time = "0".toHHMMSS();
			console.log(parsed_time);
			timer_count = 0;
		}
	}, 937.5);
};

var kill = function(){
	clearInterval(display_clock);
};