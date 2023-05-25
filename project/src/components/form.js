import React from "react";
//import PropTypes from "prop-types";
import Input from "./input";
import TextArea from "./textArea";
import Select from "./select";
import CheckBox from "./checkbox";
import Button from "./button";

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      inSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form
        className='form'
        style={{ display: "flex", flexDirection: "column", gap: 20 }}
      >
        <Input
          className='nameInput'
          labelName='Nome'
          type='text'
          id='nameInput'
          name='cardName'
          value={cardName}
          onInputChange={onInputChange}
        />
        <TextArea value={cardDescription} onInputChange={onInputChange} />
        <Input
          className='attr1Input'
          labelName='Attr01'
          type='number'
          id='attr1Input'
          name='cardAttr1'
          value={cardAttr1}
          onInputChange={onInputChange}
        />
        <Input
          className='attr2Input'
          labelName='Attr02'
          type='number'
          id='attr2Input'
          name='cardAttr2'
          value={cardAttr2}
          onInputChange={onInputChange}
        />
        <Input
          className='attr3Input'
          labelName='Attr03'
          type='number'
          id='attr3Input'
          name='cardAttr3'
          value={cardAttr3}
          onInputChange={onInputChange}
        />
        <Input
          className='imageInput'
          labelName='Imagem'
          type='text'
          id='imageInput'
          name='cardImage'
          value={cardImage}
          onInputChange={onInputChange}
        />
        <CheckBox checked={cardTrunfo} onInputChange={onInputChange} />
        <Select value={cardRare} onInputChange={onInputChange} />
        <Button
          disabled={inSaveButtonDisabled}
          onSaveButtonClick={onSaveButtonClick}
        />
      </form>
    );
  }
}

// Form.propTypes = {
//   cardName: PropTypes.string.isRequired,
//   cardDescription: PropTypes.string.isRequired,
//   cardAttr1: PropTypes.string.isRequired,
//   cardAttr2: PropTypes.string.isRequired,
//   cardAttr3: PropTypes.string.isRequired,
//   cardImage: PropTypes.string.isRequired,
//   cardRare: PropTypes.string.isRequired,
//   cardTrunfo: PropTypes.bool.isRequired,
//   hasTrunfo: PropTypes.bool.isRequired,
//   isSaveButtonDisabled: PropTypes.bool.isRequired,
//   onInputChange: PropTypes.func.isRequired,
//   onSaveButtonClick: PropTypes.func.isRequired,
// };

export default Form;
