import React from "react";
import "../style/inputs.css";

class Input extends React.Component {
  render() {
    const { className, labelName, type, id, name, value, onInputChange } =
      this.props;
    return (
      <label className={className} id='allLabel'>
        {labelName}:
        <input
          className='input'
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onInputChange}
        ></input>
      </label>
    );
  }
}

export default Input;
