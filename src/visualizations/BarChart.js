import React, { Component } from "react";
import * as d3 from "d3";
import chroma from "chroma-js";

const width = 700;
const height = 400;
const red = "#eb6a5b";
const green = "#b6e86f";
const blue = "#52b6ca";
const colors = chroma.scale([blue, green, red]).mode("hsl");

class BarChart extends Component {
  drawChart() {
    const data = [12, 17, 16, 6, 9, 10];

    const svg = d3.select("svg");
    const colorDomain = d3.extent(data);
    const colorScale = d3.scaleLinear().domain(colorDomain);
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
  }

  componentDidMount() {
    this.drawChart();
  }

  render() {
    return <svg width={width} height={height}></svg>;
  }
}

export default BarChart;
