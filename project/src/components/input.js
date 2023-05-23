import React from "react";

class Input extends React.Component {
  render() {
    const { className, labelName, type, id, name, value } = this.props;
    return (
      <label className={className}>
        {labelName}
        <input type={type} id={id} name={name} value={value}></input>
      </label>
    );
  }
}

export default Input;
