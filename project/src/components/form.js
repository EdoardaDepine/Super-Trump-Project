import React from "react";
import Input from "./input";
import TextArea from "./textArea";
import Select from "./select";
import CheckBox from "./checkbox";
import Button from "./button";
import "../style/form.css";

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
      savedCarts,
    } = this.props;

    return (
      <form className='form'>
        <h2 className='titleForm'>Adicionar Nova Carta:</h2>
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
        <div className='checkbox'>
          {savedCarts.length > 0 ? (
            savedCarts.forEach((obj) => {
              if (obj.cardTrunfo === true) {
                return (
                  <p>Você já possui uma carta Super Trunfo em seu baralho!</p>
                );
              }
              return (
                <CheckBox checked={cardTrunfo} onInputChange={onInputChange} />
              );
            })
          ) : (
            <CheckBox checked={cardTrunfo} onInputChange={onInputChange} />
          )}
        </div>
        <Select value={cardRare} onInputChange={onInputChange} />
        <Button
          disabled={inSaveButtonDisabled}
          onSaveButtonClick={onSaveButtonClick}
          name='Salvar'
          classNameButton='saveButton'
        />
      </form>
    );
  }
}

export default Form;
