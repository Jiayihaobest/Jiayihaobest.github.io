d3.csv("./data/gapminder.csv").then(function(data) {
 const width = document.querySelector("#chart").clientWidth;
    const height = document.querySelector("#chart").clientHeight;

    
    const svg = d3.select("#chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height);


    
    let filtered_data = data.filter(function(d) {

        return d.country === 'Italy';

    });



    const gdpPercap = {
        
        min: d3.min(filtered_data, function(d) { return +d.gdpPercap; }),
        max: d3.max(filtered_data, function(d) { return +d.gdpPercap; })

    };

   
    const margin = {
        top: 50, 
        left: 100, 
        right: 50, 
        bottom: 100
    };

    const xScale = d3.scaleBand()
        .domain(["1952","1957","1962","1967","1972","1977","1982","1987","1992","1997","2002","2007"])
        .range([margin.left, width - margin.right])
        .padding(0.5);

    const yScale = d3.scaleLinear()
        .domain([4500, gdpPercap.max])
        .range([height - margin.bottom, margin.top]);

    

    const xAxis = svg.append("g")
        .attr("class","axis")
        .attr("transform", `translate(0,${height-margin.bottom})`)
        .call(d3.axisBottom().scale(xScale));

    const yAxis = svg.append("g")
        .attr("class","axis")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft().scale(yScale));


   
    const points = svg.selectAll("rect")
        .data(filtered_data)
        .enter()
        .append("rect")
            .attr("x", function(d) { return xScale(d.year); })
            .attr("y", function(d) { return yScale(d.gdpPercap); })
            .attr("width", xScale.bandwidth())
            .attr("height", function(d) { return height - (margin.bottom + yScale(d.gdpPercap)) })
            .attr("fill", "pink");
    
    const xAxisLabel = svg.append("text")
        .attr("class","axisLabel")
        .attr("x", width/2)
        .attr("y", height-margin.bottom/2)
        .text("Year");

    const yAxisLabel = svg.append("text")
        .attr("class","axisLabel")
        .attr("transform","rotate(-90)")
        .attr("x", -height/2)
        .attr("y", margin.left/2)
        .text("gdpPercap (Years)");

});
