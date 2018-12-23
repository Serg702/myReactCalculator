import React from "react";
import { css } from "emotion";
import PropTypes from "prop-types";

const Button = props => {
  const styles = css`
    background-color: ${props.color};
    font-size: 40px;
    min-width: 24%;
    padding-bottom: 10px;
    text-align: center;
    border: 2px solid #fff;
    label: buttonStyle;
  `;
  return <div className={styles}>{props.name}</div>;
};

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  clickHandler: PropTypes.func
};

export default Button;
