import React from "react";

class CheckBox extends React.Component {
  render() {
    const { checked, onInputChange } = this.props;
    return (
      <label className='trunfoInput'>
        Super Trunfo:
        <input
          type='checkbox'
          id='trunfoInput'
          name='cardTrunfo'
          checked={checked}
          onChange={onInputChange}
        ></input>
      </label>
    );
  }
}

export default CheckBox;
