
var chartData = [
	{ name: 'Asia',    value: 46},
	{ name: 'Europe',    value: 53},
	{ name: 'Africa',    value: 54},
	{ name: 'SA',    value: 10},
	{ name: 'N/C A',    value: 35},
	{ name: 'Oceania',    value: 11},
];
	var margin = {
			top: 1,
			right: 30,
			bottom: 40,
			left: 50
		}

var tooltip = d3.select('body').append('div')
	.style('position', 'absolute')
	.style('background', 'black')
	.style('border', '2px #000 solid')
	.style('opacity', '0')

var chart = d3.select( '#content' )
  .append( 'svg' )
	.attr( 'width' , '400' )
    .attr( 'height' , '380' )
		.append( 'g' )
		.attr( 'transform' , 'translate(50,-200)' );  



var bars = chart.selectAll( 'rect' ).data( chartData );

bars.enter()
  .append( 'rect' )
    .attr( 'width' , '50' )
    .attr( 'fill' , '#fff' )
    .attr( 'height' , function(d) { return d.value * 5 })  
    .attr( 'x' , function(d,i) { return i * 50 })            
    .attr( 'y' , function(d) { return 500 - d.value * 5 })

	.on('mouseover', function(d){
		tooltip.transition()
			.style('opacity', 1)
			tooltip.html(d.value + " Teams")
				.style('left', (d3.event.pageX)+'px')
				.style('top', (d3.event.pageY+'px'))
					d3.select(this).style('opacity', 1)
				})
				.on('mouseout', function(d){
					tooltip.transition()
						.style('opacity', 0)
					d3.select(this).style('opacity', 1)
				})





var labels = chart.selectAll( 'text' ).data( chartData );


labels.enter()
	.append( 'text' )
	.text( function(d) { return d.name })
	.attr( 'y' , 530 )
	.attr( 'x' , function(d,i) { return i * 50 + 25 });  

