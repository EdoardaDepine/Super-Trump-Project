import React from "react";

class Button extends React.Component {
  render() {
    const { disabled, onSaveButtonClick, name } = this.props;
    return (
      <button
        className='saveButton'
        disabled={disabled}
        onClick={onSaveButtonClick}
      >
        {name}
      </button>
    );
  }
}

export default Button;
