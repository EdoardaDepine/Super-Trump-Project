import React from "react";

class Select extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <label className='rareInput'>
        Raridade
        <select value={value}>
          <option>Normal</option>
          <option>Raro</option>
          <option>Muito raro</option>
        </select>
      </label>
    );
  }
}

export default Select;
