import React, { Component } from "react";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import { css } from "emotion";
const container = css`
  padding: 20px;
`;

const main = css`
  box-sizing: border-box;
  border: 2px solid black;
  max-width: 400px;
  margin: 100px auto;
  label: main;
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

  handleClick = buttonClicked => {
    console.log(buttonClicked);
  };

  render() {
    return (
      <div className={container}>
        <div className={main}>
          <Display value={this.state.current || this.state.total || "0"} />
          <Buttons clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
