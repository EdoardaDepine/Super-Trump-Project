import React from "react";

class CheckBox extends React.Component {
  render() {
    const { checked } = this.props;
    return (
      <label className='trunfoInput'>
        Super Trunfo
        <input
          type='checkbox'
          id='trunfoInput'
          name='trunfoInput'
          checked={checked}
        ></input>
      </label>
    );
  }
}

export default CheckBox;
