import React, { Component } from "react";
import * as d3 from "d3";
import chroma from "chroma-js";

const width = 700;
const height = 400;
const margin = 20;
const red = "#eb6a5b";
const green = "#b6e86f";
const blue = "#52b6ca";
const colors = chroma.scale([blue, green, red]).mode("hsl");

class BarChart extends Component {
  drawChart() {
    const data = [12, 17, 16, 6, 9, 10];

    const svg = d3.select("svg");

    // Color
    const colorDomain = d3.extent(data);
    const colorScale = d3.scaleLinear().domain(colorDomain);

    // Axis
    const yScale = d3
      .scaleLinear()
      .range(height - margin, margin)
      .domain([0, d3.max(data)]);
    const yAxis = d3
      .axisLeft(yScale)
      // .scale(yScale)
      .tickFormat((d) => d);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => height - d * 10)
      .attr("width", 25)
      .attr("height", (d, i) => d * 10)
      .attr("fill", (d, i) => colors(colorScale(d)));

    svg.append("g").call(yAxis).attr("transform", "translate(0,200)");
  }

  componentDidMount() {
    this.drawChart();
  }

  componentDidUpdate() {
    // this.drawChart();
  }

  render() {
    return (
      <svg width={width} height={height}>
        {/* <g>
          <g className="axis" transform={`translate(${margin}, 0)`} />
        </g> */}
      </svg>
    );
  }
}

export default BarChart;
