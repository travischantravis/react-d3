import React, { Component } from "react";
import * as d3 from "d3";
import chroma from "chroma-js";

const width = 650;
const height = 400;

class BarChart extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {}

  render() {
    return <svg width={width} height={height}></svg>;
  }
}

export default BarChart;
