import React from "react";
import "../style/card.css";

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
          style={{ width: 209, height: 209 }}
          className='imgCard'
          name='imgCard'
          src={cardImage}
          alt={cardName}
        ></img>
        <p className='descriptionCard' name='cardDescription'>
          {cardDescription}
        </p>
        <p className='attr1Card' name='cardAttr1'>
          ATTR: {cardAttr1}
        </p>
        <p className='attr2Card' name='cardAttr2'>
          ATTR: {cardAttr2}
        </p>
        <p className='attr3Card' name='cardAttr3'>
          ATTR: {cardAttr3}
        </p>
        <div className='rareAndSuperTrunfo'>
          <p className='rareCard' name='cardRare'>
            {cardRare}
          </p>
          {cardTrunfo && (
            <p className='trunfoCard' name='cardTrunfo'>
              Super Trunfo
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default Card;
