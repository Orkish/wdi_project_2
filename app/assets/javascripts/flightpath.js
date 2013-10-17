var svg = d3.select("#flight-paths")
    .append("svg")
    .attr("id", "routes")
    .attr("width", 1200)
    .attr("height", 550);


function dataSwitch() {
  clearInterval(timer);
  var t = 0;
  timer = setInterval(function() {
        d3.select("#routes").remove();
        var h = 550;
        var w = 1200;
        var startx = w/2;
        var starty = h/2;
        var dataset = flight_data[t];
        console.log(flight_data[t]);

        function getRandomInt (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

            var svg = d3.select("#flight-paths")
                .append("svg")
                .attr("id", "routes")
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
                .style("stroke-width", 2)
                .style("opacity", 0.5)
                .style("stroke", function(d) {
                    if (d == 1) {
                        return "rgb(52, 152, 219)";
                    } else if (d == 2) {
                        return "rgb(241, 196, 15)";
                    } else if (d == 3) {
                        return "rgb(211, 84, 0)";
                    } else if (d == 4) {
                        return "rgb(142, 68, 173)";
                    } else if (d == 5) {
                        return "rgb(46, 204, 113)";
                    }  else {
                        console.log("try again");
                    }
                })
                    .transition()
                    .attr("transform", "translate")
                    .duration(500)
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
                            });
                        // .each("end", function() {
                        //     d3.select(this)
                        //       .transition()
                        //       .duration(500)
                        //       .attr("opacity", 0);
                        //     });
                        
    t++;
    if (t == 97) {
      clearInterval(timer);
    }
  },625)

}



// function flightPaths (test_data) {

//         var h = 500;
//         var w = 1000; 
//         var startx = w/2;
//         var starty = h/2;
//         var dataset = test_data

//         function getRandomInt (min, max) {
//             return Math.floor(Math.random() * (max - min + 1)) + min;
//             }

//         var svg = d3.select("#flight-paths")
//             .append("svg")
//             .attr("width", w)   
//             .attr("height", h); 

        // var dataset = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5]

        // var lines = svg.selectAll("line")
        // .data(dataset)
        // .enter()
        // .append("svg:line");
              
        // lines.attr(
        //             "x1", startx)
        //             .attr("y1", starty)
        //             .attr("x2", startx)
        //             .attr("y2", starty)
        //             .style("stroke-width", 2)  
        //             .style("stroke", function(d) {
        //                     if (d == 1) {
        //                         return "rgb(52, 152, 219)"
        //                     } else if (d == 2) {
        //                         return "rgb(241, 196, 15)"
        //                     } else if (d == 3) {
        //                         return "rgb(211, 84, 0)"
        //                     } else if (d == 4) {
        //                         return "rgb(142, 68, 173)"
        //                     } else if (d == 5) {
        //                         return "rgb(46, 204, 113)"
        //                     }  else {
        //                         console.log("try again") 
        //                     } 
        //                     })    
        //             .transition()
        //             .attr("transform", "translate") 
        //             .duration(500)     
        //             .attr("x2", function(d) {
        //                 if (d == 1) {
        //                     return -(Math.floor(Math.random()*(w-0+1)+0))
        //                 } else if (d == 2) {
        //                     return 2000 //(getRandomInt(2000, 5000)) // + 1000
        //                  } else if (d == 3) {
        //                     return 2000 //(getRandomInt(2000, 5000)) // + 1000
        //                  } else if (d == 4) {
        //                     return getRandomInt((startx + 500), 1000)  //(getRandomInt(2000, 5000)) // + 1000
        //                  } else if (d == 5) {
        //                     return getRandomInt(-(w - 200), (w + 100) )  //(getRandomInt(2000, 5000)) // + 1000
        //                 } else {                           
        //                  return console.log("fail")
        //                     }  
        //                 })  
        //             .attr("y2", function(d) {
        //                 if (d == 1) {
        //                     return getRandomInt(1000, -1000)
        //                 } else if (d == 2) {
        //                     return getRandomInt((starty + 200), -2200)
        //                 } else if (d == 3) {
        //                     return getRandomInt((starty + 800), -500)
        //                 } else if (d == 4) {
        //                     return getRandomInt((starty + 1300), 300)
        //                 } else if (d == 5) {
        //                     return getRandomInt((starty + 1300), 500)
        //                 } else {                            
        //                     return console.log("fail")
        //                     }  
        //                 })
        //             .each("end", function() { 
        //                 d3.select(this).       
        //                   transition()
        //                         .duration(500)
        //                         .attr("opacity", 0)  
        //                         })

        //     }
                         
