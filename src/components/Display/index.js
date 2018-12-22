import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

const styles = css`
  width: 100%;
  background-color: orange;
  font-size: 40px;
  text-align: right;
`;

class Display extends Component {
  render() {
    return <div className={styles}>{this.props.value}</div>;
  }
}

Display.propTypes = {
  value: PropTypes.string
};

export default Display;
