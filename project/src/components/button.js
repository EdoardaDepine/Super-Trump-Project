import React from "react";

class Button extends React.Component {
  render() {
    const {disabled} = this.props;
    return (
      <button className='saveButton' disabled={disabled}>
        Salvar
      </button>
    );
  }
}

export default Button;
