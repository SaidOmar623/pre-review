import React from 'react';
import * as d3 from 'd3';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const BarChart = (props) => {
    let mobiles = useSelector(state => state.products.items);

    let years = mobiles.map(d => d.year);
    let noDup = years.filter((year, id) => (
        years.indexOf(year) === id
    )).sort();
    console.log(years);
    console.log(noDup);
    let mobNum = [];
    for(let i=0; i< noDup.length; i++){
        console.log(mobiles);
        let count = 0;
        for(let j=0; j< mobiles.length; j++){
            if(noDup[i] === mobiles[j].year){
                count ++;
            }
        }
        mobNum.push(count)
    }
    console.log(mobNum);

    useEffect(()=>{
        const height = 250;
        const width = 100;
        const barWidth = 30;
        const margin = 3;

        let svg = d3.select('.canv')
            .append("svg")
            .attr('class', 'chart')
            .attr("width", `${width}%`)
            .attr("height", height);

        let scale = d3.scaleLinear()
            .domain([d3.min(mobNum), d3.max(mobNum)])
            .range([50, 100]);

        let bar = svg.selectAll("g")
            .data(mobNum)
            .enter()
            .append("g")
            .attr("transform", function(d, i) {
                return "translate(" + (barWidth * i) + "," +(height - scale(d)) +")";
            });
        bar.append("rect")
        .attr("width", barWidth - margin)
        .attr("height", function(d, i) {
            return scale(d);
        });
        bar.append("text")
       .attr("x", 10)
       .attr("y", 15)
    //    .attr("dy", ".35em")
       .attr('fill', 'white')
       .text(function (d) { return d; });
    },[])
    return (
        <div className="canv">
        </div>
    )
}

export default BarChart;