import React, { Component } from "react";
import Display from "./components/Display";
import { css } from "emotion";
const main = css`
  border: 2px solid black;
  max-width: 400px;
  margin: 100px auto;
`;
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
      <div className={main}>
        <Display value={this.state.current || this.state.total || "0"} />
      </div>
    );
  }
}

export default App;
