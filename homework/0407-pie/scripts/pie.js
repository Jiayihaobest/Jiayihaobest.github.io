d3.csv('../data/我的宝贝US Michelin Star Restaurants.csv').then(data=>{


    let dataGroupbyCuisine=d3.groups(data,d=>d.Cuisine)
      
    dataGroupbyCuisine.sort((a,b)=>b[1].length-a[1].length)
    
    console.log(dataGroupbyCuisine)

    let filerData=[]
    dataGroupbyCuisine.slice(0,10).forEach(element => {
        filerData.push({
          'name':element[0],
          'count':element[1].length

        })

        
    });
    console.log(filerData)

    

    let width = 800,
      height = 800,
      margin = 50;
    let radius = Math.min(width, height) / 2 - margin

    let svg = d3.select("#vis")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width/2},${height/2})`);






    let color = d3.scaleOrdinal()
          .domain(filerData.map(d=>d.name))
          .range(d3.schemeSet3);



    let pie = d3.pie()
        .sort(null) 
        .value(d => {
        return d[1].count})

    let data_ready = pie(Object.entries(filerData))


    let arc = d3.arc()
        .innerRadius(radius * 0.5)       
        .outerRadius(radius * 0.8)

    let outerArc = d3.arc()
        .innerRadius(radius * 0.9)
        .outerRadius(radius * 0.9)


    svg
        .selectAll('.pie')
        .data(data_ready)
        .join('path')
        .attr('d', arc)
        .attr('fill', d => color(d.data[1].name))
        .attr("stroke", "white")
        .style("stroke-width", "2px")
        .style("opacity", 0.7)

    svg
          .selectAll('allLabels')
          .data(data_ready)
          .join('text')
          .style('font-size','.6em')
          .text(d => {

            return d.data[1].name+ ' '+d.data[1].count
          })
          .attr('transform', function(d) {
              let center = arc.centroid(d);
              center[0]+=20
              console.log(center)
              return `translate(${center})`;
          })
          .style('text-anchor', function(d) {
              let midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
              return (midangle < Math.PI ? 'start' : 'end')
          })
  
   
})//end of csv 