var data = [
  { name: 'N/C America', value: 319},
  { name: 'South America', value: 242},
	{ name: 'Europe', value: 807},
    { name: 'Asia', value: 665}, 

  { name: 'Africa', value: 309},
  { name: 'South America', value: 242},
  { name: 'Oceania', value: 106},  

];
var text = "";

var width = 330;
var height = 330;
var thickness = 70;

var radius = Math.min(width, height) / 2;

let color = d3.scaleOrdinal()
      .domain(["a", "b", "c", "d", "e", "f"])
      .range(["#fff", "blue" , "red", "red", "blue", "#fff"]);

var svg = d3.select("#chart")
.append('svg')
.attr('class', 'pie')
.attr('width', width)
.attr('height', height);

var g = svg.append('g')
.attr('transform', 'translate(' + (width/2) + ',' + (height/2) + ')');

var arc = d3.arc()
.innerRadius(radius - thickness)
.outerRadius(radius);

var pie = d3.pie()
.value(function(d) { return d.value; })

.sort(null);

var path = g.selectAll('path')
.data(pie(data))
.enter()
.append("g")

.on("mouseover", function(d) {
      let g = d3.select(this)
        .style("cursor", "pointer")
        .style("fill", "black")
        .append("g")
        .attr("class", "text-group");
 
      g.append("text")
        .attr("class", "name-text")
        .text(`${d.data.name}`)
        .attr('text-anchor', 'middle')
        .attr('dy', '-1.2em');
  
      g.append("text")
        .attr("class", "value-text")
        .text(`${d.data.value}`)
        .attr('text-anchor', 'middle')
        .attr('dy', '.6em');
    })
  .on("mouseout", function(d) {
      d3.select(this)
        .style("cursor", "none")  
        .style("fill", color(this._current))
        .select(".text-group").remove();
    })
  .append('path')
  .attr('d', arc)
  .attr('fill', (d,i) => color(i))
  .on("mouseover", function(d) {
      d3.select(this)     
        .style("cursor", "pointer")
        .style("fill", "black");
    })
  .on("mouseout", function(d) {
      d3.select(this)
        .style("cursor", "none")  
        .style("fill", color(this._current));
    })
  .each(function(d, i) { this._current = i; });


g.append('text')
  .attr('text-anchor', 'middle')
  .attr('dy', '.35em')
  .text(text);


//inView//


