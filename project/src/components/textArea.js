import React from "react";

class TextArea extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <label className='descriptionInput'>
        Descrição
        <textarea value={value}></textarea>
      </label>
    );
  }
}

export default TextArea;
