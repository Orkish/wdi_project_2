$(function(){
   $("h1").hide();
   setTimeout(function(){
    $("h1").fadeIn("slow");
   }, 1500);
});

$(function(){
  $("body").hide();
  setTimeout(function(){
    $("body").fadeIn(2000);
  }, 1500);
});

// var width = Math.max(960, window.innerWidth),
//     height = Math.max(500, window.innerHeight);

// var tiler = d3.geo.tile()
//     .size([width, height]);

// var projection = d3.geo.mercator()
//     .center([-74.0064, 40.7142])
//     .scale((1 << 21) / 2 / Math.PI)
//     .translate([width / 2, height / 2]);

// var path = d3.geo.path()
//     .projection(projection);

// var svg = d3.select("body").append("svg")
//     .attr("width", width)
//     .attr("height", height);

// svg.selectAll("g")
//     .data(tiler
//       .scale(projection.scale() * 2 * Math.PI)
//       .translate(projection([0, 0])))
//   .enter().append("g")
//     .each(function(d) {
//       var g = d3.select(this);
//       d3.json("http://" + ["a", "b", "c"][(d[0] * 31 + d[1]) % 3] + ".tile.openstreetmap.us/vectiles-highroad/" + d[2] + "/" + d[0] + "/" + d[1] + ".json", function(error, json) {
//         g.selectAll("path")
//             .data(json.features.sort(function(a, b) { return a.properties.sort_key - b.properties.sort_key; }))
//           .enter().append("path")
//             .attr("class", function(d) { return d.properties.kind; })
//             .attr("d", path);
//       });
//     });