import React from "react";

class Input extends React.Component {
  render() {
    const { labelName, type, id, name } = this.props;
    return (
      <label>
        {labelName}
        <input type={type} id={id} name={name}></input>
      </label>
    );
  }
}

export default Input;
