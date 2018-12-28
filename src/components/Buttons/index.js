import React, { Component } from "react";
import Button from "./Button";
import { css } from "emotion";
import PropTypes from "prop-types";

const buttonStyles = css`
  display: flex;
  max-width: 100%;
`;

class Buttons extends Component {
  render() {
    const { clickHandler } = this.props;
    return (
      <div>
        <div className={buttonStyles}>
          <Button color="#607d8b" name="AC" clickHandler={clickHandler} />
          <Button color="#607d8b" name="%" clickHandler={clickHandler} />
          <Button color="#607d8b" name="+/-" clickHandler={clickHandler} />
          <Button color="#ff5722" name="÷" clickHandler={clickHandler} />
        </div>
        <div className={buttonStyles}>
          <Button color="#607d8b" name="7" clickHandler={clickHandler} />
          <Button color="#607d8b" name="8" clickHandler={clickHandler} />
          <Button color="#607d8b" name="9" clickHandler={clickHandler} />
          <Button color="#ff5722" name="x" clickHandler={clickHandler} />
        </div>
        <div className={buttonStyles}>
          <Button color="#607d8b" name="4" clickHandler={clickHandler} />
          <Button color="#607d8b" name="5" clickHandler={clickHandler} />
          <Button color="#607d8b" name="6" clickHandler={clickHandler} />
          <Button color="#ff5722" name="-" clickHandler={clickHandler} />
        </div>
        <div className={buttonStyles}>
          <Button color="#607d8b" name="1" clickHandler={clickHandler} />
          <Button color="#607d8b" name="2" clickHandler={clickHandler} />
          <Button color="#607d8b" name="3" clickHandler={clickHandler} />
          <Button color="#ff5722" name="+" clickHandler={clickHandler} />
        </div>
        <div className={buttonStyles}>
          <Button color="#607d8b" name="0" clickHandler={clickHandler} />
          <Button color="#607d8b" name="." clickHandler={clickHandler} />
          <Button color="#ff5722" name="=" clickHandler={clickHandler} />
        </div>
      </div>
    );
  }
}

Buttons.proptypes = {
  clickHandler: PropTypes.function
};

export default Buttons;
