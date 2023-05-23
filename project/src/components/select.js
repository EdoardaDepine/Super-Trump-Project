import React from "react";

class Select extends React.Component {
  render() {
    const { value, onInputChange } = this.props;
    return (
      <label className='rareInput'>
        Raridade
        <select value={value} onChange={onInputChange}>
          <option value='normal'>Normal</option>
          <option value='rare'>Raro</option>
          <option value='suchRare'>Muito raro</option>
        </select>
      </label>
    );
  }
}

export default Select;
