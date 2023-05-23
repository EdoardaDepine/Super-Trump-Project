import React from "react";

class Select extends React.Component {
  render() {
    return (
      <label>
        Raridade
        <select className='rareInput'>
          <option value='normal'>Normal</option>
          <option value='rare'>Raro</option>
          <option value='suchRare'>Muito raro</option>
        </select>
      </label>
    );
  }
}

export default Select;
