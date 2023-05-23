import React from "react";

class Button extends React.Component {
  render() {
    const { disabled, onSaveButtonClick } = this.props;
    return (
      <button
        className='saveButton'
        disabled={disabled}
        onClick={onSaveButtonClick}
      >
        Salvar
      </button>
    );
  }
}

export default Button;
