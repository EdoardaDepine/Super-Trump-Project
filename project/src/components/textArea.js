import React from "react";

class TextArea extends React.Component {
  render() {
    const { value, onInputChange } = this.props;
    return (
      <label className='descriptionInput'>
        Descrição
        <textarea
          value={value}
          onChange={onInputChange}
          name='cardDescription'
        ></textarea>
      </label>
    );
  }
}

export default TextArea;
