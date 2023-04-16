d3.csv('./data/我的宝贝US Michelin Star Restaurants.csv').then(data=>{


  let dataGroupbyAwardState=d3.groups(data,d=>d.Award,d=>d.Location).reverse()
    
  console.log(dataGroupbyAwardState)

  let margin = {top: 30, right: 30, bottom: 70, left: 60},
        width = 1000 - margin.left - margin.right,
        height =600 - margin.top - margin.bottom;
    
   
  let svg = d3.select("#vis")
              .append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
              .append("g")
              .attr("transform", `translate(${margin.left},${margin.top})`);
          
    
    let xScale = d3.scaleBand()
      .range([ 0, width ])
      .padding(0.2);

    let xAxis= svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .attr("class", "xAxis")

    let yScale = d3.scaleLinear()
      .range([ height, 0]);

    let yAxis=svg.append("g")
        .attr("class", "yAxis")

    

    
    function drawUpdateBar(curData) {
    
      console.log(curData)

      // let mycolor=['red',sss]
      let colorScale=d3.scaleSequential().domain([0,10]).range(d3.schemeSet3)
      //reload xscale
      xScale.domain(curData.map(d=>d[0])) 

      yScale.domain([0,d3.extent(curData, d=>d[1].length)[1]])

      
        xAxis.call(d3.axisBottom(xScale))
        
        d3.select('.xAxis')
        .selectAll('.tick')
        .select('text')
        .attr('transform','rotate(-15)')
        .attr('font-size','.8em')
        .text(d=>d.slice(0,-5))
      
        yAxis.call(d3.axisLeft(yScale));
    

      let rects = svg.selectAll("rect")
        .data(curData)
       

    

      rects
        .join("rect")
        .attr("x", d => xScale(d[0]))
        .attr("y", d => height)
        .attr("width", xScale.bandwidth())
        .attr("height", 0)
        .transition()
        .duration(1000)
        .attr("x", d => xScale(d[0]))
        .attr("y", d => yScale(d[1].length))
        .attr("width", xScale.bandwidth())
        .attr("height", d => height - yScale(d[1].length))
        .attr("fill", (d,i)=>{
          
          return colorScale(i%10)
        })

      // rects.join('text')
      //   .attr("x", d => xScale(d[0])+10)
      //   .attr("y", d => yScale(d[1].length))
      //   .attr('font-size','.8em')
      //   .text(d=>d[1].length)
    
    }
    
    
    let curOption=1
    drawUpdateBar(dataGroupbyAwardState[curOption][1])
   
    d3.select('.change')
      .on('click',function(d){
        curOption=(curOption+1)%4
        if (curOption===0 ) curOption=1
       
        d3.select('.award')
          .html(dataGroupbyAwardState[curOption][0])
         
        drawUpdateBar(dataGroupbyAwardState[curOption][1])

      })
    

  })//end of csv
  
  d3.csv('./data/我的宝贝US Michelin Star Restaurants.csv').then(data=>{


  let dataGroupbyPriceState=d3.groups(data,d=>d.Price,d=>d.Location).reverse()
    
  console.log(dataGroupbyPriceState)

  let margin = {top: 30, right: 30, bottom: 70, left: 60},
        width = 1600 - margin.left - margin.right,
        height =600 - margin.top - margin.bottom;
    
   
  let svg = d3.select("#vis")
              .append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
              .append("g")
              .attr("transform", `translate(${margin.left},${margin.top})`);
          
    
    let xScale = d3.scaleBand()
      .range([ 0, width ])
      .padding(0.2);

    let xAxis= svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .attr("class", "xAxis")

    let yScale = d3.scaleLinear()
      .range([ height, 0]);

    let yAxis=svg.append("g")
        .attr("class", "yAxis")

    

    
    function drawUpdateBar(curData) {
    
      console.log(curData)

      //reload xscale
      xScale.domain(curData.map(d=>d[0])) 

      yScale.domain([0,d3.extent(curData, d=>d[1].length)[1]])

      
        xAxis.call(d3.axisBottom(xScale))
        
      let barScale=d3.scaleLinear()
        .domain(d3.extent(curData, d=>d[1].length))
        .range(['#E0FFFF','#0000FF'])




        d3.select('.xAxis')
        .selectAll('.tick')
        .select('text')
        .attr('transform','rotate(-15)')
        .attr('font-size','.8em')
        .text(d=>d.slice(0,-5))
      
        yAxis.call(d3.axisLeft(yScale));
    

      let rects = svg.selectAll("rect")
        .data(curData)
       

    

      rects
        .join("rect")
        .attr("x", d => xScale(d[0]))
        .attr("y", d => height)
        .attr("width", xScale.bandwidth())
        .attr("height", 0)
        .transition()
        .duration(1000)
        .attr("x", d => xScale(d[0]))
        .attr("y", d => yScale(d[1].length))
        .attr("width", xScale.bandwidth())
        .attr("height", d => height - yScale(d[1].length))
        .attr("fill", d=>barScale(d[1].length))

      // rects.join('text')
      //   .attr("x", d => xScale(d[0])+10)
      //   .attr("y", d => yScale(d[1].length))
      //   .attr('font-size','.8em')
      //   .text(d=>d[1].length)
    
    }
    
    
    let curOption=1
    drawUpdateBar(dataGroupbyPriceState[curOption][1])
   
    d3.select('.change')
      .on('click',function(d){
        curOption=(curOption+1)%4
        
       
        d3.select('.award')
          .html(dataGroupbyPriceState[curOption][0])
         
        drawUpdateBar(dataGroupbyPriceState[curOption][1])

      })
    

  })//end of csv 

    //This is pie js


    d3.csv('./data/我的宝贝US Michelin Star Restaurants.csv').then(data=>{


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