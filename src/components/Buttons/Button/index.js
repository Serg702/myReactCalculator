import React from "react";
import { css } from "emotion";
import PropTypes from "prop-types";

const Button = props => {
  const cotainerStyles = css`
    min-width: ${props.name === "0" ? "50%" : "25%"};
    button:hover {
      opacity: 0.7;
    }

    button:active {
      color: #ff0000;
    }
  `;
  const styles = css`
    background-color: ${props.color};
    font-size: 40px;
    font-weight: bold;
    width: 100%;
    text-align: center;
    padding: 5px 0;
    label: buttonStyle;
  `;
  return (
    <div className={cotainerStyles}>
      <button className={styles} onClick={() => props.clickHandler(props.name)}>
        {props.name}
      </button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  clickHandler: PropTypes.func
};

export default Button;
