import React from "react";
import "./App.css";
import Form from "./components/form";
import Card from "./components/card";

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    // this.verifyInputs = this.verifyInputs.bind(this);
    //this.verifyButton = this.verifyButton.bind(this);

    this.state = {
      cardName: "",
      cardDescription: "",
      cardAttr1: "",
      cardAttr2: "",
      cardAttr3: "",
      cardImage: "",
      cardRare: "",
      cardTrunfo: false,
      hasTrunfo: false,
      inSaveButtonDisabled: false,
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    console.log("fui clicado");
  }

  // verifyInputs() {
  //   if (
  //     this.state.cardName === "1" ||
  //     this.state.cardDescription === "1" ||
  //     this.state.cardImage === "1"
  //   ) {
  //     return this.setState(this.inSaveButtonDisabled === true);
  //   }
  // }

  // verifyButton() {
  //     return this.state.inSaveButtonDisabled === false
  // }

  render() {
    return (
      <div>
        <header>Adicionar Nova Carta</header>
        <main>
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
          />
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
        </main>
      </div>
    );
  }
}

export default App;
