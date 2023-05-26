import React from "react";
import "./App.css";
import Form from "./components/form";
import Card from "./components/card";
import Button from "./components/button";

class App extends React.Component {
  state = {
    cardName: "",
    cardDescription: "",
    cardAttr1: "",
    cardAttr2: "",
    cardAttr3: "",
    cardImage: "",
    cardRare: "",
    cardTrunfo: false,
    hasTrunfo: false,
    inSaveButtonDisabled: true,
    savedCarts: [],
  };

  verifyInputs = () => {
    if (
      this.state.cardName !== "" &&
      this.state.cardDescription !== "" &&
      this.state.cardImage !== "" &&
      this.verifyAttributes()
    ) {
      return this.setState({ inSaveButtonDisabled: false });
    }
    return this.setState({ inSaveButtonDisabled: true });
  };

  verifyAttributes = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const attr1 = Number(cardAttr1) ?? 0;
    const attr2 = Number(cardAttr2) ?? 0;
    const attr3 = Number(cardAttr3) ?? 0;
    const sum = attr1 + attr2 + attr3;

    if (typeof sum !== "number") return false;
    if (sum > 210 && sum < 0) return false;
    if (attr1 > 90 && attr1 < 0) return false;
    if (attr2 > 90 && attr2 < 0) return false;
    if (attr3 > 90 && attr3 < 0) return false;

    return true;
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState(
      {
        [name]: value,
      },
      () => this.verifyInputs()
    );
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const obj = {
      cardName: this.state.cardName,
      cardDescription: this.state.cardDescription,
      cardImage: this.state.cardImage,
      cardAttr1: this.state.cardAttr1,
      cardAttr2: this.state.cardAttr2,
      cardAttr3: this.state.cardAttr3,
      cardRare: this.state.cardRare,
      cardTrunfo: this.state.cardTrunfo,
    };
    this.setState({
      savedCarts: [...this.state.savedCarts, obj],
      cardName: "",
      cardDescription: "",
      cardAttr1: "",
      cardAttr2: "",
      cardAttr3: "",
      cardImage: "",
      cardRare: "",
      cardTrunfo: false,
    });
  };

  onDeleteCard = (event) => {
    const cardName =
      event.target.parentNode.childNodes[0].childNodes[0].innerText;
    const filter = this.state.savedCarts.filter(
      (card) => card.cardName !== cardName
    );
    this.setState({
      savedCarts: filter,
    });
  };

  render() {
    return (
      <main className='main'>
        <div className='formAndPreviousCard'>
          <Form
            onInputChange={this.onInputChange}
            onSaveButtonClick={this.onSaveButtonClick}
            inSaveButtonDisabled={this.state.inSaveButtonDisabled}
            cardName={this.state.cardName}
            cardDescription={this.state.cardDescription}
            cardAttr1={this.state.cardAttr1}
            cardAttr2={this.state.cardAttr2}
            cardAttr3={this.state.cardAttr3}
            cardImage={this.state.cardImage}
            cardRare={this.state.cardRare}
            cardTrunfo={this.state.cardTrunfo}
            savedCarts={this.state.savedCarts}
          />
          <div className='cardPreview'>
            <h3 className='titleCardPreview'>Preview:</h3>
            <Card
              cardName={this.state.cardName}
              cardDescription={this.state.cardDescription}
              cardAttr1={this.state.cardAttr1}
              cardAttr2={this.state.cardAttr2}
              cardAttr3={this.state.cardAttr3}
              cardImage={this.state.cardImage}
              cardRare={this.state.cardRare}
              cardTrunfo={this.state.cardTrunfo}
            />
          </div>
        </div>
        <div className='allCards' style={{ display: "flex" }}>
          {this.state.savedCarts.map((obj, i) => (
            <div className='ojectCard'>
              <Card
                key={`${i}${obj.cardName}`}
                cardName={obj.cardName}
                cardDescription={obj.cardDescription}
                cardAttr1={obj.cardAttr1}
                cardAttr2={obj.cardAttr2}
                cardAttr3={obj.cardAttr3}
                cardImage={obj.cardImage}
                cardRare={obj.cardRare}
                cardTrunfo={obj.cardTrunfo}
              />
              <Button
                name='Excluir'
                onSaveButtonClick={this.onDeleteCard}
                classNameButton='deleteButton'
              />
            </div>
          ))}
        </div>
      </main>
    );
  }
}

export default App;
