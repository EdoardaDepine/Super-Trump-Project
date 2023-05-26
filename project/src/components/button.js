import React from "react";
import "../style/button.css";

class Button extends React.Component {
  render() {
    const { disabled, onSaveButtonClick, classNameButton, name } = this.props;
    return (
      <button
        type='button'
        className={classNameButton}
        disabled={disabled}
        onClick={onSaveButtonClick}
      >
        {name}
      </button>
    );
  }
}

export default Button;
