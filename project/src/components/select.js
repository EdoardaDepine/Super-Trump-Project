import React from "react";

class Select extends React.Component {
  render() {
    const { value, onInputChange } = this.props;
    return (
      <label className='rareInput'>
        Raridade:
        <select
          value={value}
          onChange={onInputChange}
          name='cardRare'
          className='selectInput'
        >
          <option>Normal</option>
          <option>Raro</option>
          <option>Muito raro</option>
        </select>
      </label>
    );
  }
}

export default Select;
