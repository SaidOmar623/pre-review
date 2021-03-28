import React from 'react';
import * as d3 from 'd3';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const DonutChart = (props) => {
    let mobiles = useSelector(state => state.products.items);

    let brands = mobiles.map(d => d.brand);
    let noDup = brands.filter((brand, id) => (
        brands.indexOf(brand) === id
    ));
    console.log(brands);
    console.log(noDup);
    let mobNum = [];
    for(let i=0; i< noDup.length; i++){
        console.log(mobiles);
        let count = 0;
        for(let j=0; j< mobiles.length; j++){
            if(noDup[i] === mobiles[j].brand){
                count ++;
            }
        }
        mobNum.push(count)
    }
    console.log(mobNum);

    useEffect(()=>{
        const height = 250;
        const width = 300;

        let svg = d3.select('.canv')
            .append("svg")
            .attr('class', 'chart')
            .attr("width", width)
            .attr("height", height);

        let radius = Math.min(width, height) / 2,
        g = svg.append("g").attr("transform", "translate(" + parseInt(width) / 2 + "," + parseInt(height) / 2 + ")");

        let color = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c']);

        // Generate the pie
        let pie = d3.pie();

        // Generate the arcs
        let arc = d3.arc()
                .innerRadius(50)
                .outerRadius(radius);

        //Generate groups
        let arcs = g.selectAll("arc")
                .data(pie(mobNum))
                .enter()
                .append("g")
                .attr("class", "arc")

        //Draw arc paths
        arcs.append("path")
            .attr("fill", function(d, i) {
                return color(i);
            })
            .attr("d", arc);
    })
    return (
        <div className="canv"></div>
    )
}

export default DonutChart;