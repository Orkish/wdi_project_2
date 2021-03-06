var svg = d3.select("#flight-paths")
    .append("svg")
    .attr("id", "routesjfk")
    .attr("width", 1200)
    .attr("height", 550);

var ewr_x = 365;
var ewr_y = 373;
var jfk_x = 925;
var jfk_y = 360;
var lga_x = 750;
var lga_y = 172;

function dataSwitchJfk() {
  clearInterval(timer_jfk);
  kill();
  var t = 0;
  timer_jfk = setInterval(function() {
        d3.select("#routesjfk").remove();
        var h = 550;
        var w = 1200;
        var startx = jfk_x;
        var starty = jfk_y;
        var dataset = flight_data_jfk[t];

        function getRandomInt (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

            var svg = d3.select("#flight-paths")
                .append("svg")
                .attr("id", "routesjfk")
                .attr("width", w)
                .attr("height", h);

            // var dataset = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5]

            var lines = svg.selectAll("line")
                .data(dataset)
                .enter()
                .append("svg:line");
                  
            lines.attr(
                "x1", startx)
                .attr("y1", starty)
                .attr("x2", startx)
                .attr("y2", starty)
                .style("stroke-width", 3)
                .style("opacity", 0.5)
                .style("stroke", function(d) {
                    if (d == 1) {
                        return "rgb(46, 204, 113)";
                    } else if (d == 2) {
                        return "rgb(241, 196, 15)";
                    } else if (d == 3) {
                        return "rgb(211, 84, 0)";
                    } else if (d == 4) {
                        return "rgb(142, 68, 173)";
                    } else if (d == 5) {
                        return "rgb(52, 152, 219)";
                    }  else {
                        console.log("try again");
                    }
                })
                    .transition()
                    .attr("transform", "translate")
                    .duration(700)
                    .attr("x2", function(d) {
                        if (d == 1) {
                            return -(Math.floor(Math.random()*(w-0+1)+0));
                        } else if (d == 2) {
                            return 2000; //(getRandomInt(2000, 5000)) // + 1000
                         } else if (d == 3) {
                            return 2000; //(getRandomInt(2000, 5000)) // + 1000
                         } else if (d == 4) {
                            return getRandomInt((startx + 500), 1000);  //(getRandomInt(2000, 5000)) // + 1000
                         } else if (d == 5) {
                            return getRandomInt(-(w - 200), (w + 100));  //(getRandomInt(2000, 5000)) // + 1000
                        } else {
                         return console.log("fail");
                            }
                        })
                        .attr("y2", function(d) {
                            if (d == 1) {
                                return getRandomInt(1000, -1000);
                            } else if (d == 2) {
                                return getRandomInt((starty + 200), -2200);
                            } else if (d == 3) {
                                return getRandomInt((starty + 800), -500);
                            } else if (d == 4) {
                                return getRandomInt((starty + 1300), 300);
                            } else if (d == 5) {
                                return getRandomInt((starty + 1300), 500);
                            } else {
                                return console.log("fail");
                                }
                            })
                        .each("end", function() {
                            d3.select(this)
                                .remove();
                            });
   
    t++;
    $('#timer-clock').html(parsed_time);
    if (t == 97) {
      clearInterval(timer_jfk);
      kill();
    }
  },937.5);

}

 
