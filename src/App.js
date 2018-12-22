import React, { Component } from "react";
import Display from "./components/Display";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      current: null,
      operation: null
    };
  }

  render() {
    return (
      <div className="App">
        <Display value={this.state.current || this.state.total || "0"} />
      </div>
    );
  }
}

export default App;
