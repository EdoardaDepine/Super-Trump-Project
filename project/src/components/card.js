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
        <p className='nameCard' name='nameCard'>
          {cardName}
        </p>
        <img
          className='imgCard'
          name='imgCard'
          src={cardImage}
          alt={cardName}
        ></img>
        <p className='descriptionCard' name='descriptionCard'>
          {cardDescription}
        </p>
        <p className='attr1Card' name='attr1Card'>
          {cardAttr1}
        </p>
        <p className='attr2Card' name='attr2Card'>
          {cardAttr2}
        </p>
        <p className='attr3Card' name='attr3Card'>
          {cardAttr3}
        </p>
        <p className='rareCard' name='rareCard'>
          {cardRare}
        </p>
        <p className='trunfoCard' name='trunfoCard'>
          {cardTrunfo}
        </p>
      </div>
    );
  }
}

export default Card;
