import React, { Component } from "react";
import "./App.css";
import BarChart from "./visualizations/BarChart";

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    temps: {},
  };

  componentDidMount() {
    // url relative to public/index.html
    fetch("/sf.json")
      .then((res) => res.json())
      .then((sf) => {
        sf.forEach((day) => (day.date = new Date(day.date)));

        this.setState({ temps: sf });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const data = this.state.temps;
    console.log(this.state.temps);
    return (
      <div className="App">
        <h2>Data Visualisation: React + d3</h2>
        <BarChart data={data} />
      </div>
    );
  }
}

export default App;
