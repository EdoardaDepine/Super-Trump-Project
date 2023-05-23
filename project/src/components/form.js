import React from "react";
import Input from "./input";
import Select from "./select";
import Button from "./button";

class Form extends React.Component {
  render() {
    return (
      <form className='form'>
        <Input labelName='Nome' type='text' id='nameInput' name='nameInput' />
        <Input
          labelName='Descrição'
          type='textarea'
          id='descriptionInput'
          name='descriptionInput'
        />
        <Input
          labelName='Attr01'
          type='number'
          id='attr1Input'
          name='attr1Input'
        />
        <Input
          labelName='Attr02'
          type='number'
          id='attr2Input'
          name='attr2Input'
        />
        <Input
          labelName='Attr03'
          type='number'
          id='attr3Input'
          name='attr3Input'
        />
        <Input
          labelName='Imagem'
          type='text'
          id='imageInput'
          name='imageInput'
        />
        <Select />
        <Input
          labelName='Super Trunfo'
          type='checkbox'
          id='trunfoInput'
          name='trunfoInput'
        />
        <Button />
      </form>
    );
  }
}

export default Form;
