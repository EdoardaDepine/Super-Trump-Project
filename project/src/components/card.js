import React from "react";

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div className='card'>
        <p className='nameCard' name='cardName'>
          {cardName}
        </p>
        <img
          className='imgCard'
          name='imgCard'
          src={cardImage}
          alt={cardName}
        ></img>
        <p className='descriptionCard' name='cardDescription'>
          {cardDescription}
        </p>
        <p className='attr1Card' name='cardAttr1'>
          {cardAttr1}
        </p>
        <p className='attr2Card' name='cardAttr2'>
          {cardAttr2}
        </p>
        <p className='attr3Card' name='cardAttr3'>
          {cardAttr3}
        </p>
        <p className='rareCard' name='cardRare'>
          {cardRare}
        </p>
        {cardTrunfo && (
          <p className='trunfoCard' name='cardTrunfo'>
            Super Trunfo
          </p>
        )}
      </div>
    );
  }
}

export default Card;
